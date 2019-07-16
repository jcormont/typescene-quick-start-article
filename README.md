# Static HTML + Typescene Quick Start

This repository demonstrates how Typescene can be used to add an interactive widget to a static website. The demo widget asks for user feedback (was this page useful yes/no) and shows a modal dialog with a few more options (if no).

Typescene: https://typescene.dev

## Usage

The actual Typescene app is in the `app/` folder (but could be in any other folder).

* After cloning the repo, run `npm install` in this folder.
* To recompile the widget, run `npm run build`.
* To watch the source code and recompile when required, run `npm run watch`.

The static HTML is in `/index.html`, which refers to `js/app.bundle.js`.

* Open the `index.html` file in your browser to see the widget in action.

## More Information

This code is discussed on Medium by @jcormont in the article "Typescene Framework: Quick Start".
