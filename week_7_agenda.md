# Mapping

## Posing questions

+ Look at example maps of ML data compared to historical markers and historical preservation sites in Philly [here](http://upenndigitalscholarship.org/dsfellows16/mapdemo/mapdemo.html)
+ What do these maps tell you? What do they NOT tell you? What features would you want to add?
+ With a partner, pose a question about these data sets or a subset of them that you could answer/address using a new visualization

## Raw data

+ [Monument Lab](https://www.opendataphilly.org/dataset/speculative-monuments-for-philadelphia) (CSV or GeoJSON)
+ [Historical preservation sites](http://www.preservationalliance.com/explore-philadelphia/) in Philly (CSV or GeoJSON - click "Export")
+ [PA historical markers](http://www.phmc.state.pa.us/apps/historical-markers.html) (search for Philadelphia County, Export to Excel, save as CSV)

If you need to convert between CSV and JSON (or other formats), try [JSON converter package](https://atom.io/packages/json-converter) for Atom. (CSV -> JSON seems a little buggy.)

## JSON and GeoJSON

+ JSON = javascript object notation
+ A standard for storing and transmitting data. Unlike a spreadsheet, allows for nested data
+ GeoJSON: a JSON format designed to be used with geographic data

> GeoJSON is a format for encoding a variety of geographic data structures. GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects. ([source](http://geojson.org/))

[A more detailed look at GeoJSON structure](http://www.macwright.org/2015/03/23/geojson-second-bite.html)

## Preparing and cleaning data

+ In Atom: Packages -> Settings View -> Install Packages/Themes. Search for "pretty-json" and install. It should show up under Packages menu. Click "Prettify" to add white space/indents to your JSON file to make it more readable
+ What's in your GeoJSON files?
+ Try uploading data to Mapbox
+ When you get error messages, what's causing them?

had to clean the historical markers data set a little to get it to work as a dataset: latitude was misspelled as "lattitude," coordinates for two rows were blank. have everyone troubleshoot this

in the historical resources dataset, labels for latitude and longitude coordinates are reversed ;-;

it doesn't like null values in the ML data set

LINK TO ZIP FILE

## Using Mapbox

Try uploading your data and creating a visualization in [Mapbox](https://www.mapbox.com/). You'll need to create a free account first.

Basic workflow:
+ Upload a dataset (can be CSV or GeoJSON)
+ Edit your dataset
+ Export to tileset (which prepares your dataset to be used in a visualization)
+ Create a style and add tilesets to it. This is what will generate an actual map whose formatting you can change.
+ To work with a subset of the data rather than the full set, click on the layer you want to edit, click Select data, and add a filter. "All of the filters" will display only the categories you indicate in the filter; "None of the filters" will hide the categories you choose.

### Tips and tricks

+ **To get your map to automatically display Philly instead of a zoomed-out view of the entire earth**: in the top right-hand corner, click: Map position -> Zoom. When you get your map zoomed and centered in the way you want, click the button for Lock default position.
+ **To add text to your map**: duplicate the layer containing the points you want to add text to. On the screen that lets you edit the layer, click Select data. Click the T icon to change the layer type to text. Then go back to the Style menu. "Text field" will let you choose what part of your data to display as text. "Halo" will add a border to your text, making it easier to read on your map.
+ **To change formatting for multiple layers at once**: control-click to select multiple layers at once. You can now edit those layers simultaneously or add them to a group using the "Group layers" icon in the top left. This will create a group of layers that you can edit all together. (Especially useful for getting text to show up in a standard font/size.)
+ **To share your map**: clicking Publish (upper left-hand corner) will give you a URL you can use to share your map. This will let viewers use the zoom feature, etc. OR click Styles -> the name of your map -> Generate static image. This will give you a URL for a flat/non-interactive image of a part of the map, and HTML you can use to put that image online.

### See also
+ [How to use style editor](https://www.mapbox.com/help/getting-started-mapbox-studio-2/)
+ [Mapbox help](https://www.mapbox.com/help/)


## Embedding your map

Let's experiment with putting the map you just designed on your Reclaim site and changing its style with Javascript (instead of using the Mapbox style editor).

Look at the mapboxstyle.html and mapboxstyle.js files (LINK). These are the files that are creating this [Mapbox demo page](http://upenndigitalscholarship.org/dsfellows16/mapdemo/mapboxstyle.html) on the DS Fellows site. The HTML file shows how the page should be displayed. Toward its end, it calls the Javascript file, which sets up some actions you can perform on the map (like pulling up pop-ups when you click on certain points).

Copy these files, log into Reclaim, open your file manager, and upload them to the public_html folder. What happened? Can you figure out how to view the page you just created?

Now, try changing the files to display your map instead of the demo one. At the top of the Javascript file are an access token and style URL. You'll need to replace these with the access token for your account and the style URL for your map. To find these, go to the Mapbox site and click on Styles, then on the name of your map. Click Share, Develop & Use (on the right side of the page). Copy the access token and style URL into your file, save it, and reupload it to Reclaim.

## Styling your map

You'll notice that your map now has a few extra features added that you didn't set up in the Mapbox editor. What parts of your code seem to be creating those features? If you want, try commenting sections of your code out and then back in to see what changes (in Atom, you can highlight the text you want to comment out and use command-backslash).

In your HTML file, play around with the size of the map by changing the number of pixels (px). Note that you can replace "400px" with something like "100%" if you want the map to fill a particular portion of the screen. (As far as I can tell, the size in the ```<div>``` overrides the one in the ```<head>```, but you can experiment with this on your own.)

Now look at your Javascript file. This uses Mapbox GL JS, a javascript library that can be used to style/format Mapbox maps, giving you options beyond what you can do with Mapbox's web interface.

Find the section of the file that controls the menu. Can you change it to allow you to show/hide the different layers of your map?

Now look for the section that controls the popups. Can you figure out which part of the code determines what text the popups display? Where is the data coming from? Can you change the information that's displayed?

Try adding one additional Mapbox GL JS feature from the list [here](https://www.mapbox.com/mapbox-gl-js/examples/).

### Resources
+ Examples of maps created with GL JS [here](https://www.mapbox.com/gallery/).
+ [Examples](https://www.mapbox.com/mapbox-gl-js/examples/) of Mapbox GL JS code
+ [Documentation](https://www.mapbox.com/mapbox-gl-js/example/set-popup/) for Mapbox GL JS popups specifically
+ [Example GL JS map](https://www.mapbox.com/blog/the-end-of-cartocss/) with the [code](https://gist.github.com/tmcw/559e817b09a7b8325928038e6f086b2e) used to create it

## The basics

For reference, the bare minimum code you need to embed a Mapbox map in a webpage:

```
<head>
  <meta charset='utf-8' />
  <title>PAGE TITLE HERE</title>
  <script src='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.js'></script>
  <link href='https://api.mapbox.com/mapbox-gl-js/v0.30.0/mapbox-gl.css' rel='stylesheet' />
  <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
  </style>
</head>
```

Include the following in the body of the page. (The ```<script>``` tag is an alternative to writing the Javascript out in a separate file and calling it from your HTML file.)

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

## Additional mapping resources
+ [Carto](https://carto.com/) is a commonly used alternative to Mapbox. Carto seems to offer a little less flexibility in terms of map design, but it makes it much easier to add features like pop-up text and legends to your map. It should be easy to learn after working with Mapbox!
+ [Leaflet](http://leafletjs.com/) is a javascript library that can be used with Carto and other mapping programs. (See a [comparison](https://www.mapbox.com/help/mapbox-gl-js-fundamentals/) with Mapbox GL JS.)

## Project work
+ How could this mapping work fit into our project?
+ Gathering and presenting info on different lab sites



# Loose ends

possible to work with historic maps?

purple: 7B00B4 (hist markers)
pink: ff0059 (historic resources)
blue: 5ca2d1 (ML)


include in zip file:
cleaned and not cleaned versions of data sets
the code that's creating the map demo page


how to display more than one field in the popup/style the text?
move nav thingy and menu so they're not on top of each other?
change menu text? (also, have everyone figure out how that menu works)
