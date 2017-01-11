# JSON and GeoJSON

+ JSON = javascript object notation
+ A standard for storing and transmitting data. Unlike a spreadsheet, allows for nested data
+ GeoJSON: a JSON format designed to be used with geographic data

> GeoJSON is a format for encoding a variety of geographic data structures. GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects. ([source](http://geojson.org/))

# Posing questions

+ Look at example maps of ML data compared to historical markers and historical preservation sites in Philly [here](http://upenndigitalscholarship.org/dsfellows16/mapdemo/mapdemo.html)
+ What do these maps tell you? What do they NOT tell you? What features would you want to add?
+ With a partner, pose a question about these data sets or a subset of them that you could answer/address using a new visualization

# Raw data

+ [Monument Lab](https://www.opendataphilly.org/dataset/speculative-monuments-for-philadelphia) (CSV or GeoJSON)
+ [Historical preservation sites](http://www.preservationalliance.com/explore-philadelphia/) in Philly (CSV or GeoJSON - click "Export")
+ [PA historical markers](http://www.phmc.state.pa.us/apps/historical-markers.html) (search for Philadelphia County, Export to Excel, save as CSV)

If you need to convert between CSV and JSON (or other formats), try [JSON converter package](https://atom.io/packages/json-converter) for Atom.

LINK TO ZIP FILE

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

Create an HTML file in atom. Title it something like "mapdemo.html". The page's head should look like this:

```
<head>
  <meta charset='utf-8' />
  <title>YOUR TITLE HERE</title>
  <script src='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.js'></script>
  <link href='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.css' rel='stylesheet' />
  <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
  </style>
</head>
```

Include the following in the body of the page:

```
<div id='map'></div>
<script>
mapboxgl.accessToken = '<YOUR ACCESS TOKEN HERE>';
var map = new mapboxgl.Map({
    container: 'map',
    style: '<YOUR STYLE URL HERE>'
});
</script>
```

[(source)](https://www.mapbox.com/mapbox-gl-js/api/)

To find your access token and style URL, go to the Mapbox site and click on Styles, then on the name of your map. Click Share, Develop & Use (on the right side of the page).

(LINK TO EXAMPLE CODE FROM MAPDEMO PAGE)

Play around with the size of the map by changing the number of pixels (px). Note that you can replace "400px" with something like "100%" if you want the map to fill a particular portion of the screen.

CHECK: INCLUDING THIS IN HEAD VS DIV?

Log into your Reclaim site and use the file manager to upload the HTML file. The page with your embedded map should now be visible at yoursitename.com/mapdemo.html (or whatever you named the file).

# Styling your map

Mapbox GL JS is a javascript library that can be used to style/format Mapbox maps, giving you options beyond what you can do with Mapbox's web interface.

See examples of code that can be used to style your Mapbox map [here](https://www.mapbox.com/mapbox-gl-js/examples/). See also [my example](http://upenndigitalscholarship.org/dsfellows16/mapdemo/mapboxstyle.html) ML map with some interactive features added using Mapbox GL JS; see the code on Github (LINK). **Note that you'll need a few additional lines of code in ```<head>``` in order for the map to display properly.**

Which parts of the code for the ML map are producing which parts of the map?

Can you adapt this code to display the map you just created on your Reclaim site?

Pick an example from the Mapbox GL JS documentation and try adding it to your map.

# Additional resources
+ More on Mapbox GL JS: [The End of CartoCSS](https://www.mapbox.com/blog/the-end-of-cartocss/) and [Data-Driven Styling](https://www.mapbox.com/blog/data-driven-styling/)
+ [Carto](https://carto.com/) is a commonly used alternative to Mapbox. Carto seems to offer a little less flexibility in terms of map design, but it makes it much easier to add features like pop-up text and legends to your map. It should be easy to learn after working with Mapbox!
+ [Leaflet](http://leafletjs.com/) is a javascript library that can be used with Carto and other mapping programs. (See a [comparison](https://www.mapbox.com/help/mapbox-gl-js-fundamentals/) with Mapbox GL JS.)

# Loose ends

possible to work with historic maps?

purple: 7B00B4 (hist markers)
pink: ff0059 (historic resources)
blue: 5ca2d1 (ML)


include in zip file:
cleaned and not cleaned versions of data sets
the code that's creating the map demo page
any other examples of carto css, etc that are up on the website


use custom styling to get:
a legend/key
text popups
change something like the appearance of the points?
option for the person looking at the map to change base map/what data it displays?
