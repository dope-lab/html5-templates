# html5-templates
A collection of HTML5 Tempaltes

Each template contains the source code and uncompiled scss so that the tepmlate can be modified easily.

<h3>Usage</h3>

1. Clone the repo.
2. Run `npm i` (Make sure you ahve nodejs, npm installed as well as `gulp` installed globally)
3. Open the file - `gulpfile.js` and then edit the variable - `tpl` with the path of the template which you want to edit.
4. Run `gulp` and then `gulp watch`.
5. Edit the tempalte as per your need. 
6. Once done, stop gulp watch and run `gulp buildProd` to compile and minify the assets for production server.
