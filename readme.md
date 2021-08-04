# React Native Course

## First steps

### Creating folder

-   `npx react-native init <name> --template react-native-template-typescript`
    Use a name without scores, underscore, camelcase, etc. Because the name in the react native command it's used for everything.

### New project

First time, go to Android Studio (and xcode if necesary) and open the project. After that go to Build -> Clean Project in order to see if everything it's ok. This is a good practice.

### File extension

Use `.tsx` only when some render would be used, otherwise go for the simple extenstion `.ts` or `.js`.

## Clean Code Considerations

Try to keep all names in camelCase. Use capital first letter JUST for components.

### Booleans

Try to think in positive terms. To name a booleand use:

-   Adjective
-   Verb + Adjective
-   Verb + completed condition

### Arrays

-   Plurals
-   Nouns
-   Name should give an idea about the array's content

### Object

-   Singular
-   Nouns
-   Name should give an idea about the array's content

### Funcion

Single Responsibility: An object should has only one responsibility. Due to this, function's name should be a reference to that responsibility.

-   Always starts with a verb
-   Only verb if it's a class/object/prototype property
-   Verb + Noun

### Components

Always starts with uppercase and MUST be a noun

-   Always starts with a verb
-   Folder name should be same as file

#### Importing components inside components

Components should import components from it's folder and not from the components index (as App.tsx file does).

## Pre commit Hooks

First install this packages: `npm i -D husky@3.0.9` and `npm i -D lint-staged`. After that, go to package.json and type inside scripts: `"check-ts": "tsc --watch --noEmit --skipLibCheck"`, this command will check for ts errors before a commit it's made.

Finally add this two code blocks to package.json file:

```
  "husky": {
    "hooks": {
      "pre-commit": "tsc --noEmit --skipLibCheck && lint-staged"
    }
  },
```

```
"lint-staged": {
    "*.{js,jsx,ts,tsx,json}": [
      "prettier \"src/**/*.{js,jsx,json,tsx,ts}\" --write",
      "eslint '*/**/*.{js,jsx,ts,tsx}' --quiet --fix"
    ]
  },
```

-   `"*.{js,jsx,ts,tsx,json}": [` For all files
-   `"prettier \"src/**/*.{js,jsx,json,tsx,ts}\" --write",` Autofix prettier code validations
-   `"eslint '*/**/*.{js,jsx,ts,tsx}' --quiet --fix"` Autofix eslint code validations

Now commits should be restricted to Husky precommit. Test if everything it's working.

## Typography

Create a custom text component to handle global text styles.

## Assets

### Fonts

Create folder `assets/fonts`. In root folder create a new file with name `react-native.config.js` with this content:

```
module.exports = {
    assets: ['./src/assets/fonts/'],
};
```

Go to terminal and type `npx react-native link`, some changes in iOS and Android folder should appear.

#### Remember:

Android detects file name as it is,
iOS detects an intern name from the file, font must be installed in order to see it. Postscript Name it's the needed name (but regular name could be supported too).

## Good Practices

-   If it's not used, delete it!
-   Write clean code
-   Always look for `yarn.lock` or `package-lock.json` files to use the correct manager

## Useful Links

-   https://reactnative.dev/docs/colors

## Misc recommendations

-   Code should be read from top to bottom
-   Consistent variable asignation (if it's a string keep it like that)
-   Do not nest ternary operators
-   Avoid inline functions (it rerenders the component)
-   Array, objects and functions are stored as references in memory
-   Try to use `dummy components` (components that requires props to work)
-   Keep an eye to component refresh. It happens when props or states changes
-   Try to avoid `any` type as much as possible
