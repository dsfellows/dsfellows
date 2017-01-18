// This tells your javascript what map style it's modifying and gives it permission to do that.

mapboxgl.accessToken = 'pk.eyJ1IjoieWRzaGlyb21hIiwiYSI6ImNpeGo5d2JuNjAwNWQyd28wZGRlc2NoazYifQ.PK8UhAmtIWhmUnzlB7w3Ug'; // Your access token here
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ydshiroma/cixrspjjq00142rn2pbtteoe7' // Your style URL here
});

// This creates popups that show the Monument Lab proposal titles.

// When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['monument-lab'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var proposalName = "Name: ", transcription = "Transcription: ", url = "URL: ";
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(proposalName.bold() + feature.properties.name + ' \n \n ' + transcription.bold() + feature.properties.transcript +  ' \n \n ' + url.bold() + feature.properties.form_image_b)
        .addTo(map);
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});

// This creates the Mapbox navigation control, which lets you zoom in and out.

map.addControl(new mapboxgl.NavigationControl());

// This creates the menu that lets you show and hide different layers.

var toggleableLayerIds = [ 'Monument Lab', 'Historic Preservation Sites', 'Historical Markers' ]; // You can fill in the layer names as they appear in Mapbox Style Editor

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
