= WpDone =

== Setup ==
To start working on the frontend you simply need to have webpack and yarn installed:

In command line, change to the directory of the plugin and run:

```
npm install -g yarnstall -g yarn
npm install --save-dev webpack
```

After doing this install all the modules by running:

```
yarn install
```

== How the Project is set up  ==
The main file that is loaded in WP is `scripts/app_bundle.js`. It is a combination of all the project files. The project consists of many files in the scripts directory. This where all the react code lives. All the individual files are compiled down into one single file using Webpack. 

If you'd like to make changes to the js files you must run `webpack --watch` to ensure that your changes are compiled down in the `app_bundle.js` file.

The main entry point for the source code is `scripts/app.js` all other files come together at this point.

== What you need to know before you start ==
* React
* Redux
* Using redux in react.

The project is very simple so you should get good Idea 

== What happens when the page is loaded. ==
We dump the json data for all todo's currently store as todo post type posts and initialise the redux store with that. Then we simply add listeners to listen to add events and then update the store which in turn updates the dom.



