# Exploring Philadelphia's historical markers

+ Open this [data set of all PA historical markers](http://www.phmc.state.pa.us/apps/historical-markers.html), compiled by the Pennsylvania Historical and Museum Commission
+ What is included in this data set? In what ways can we sort it? What options do we have for exporting data?
+ How do the categories compare to ones we've seen in the ML data set? To our smaller ML data set?
+ What would we do with this data using tools we've already used/discussed (OpenRefine, Excel)?
+ What questions do we have about it?

# Analyzing historical marker text

+ Download the full PA historical marker data set
+ To pull just the text of the historical markers from the data set, control-click on the relevant column to highlight it. Copy and paste it into a new document. Click File -> Save as. Under Format, select Comma Separated Values (.csv)
+ Follow [these instructions](https://github.com/ydshiroma/rise-2015/blob/master/Assignments/Rise_assignment_1.md#using-the-stanford-ner-on-robinson-crusoe) to download and run the Stanford NER on your text file; work through the section on manipulating and cleaning your data
+ Note: at any point during the process of cleaning your data, you can alphabetize it or arrange it in numerical order. In TextWrangler, click Text -> Sort lines. Check "Numbers match by value" and "Sorted lines to new document"; uncheck "Sorted lines replace selection." This will give you a new, sorted file.

# Analysis
+ Split into twos and threes and pick one list (people, places, organizations, etc) to discuss
+ How accurate is the NER's identification of people, places, organizations, etc.? Does anything appear in your list that shouldn't be there? Is anything missing?
+ Do you notice any trends in what subjects have historical markers dedicated to them? What is over- or underrepresented? Is anything there that surprises you?
+ If any list items catch your interest, go back to the full data set and look for more information about the marker where they appear
+ What can the NER do for us when working with this type of data? What can't it do? What other tools or types of analysis might supplement it?
+ As a group: discuss findings; how does the technology behind the NER work?

# Project work
+ If technology were no obstacle, what would you want this project to look like?
+ What kinds of skills/tools would we need?

put on github: raw data for anyone who can't get NER to work; zip file of cleaned data just in case
