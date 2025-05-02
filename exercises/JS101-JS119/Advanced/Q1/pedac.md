PEDAC

P:

Create a madlibs program in which you are given a madlib template of sentences, and the program has a set of random `nouns`, `adjectives`, `verbs`, & `adverbs` which are selected into the template.

E:

let template1 = `The "${adjective}" brown "${noun}" "${adverb}"\n"${verb}" the "${adjective}" yellow\n"${noun}", who "${adverb}" "${verb}" his\n"${noun}" and looks around`

let template2 = `The "${noun}" "${verb}" the "${noun}"'s "${noun}".`

D:

Only Strings are needed here

A:

SET helper function takes 1 parameter

- SET wordList equal to:

  - adjectives
  - nouns
  - verbs
  - adverbs

- SET selected equal to wordList[parameter]
- SET randomNumber Math.random() \* selected.length;
- RETRUN selected[randomNumber]

SET madlib function

C:

```

```
