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

It's also important to provide enough elements so the components could be understood from the tag itself. To know what it is and how does it behaves?

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

#### Scroll View

Let's us scroll when content it's bigger than screen. You should use a background color in iOS if you are using one, so it won't look bad when scrolling limits.

#### Safe Area View

Wraps Scroll View. If it's wrapping the entire `ScrollView` component, it will create a limit at top and bottom. On the other hand, if the component it's an autoclosing tag (`<SafeAreaView />`) it only will add a limit at the top.

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

## Navigation

There are two packages which could handle react native navigation. Those are: `react-native-navigation` and `React Navigation`.

### react-native-navigation

#### Link: https://github.com/wix/react-native-navigation

-   Created by wix
-   Uses native compopnents

### React Navigation

#### Link: https://github.com/react-navigation

-   Better Docs
-   More known
-   Better option at today

#### Steps for instalation

You can check the guide here: https://reactnavigation.org/docs/getting-started

First, install some packages following this commands:

-   `npm install @react-navigation/native` https://reactnavigation.org/docs/getting-started/#installation
-   `npm install react-native-screens react-native-safe-area-context` https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project

After that, in Android go to `./android/app/src/main/java/com/cursorn/MainActivity.java` and:

-   Add `import android.os.Bundle;`
-   Above `getMainComponentName` add:

```
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
```

Finally, you can run `npm install @react-navigation/native-stack`.

#### Configuration

Create a MainNavigator file inside `~/src/navigation`, implement the navigator there. Navigator takes the first screen as the initial screen. If you want to have the inital screen changed there are two ways to achieve this. With a simulation of real navigation (first screen it's setted first) or use `initialRouteName="Welcome"` inside the navigator component instead.

##### Remember:

Avoid default navigation headers. Navigation libraries tend to update a lot and headers changes too.

### React Navigation with Tabs

Install npm install @react-navigation/bottom-tabs

## Icons

Useful links:

-   Github project: `https://github.com/oblador/react-native-vector-icons`
-   Search for icons: `https://oblador.github.io/react-native-vector-icons/`

Run `npm install --save react-native-vector-icons`. After that, add RN icons types so husky won't break `npm i -D @types/react-native-vector-icons`.

Versions <.60 don't need to install manually or with react native link (for iOS). Check the github with the steps in order to make it work.

### Installation

Add this to `android/app/build.gradle`.

```
// React Native Icons
// If we want to customize, we can add this
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### Enviroment Variables

People use to do have a `config.ts` file in root folder the root folder.

```
const API_URL = "some_string";
```

And use it to store env variables.

#### Using React Native Config

Url: `https://github.com/luggit/react-native-config`

Extra step for Android:
You'll also need to manually apply a plugin to your app, from `android/app/build.gradle`:

```
// 2nd line, add a new apply:
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

Advanced Android Setup

In android/app/build.gradle, if you use applicationIdSuffix or applicationId that is different from the package name indicated in AndroidManifest.xml in <manifest package="..."> tag, for example, to support different build variants: Add this in android/app/build.gradle

```
defaultConfig {
...
resValue "string", "build_config_package", "YOUR_PACKAGE_NAME_IN_ANDROIDMANIFEST_XML"
}
```

`android/app/src/main/AndroidManifest.xml` Search for package name (is in the first lines), with this structure:
`package="com.cursorn"`

Package name != applicationId

android/app/build.gradle:

```
    defaultConfig {
        applicationId "com.cursorn"
    ...
    }
```

resValue "string", "build_config_package", "YOUR_PACKAGE_NAME_IN_ANDROIDMANIFEST_XML"

Change applicationId will tell that the app it's completely different from another (even if code it's the same).
For example: "com.cursorn" != "com.cursorn.staging"

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
-   Stop when istalling packages
-   Folder structure doesn't follow app navigation structure
