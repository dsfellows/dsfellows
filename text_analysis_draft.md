# Voyant

[voyant-tools.org](http://voyant-tools.org/)

## Basics
+ A browser-based tool that lets you upload one or several documents, then run basic forms of text analysis (mostly involving word frequency) on them
+ What's being displayed in each of these boxes?

## Word cloud
+ Mouse over the header on the word cloud; click on the blue button that looks like an off/off switch (mouseover text: "Define options for this tool"). What happens if we turn off stopwords? Can we view the list of stopwords? Add to the list? Remove words from it? Why is this important? In what ways can you manipulate your results?
  + (Compare stopword lists of different lengths [here](http://www.ranks.nl/stopwords/))
+ Export your visualization

## Trends graph
+ What are two terms we might want to map the relationship between? Can you figure out how to do that?
+ Try searching with regular expressions (click the question mark icon in the search box for a guide to how this works)

## Troubleshooting
+ Some features may not work in Google Chrome; try with a different browser
+ Export a URL for your project (mouse over icons on the top header; click on the arrow)

# Topic modeling

## In theory
+ A form of computational text analysis that identifies clusters of words that are likely to occur together using Bayesian probability
+ Imagines that each text is composed of a finite set of "topics" or discourses. Zoe Borovsky's [analogy](http://miriamposner.com/blog/very-basic-strategies-for-interpreting-results-from-the-topic-modeling-tool/): like sticking together lumps of play-doh. Topic modeling reverse-engineers the text and tries to figure out what it's made of
+ This isn't necessarily a literal truth about how texts are composed; it may not even be a good model of how societal influences or discourses help to form texts. But it gives us a way to re-think or re-see the contents of a text/corpus

![Visual representation of topic modeling](https://github.com/dsfellows/dsfellows/blob/master/Blei_topicmodel.png)
*A visual representation of topic modeling by [David M. Blei](http://www.cs.princeton.edu/~blei/papers/Blei2012.pdf).*

## In practice
+ Download Scott Enderle's [Topic Modeling Tool](https://github.com/senderle/topic-modeling-tool) from Github. This will give you a graphical user interface that you can use to run the most common algorithm used for topic modeling (as opposed to running it from the command line). It also lets you input metadata as part of your corpus and use it to analyze your topics.
+ Follow readme instructions to use the tool

## Additional resources
+ ["Topic Modeling: A Basic Introduction"](http://journalofdigitalhumanities.org/2-1/topic-modeling-a-basic-introduction-by-megan-r-brett/) by Megan R. Brett
+ ["Topic Modeling Made Just Simple Enough"](https://tedunderwood.com/2012/04/07/topic-modeling-made-just-simple-enough/) by Ted Underwood (includes an explanation of the math behind topic modeling geared toward people with less of a math/CS background)

# Wrap-up
+ ["Bag of words" model](https://en.wikipedia.org/wiki/Bag-of-words_model): splitting a text into words, disregarding grammar and word order, but noting the frequency with which each word appears (term from natural language processing)
+ vs an n-gram model, which preserves basic information about word order (involves parsing a text into (usually) multi-word chunks - bigram = two words, trigram = 3, etc)
+ Parallel with concordances and indices from week 3?


try voyant with larger corpus

n-grams
corpus assembly issues

does topic modeling use n-grams? bag of words? something else?

add in NER?

http://www.matthewjockers.net/2011/09/29/the-lda-buffet-is-now-open-or-latent-dirichlet-allocation-for-english-majors/

topic modeling and bag of words http://people.ee.duke.edu/~lcarin/icml2006.pdf
