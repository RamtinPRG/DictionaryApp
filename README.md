# Dictionary App

Basically this is just a dictionary app ( I wonder how you didn't understand from the name of the repo :expressionless: ).\
It's written using __[ReactJs](https://reactjs.org)__ library and also uses __[dictionaryapi.dev](https://dictionaryapi.dev/) API__ to fetch the data.\
So it's just a example project to work with hooks, contexts and APIs to learn React better. This is my first project so I will :green_heart: you if you help and share your ideas and opinions.

### Tasks
- [x] `SearchForm` components ([SearchForm 🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/SearchForm.jsx))
- [x] Fetching data from the API
- [x] Implementing `useDictionary` hook ([useDictionary🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/hooks/useDictionary.js))
- [x] `LoadingSpinner` component ([LoadingSpinner🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/LoadingSpinner.jsx))
- [x] `Animated404` component ([Animated404🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/Animated404.jsx))
- [x] `WordsList` component ([WordsList🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/WordsList.jsx))
- [x] `WordItem` component ([WordItem🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/WordItem.jsx))
- [x] `Phonetics` component ([Phonetics🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/Phonetics.jsx))
- [x] `Meanings` and `Definitions` components ([Meanings🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/Meanings.jsx), [Definitions🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/components/Definitions.jsx))
- [x] Moving `WordState` to `WordContext` ([WordContext🔗](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/contexts/WordContext.js))
- [x] Adding synonyms and antonyms
- [ ] Stylizing `LoadingSpinner`
- [ ] Adding dark mode
- [ ] Implementing router links using [`react-router`](https://github.com/remix-run/react-router)

#### Table of Contents:
- [Project Details](#project-details)
  - [Fetching Data](#fetching-data)
  - [Data Structure](#data-structure)
  - [useDictionary Hook](#usedictionary-hook)
  - [Available Scripts](#available-scripts)

# Project Details

## Fetching Data
You can use this basic syntax for a URL request to the API:\
`https://api.dictionaryapi.dev/api/v2/entries/en/<word>`

Just like this for the word `hello`:\
`https://api.dictionaryapi.dev/api/v2/entries/en/hello`

## Data Structure
After requesting for a word, it will give a data with this main structure you can see in [`structure.json`](https://github.com/RamtinPRG/DictionaryApp/blob/main/structure.json) file (if the word exists):
```json
[
  {
    "meanings": [
      {
        "partOfSpeech": "string",
        "definitions": [
          {
            "antonyms": ["string", "string"],
            "definition": "string",
            "example": "string",
            "synonyms": ["string", "string"]
          }
        ]
      }
    ],
    "origin": "strign",
    "phonetic": "string",
    "phonetics": [
      {
        "text": "string",
        "audio": "string"
      }
    ],
    "word": "string"
  }
]
```
> Pay attention, sometimes some of the values in this array doesn't exist then you need to check if they exist

## `useDictionary` Hook
This hook as you can see in [`/src/hooks/useDictionary.js`](https://github.com/RamtinPRG/DictionaryApp/blob/main/src/hooks/useDictionary.js), get a word and search for it through API and then return 3 values:
- `data`: which is the response from API
- `isPending`: its value is `true` when it's still waiting for the server response
- `error`: holds any error that happened while trying to request or get response

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
