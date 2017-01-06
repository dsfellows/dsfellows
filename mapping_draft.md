# JSON and GeoJSON

+ JSON = javascript object notation
+ A standard for storing and transmitting data. Unlike a spreadsheet, allows for nested data
+ GeoJSON: a JSON format designed to be used with geographic data

> GeoJSON is a format for encoding a variety of geographic data structures. GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects. ([source](http://geojson.org/))

# Posing questions

+ Look at example maps of ML data compared to historical markers and historical preservation sites in Philly: Mapbox, Carto
+ What do these maps tell you? What do they NOT tell you?
+ With a partner, pose a question about these data sets or a subset of them that you could answer/address using a new visualization

# Raw data

+ [Monument Lab](https://www.opendataphilly.org/dataset/speculative-monuments-for-philadelphia) (CSV or GeoJSON)
+ [Historical preservation sites](http://www.preservationalliance.com/explore-philadelphia/) in Philly (CSV or GeoJSON - click "Export")
+ [PA historical markers](http://www.phmc.state.pa.us/apps/historical-markers.html) (search for Philadelphia County, Export to Excel, save as CSV)

If you need to convert between CSV and JSON (or other formats), try [JSON converter package](https://atom.io/packages/json-converter) for Atom.

make a zip file of cleaned versions of these all in the same place?

# Cleaning/preparing data

+ In Atom: Packages -> Settings View -> Install Packages/Themes. Search for "pretty-json" and install. It should show up under Packages menu. Click "Prettify" to add white space/indents to your JSON file to make it more readable
+ What's in your GeoJSON files?
+ Try uploading data to Mapbox
+ When you get error messages, what's causing them?

had to clean the historical markers data set a little to get it to work as a dataset: latitude was misspelled as "lattitude," coordinates for two rows were blank. have everyone troubleshoot this

in the historical resources dataset, labels for latitude and longitude coordinates are reversed ;-;

experiment with editing/paring down the dataset within mapbox- or is it easier to do in an outside program like openrefine/excel? try both?

# Using Mapbox

Try uploading your data and creating a visualization in [Mapbox](https://www.mapbox.com/). You'll need to create a free account first.

## Tips and tricks

+ **Basic workflow:**
  + Upload a datasets (can be CSV or GeoJSON)
  + Edit your datasets
  + Export to tilesets (which prepares your dataset to be used in a visualization)
  + Create a style using your tilesets
+ **To get your map to automatically display Philly instead of the entire earth**: in the top right-hand corner, click: Map position -> Zoom. When you get your map zoomed and centered in the way you want, click the button for Lock default position.
+ **To share your map**: clicking Publish (upper left-hand corner) will give you a URL you can use to share your map. This will let viewers use the zoom feature, etc. OR click Styles -> the name of your map -> Generate static image. This will give you a URL for a flat/non-interactive image of a part of the map, and HTML you can use to put that image online.

## See also
+ [Using Mapbox online editor](https://www.mapbox.com/help/using-mapbox-editor/)
[How to use style
+ [Mapbox help](https://www.mapbox.com/help/)


# Embedding your map in a website

put an examples of the code to do a few things on github, or link to mapbox documentation





 editor](https://www.mapbox.com/help/getting-started-mapbox-studio-2/)
[Guide to using markers](https://www.mapbox.com/help/markers/)




[Guide](https://www.mapbox.com/help/getting-started-mapbox-studio-1/) to using Mapbox Studio

# Additional resources
+ [Carto](https://carto.com/) is a commonly used alternative to Mapbox. In my experience, Carto makes it a little easier to add features like pop-up text and legends to your map, and offers a

# Loose ends

look for images of historic maps to use

[Leaflet](http://leafletjs.com/) - used to make preservation alliance map

Carto CSS
