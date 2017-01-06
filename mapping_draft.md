# JSON and GeoJSON

+ JSON = javascript object notation
+ A standard for storing and transmitting data. Unlike a spreadsheet, allows for nested data
+ GeoJSON: a JSON format designed to be used with geographic data

> GeoJSON is a format for encoding a variety of geographic data structures. GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects. ([source](http://geojson.org/))

# Posing questions

+ Look at example maps of ML data compared to historical markers and historical preservation sites in Philly [here](http://upenndigitalscholarship.org/dsfellows16/mapdemo/mapdemo.html)
+ What do these maps tell you? What do they NOT tell you?
+ With a partner, pose a question about these data sets or a subset of them that you could answer/address using a new visualization

# Raw data

+ [Monument Lab](https://www.opendataphilly.org/dataset/speculative-monuments-for-philadelphia) (CSV or GeoJSON)
+ [Historical preservation sites](http://www.preservationalliance.com/explore-philadelphia/) in Philly (CSV or GeoJSON - click "Export")
+ [PA historical markers](http://www.phmc.state.pa.us/apps/historical-markers.html) (search for Philadelphia County, Export to Excel, save as CSV)

If you need to convert between CSV and JSON (or other formats), try [JSON converter package](https://atom.io/packages/json-converter) for Atom.

make a zip file of cleaned versions of these all in the same place?

# Preparing and cleaning data

+ In Atom: Packages -> Settings View -> Install Packages/Themes. Search for "pretty-json" and install. It should show up under Packages menu. Click "Prettify" to add white space/indents to your JSON file to make it more readable
+ What's in your GeoJSON files?
+ Try uploading data to Mapbox
+ When you get error messages, what's causing them?

had to clean the historical markers data set a little to get it to work as a dataset: latitude was misspelled as "lattitude," coordinates for two rows were blank. have everyone troubleshoot this

in the historical resources dataset, labels for latitude and longitude coordinates are reversed ;-;

experiment with editing/paring down the dataset within mapbox- or is it easier to do in an outside program like openrefine/excel? try both?

# Using Mapbox

Try uploading your data and creating a visualization in [Mapbox](https://www.mapbox.com/). You'll need to create a free account first.

Basic workflow:
+ Upload a dataset (can be CSV or GeoJSON)
+ Edit your dataset
+ Export to tileset (which prepares your dataset to be used in a visualization)
+ Create a style and add tilesets to it. This is what will generate an actual map whose formatting you can change.

## Tips and tricks

+ **To get your map to automatically display Philly instead of a zoomed-out view of the entire earth**: in the top right-hand corner, click: Map position -> Zoom. When you get your map zoomed and centered in the way you want, click the button for Lock default position.
+ **To add text to your map**: duplicate the layer containing the points you want to add text to. On the screen that lets you edit the layer, click Select data. Click the T icon to change the layer type to text. Then go back to the Style menu. "Text field" will let you choose what part of your data to display as text. "Halo" will add a border to your text, making it easier to read on your map.
+ **To change formatting for multiple layers at once**: control-click to select multiple layers at once. You can now edit those layers simultaneously or add them to a group using the "Group layers" icon in the top left. This will create a group of layers that you can edit all together. (Especially useful for getting text to show up in a standard font/size.)
+ **To share your map**: clicking Publish (upper left-hand corner) will give you a URL you can use to share your map. This will let viewers use the zoom feature, etc. OR click Styles -> the name of your map -> Generate static image. This will give you a URL for a flat/non-interactive image of a part of the map, and HTML you can use to put that image online.

## See also
+ [How to use style editor](https://www.mapbox.com/help/getting-started-mapbox-studio-2/)
+ [Mapbox help](https://www.mapbox.com/help/)


# Embedding your map in a website

Create an HTML file in atom. Title it something like "mapdemo.html". Include the following in its head:

```
<script src='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.css' rel='stylesheet' />
```

Include the following in the body of the page:

```
<div id='map' style='width: 400px; height: 300px;'></div>
<script>
mapboxgl.accessToken = '<your access token here>';
var map = new mapboxgl.Map({
    container: 'map',
    style: '<your style URL here>'
});
</script>
```

[(source)](https://www.mapbox.com/mapbox-gl-js/api/)

To find your access token and style URL, go to the Mapbox site and click on Styles, then on the name of your map. Click Share, Develop & Use (on the right side of the page).

(LINK TO EXAMPLE CODE FROM MAPDEMO PAGE)

Play around with the size of the map by changing the number of pixels (px). Note that you can replace "400px" with something like "100%" if you want the map to fill a particular portion of the screen.

Log into your Reclaim site and use the file manager to upload the HTML file. The page with your embedded map should now be visible at yoursitename.com/mapdemo.html (or whatever you named the file).

# Styling your map

https://www.mapbox.com/mapbox-gl-js/api/

put an examples of the code to do a few things on github, or link to mapbox documentation

how much can we realistically do with this? this looks like javascript- can you also use carto CSS? go for that instead if possible

explains how to do popups etc: https://www.mapbox.com/help/getting-started-mapbox-studio-3/

# Additional resources
+ [Carto](https://carto.com/) is a commonly used alternative to Mapbox. In my experience, Carto makes it a little easier to add features like pop-up text and legends to your map, and offers a

# Loose ends

look for images of historic maps to use

[Leaflet](http://leafletjs.com/) - used to make preservation alliance map

purple: 7B00B4 (hist markers)
pink: ff0059 (historic resources)
blue: 5ca2d1 (ML)

https://www.mapbox.com/help/style-symbol-layer-studio/ icons etc
