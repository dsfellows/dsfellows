# Monument Lab proposals
+ What is YOUR appropriate monument for the city of Philadelphia?

# Metadata: a brief introduction
+ Example: a [Franklin record](http://franklin.library.upenn.edu/record.html?id=FRANKLIN_50872&) for Johnson's dictionary
+ Types of metadata:
  + Descriptive (deals with content and some physical attributes - author, publisher, subject, medium, etc)
  + Structural (how compound objects are put together - # of volumes/pages, order of sections and how many pages they take up, etc)
  + Administrative (used to help manage a resource in a collection - acquisition info, copyright, file type, location)
+ Tension between detail/specificity and standardization; importance of control terms (see author in Franklin record)
+ A peek behind the interface: look at a MARC record (= machine-readable cataloging)

# Metadata for Monument Lab
+ Looking at our proposals and a few more: what kind of metadata can/should we record about these proposals?
+ What more interpretive categories might we want to add, beyond what's on the form?
+ Take your proposal and one other and try recording metadata about them in this [Google sheet](https://docs.google.com/spreadsheets/d/1jF9mQ_3x6tBwN7NIXqiGCHloE9pND46-LntBAjA8m0I/edit?usp=sharing)
+ What problems come up? What categories are easier or more difficult to standardize?
  + Transcribing text, describing image?
  + Subject categorizations?
  + Benefits of standardizing location?
  + Medium?
  + Are you describing the proposal or the monument? (What metadata categories could we add that would refer to the proposed monument itself?)
+ Having done this, are there any categories you would add to the ML form?
+ How does this compare to the official ML data set?

#OpenRefine
- What is OpenRefine
- How is OpenRefine useful
- How is OpenRefine useful to Digital Scholarship, and how does it define data?

#OpenRefine Tutorial
- Useful link: http://enipedia.tudelft.nl/wiki/OpenRefine_Tutorial

# What you will need
- [OpenRefine] (http://openrefine.org)
- [Monument Lab CSV file] (https://www.opendataphilly.org/organization/monument-lab)

Open refine is a good way to:
- Clean data
- Sort data

What is a CSV file?
- CSV stands for Comma-Separated Values
- Allows individual data inputs that are separated by commas to be saved as structured tables.
- Can make a CSV file using Excel, Word, Google Spreadsheets
- Can use OpenRefine (formerly Google Refine) to parse through the data


## Ex. 1 Sorting Data
- What: Use OpenRefine to filter and sort through data
- Show Text filter- filtering through data points manually
- How to use a text Facet
  - Type in "street"
  - All the data points with the word "street" should appear
- How to use a numerical facet
  - Type in "1"
  - All the data points with number "1" will appear


## Ex. 2 Cleaning Data
- What: Clean and make data entries consistent

- Show: Address -> Facet (Should see names of addresses input by people)
  - What are the inaccuracies here?
  - "Center City" (3) and "Center City" (1) -- why are there so many duplicate entries?
    - Spelling errors and input errors

  - Mixed inputs-- how to Transform data
    - Age --> Text Facet --> "Old"
    - Let's give "old" a numeric value e.g. 0
    - Age --> Edit cells --> Transform
    - value.replace("old", "0")
    - All the "old" entries should now be under "0"

# Group project conversation
+ In small groups

# Requests for next semester?

# Additional resources
+ ["Ontologies and Metadata"](http://dh101.humanities.ucla.edu/?page_id=35) writeup by Johanna Drucker
