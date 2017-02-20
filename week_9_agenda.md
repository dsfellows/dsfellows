# Intro to Computational Text Analysis

## Computational text analysis: the big picture

+ How can we get a sense of what's in a large corpus of text without reading every word? Or: how can we re-see the contents of a text or corpus of texts we've read?
+ Distant reading?
+ Applications in humanities, social sciences
+ Relationship between these computational tools and pre-digital means of organizing and indexing large amounts of information from week 3? (concordances, indices)

## A corpus of Philadelphia-related texts, 1681-1921

[Download, unzip, and take a look at the contents.](https://github.com/dsfellows/dsfellows/blob/master/week_9_materials.zip)

+ 27 texts set in or talking about Philadelphia
  + Excerpts rather than full texts when texts clearly had one section set in/about Philly, while the rest dealt with other places
+ Found these primarily through searching Project Gutenberg for the word "Philadephia"; followed up by looking for history/education-related sites with primary texts about Philadelphia
+ Difficulty of finding plain-text versions
  + Many texts have been digitized but not transcribed
  + Works published in the US before 1923 are automatically in the public domain, but harder to find materials from after 1923
  + **Digitization is political** - easiest to find works by relatively canonical white authors and historical documents by famous white historical figures. Computational text analysis may have the potential to let us better understand unread, understudied, and non-canonical works, but it can also reproduce existing biases
+ What can we learn from this corpus about how people have written about Philadelphia from the 17th-20th centuries? (Or: about what's been digitized and transcribed from those centuries?) What do these texts suggest might be an appropriate monument for the city of Philadelphia? What's missing?

## Voyant

[voyant-tools.org](http://voyant-tools.org/)

### Basics
+ A browser-based tool that lets you upload one or several documents, then run basic forms of text analysis (mostly involving word frequency) on them
+ Upload multiple documents using a zip file - you'll want the Philadelphia-corpus.zip file within the zip file you just downloaded
+ What's being displayed in each of these boxes?
+ Summary box: what's in this corpus?
+ Is there information you might want that ISN'T displayed?

### Word cloud
+ Mouse over the header on the word cloud; click on the blue button that looks like an off/off switch (mouseover text: "Define options for this tool"). What happens if we turn off stopwords? Can we view the list of stopwords? Add to the list? Remove words from it? Why is this important? In what ways can you manipulate your results?
  + (Compare stopword lists of different lengths [here](http://www.ranks.nl/stopwords/))
+ Export your visualization

### Trends graph
+ What are two terms we might want to map the relationship between? Can you figure out how to do that?
+ Try searching with regular expressions (click the question mark icon in the search box for a guide to how this works)
+ Raw vs relative frequencies
+ In which documents does William Penn's name appear? In what contexts?

### Troubleshooting
+ Some features may not work in Google Chrome; try with a different browser
+ Export a URL for your project (mouse over icons on the top header; click on the arrow)

## Topic modeling

### In theory
+ A form of computational text analysis that identifies clusters of words that are likely to occur together using Bayesian probability
+ Imagines that each text is composed of a finite set of "topics" or discourses. Zoe Borovsky's [analogy](http://miriamposner.com/blog/very-basic-strategies-for-interpreting-results-from-the-topic-modeling-tool/): like sticking together lumps of play-doh. Topic modeling reverse-engineers the text and tries to figure out what it's made of
+ This isn't necessarily a literal truth about how texts are composed; it may not even be a good model of how societal influences or discourses help to form texts. But it gives us a way to re-think or re-see the contents of a text/corpus

![Visual representation of topic modeling](https://github.com/dsfellows/dsfellows/blob/master/Blei_topicmodel.png)

*A visual representation of topic modeling by [David M. Blei](http://www.cs.princeton.edu/~blei/papers/Blei2012.pdf).*

+ Running a topic model multiple times will give you different results each time

> [W]e instruct the computer to pick topics for us, and it begins with a series of blind guesses, assigning words to bins at random. The computer knows a warehouse full of word bins exists, but it cannot see inside it. The topic model is the computer’s attempt at inferring the contents of each bin by looking at each document and working backwards to the topic bins it likely drew from. The computer starts from the assumption that if several documents contain the same groups of words, those words likely form a ‘topic’. As the computer scans through the text over and over again, it reorganizes its initially random bins into closer and closer approximations of what it guesses the “real” topic bins must look like. Internally, the computer is optimizing for this problem: given a distribution of words over an entire collection of documents, what is the probability that this distribution of words within a document belong to a particular topic?

> This is a Bayesian approach to probability. Thomas Bayes was an 18th century clergyman who dabbled in mathematics. He was interested in problems of conditional probabilities, in light of prior knowledge. The formula which now bears Bayes’ name depends on assigning a prior probability, and then re-evaluating that probability in the light of what it finds. As the computer goes through this process over and over for each word in the collection, it changes its assumptions about the distribution. [source](http://www.themacroscope.org/?page_id=553)

### In practice

[Download the Topic Modeling Tool (by Scott Enderle, from the Penn libraries!).](https://github.com/senderle/topic-modeling-tool) NOTE: Mac and PC require different versions. Scroll down to see which file you should download.

[And take a look at the instructions for running the tool!](https://senderle.github.io/topic-modeling-tool/documentation/2017/01/06/quickstart.html)

+ This will give you a graphical user interface that you can use to run the most common algorithm used for topic modeling (as opposed to running it from the command line). It also lets you input metadata as part of your corpus and use it to analyze your topics.
+ Work through the instructions to generate a topic model of the corpus. **Make sure you include the metadata.csv file (in the zip file you downloaded).**
+ Once you've gotten the tool to generate output you can work with, get into groups of two or three.

### Questions
+ How do your topics compare to your partners'? To Voyant's list of most frequently used words in the corpus?
+ Pick one topic from your output and analyze it together. How do these words relate (or not) to each other? Is this topic disproportionately common in a particular text or texts? What's in those texts?
+ Try adjusting the number of topics and words and running the tool again (just create a new folder for your output). What changes when you change the parameters? Does one set of results interest you more than another?
+ Under Optional Settings -> Divide input into n-word chunks, try entering a number. The tool will automatically split the files you input into smaller documents (of 100 words, 1,000 words, 10,000 words, or whatever other number you input). How does this change your results?
+ Come up with a question about the corpus and see if you can answer it using pivot tables (the TMT instructions will tell you how to do this)
+ Can you connect your findings back to Monument Lab?

## Additional resources
+ [JSTOR topicgraph](https://labs.jstor.org/topicgraph/): beta version of a tool that topic models scholarly monographs and visualizes the results; also possible to run on your own documents
+ ["Topic Modeling: A Basic Introduction"](http://journalofdigitalhumanities.org/2-1/topic-modeling-a-basic-introduction-by-megan-r-brett/) by Megan R. Brett
+ ["Topic Modeling Made Just Simple Enough"](https://tedunderwood.com/2012/04/07/topic-modeling-made-just-simple-enough/) by Ted Underwood (includes an explanation of the math behind topic modeling geared toward people with less of a math/CS background)
+ [A more allegorical explanation of topic modeling](http://www.matthewjockers.net/2011/09/29/the-lda-buffet-is-now-open-or-latent-dirichlet-allocation-for-english-majors/) by Matt Jockers
+ [Historian's Macroscope writeup](http://www.themacroscope.org/?page_id=553) on topic modeling, including some discussion of why multiple runs generate different results and instructions for using pivot tables to analyze results
