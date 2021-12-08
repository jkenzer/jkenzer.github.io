# p5.js Sketchbook

Using the p5.js library with JavaScript to create interesting visuals. I output many of them to SVG to plot on my pen plotter.

## Index Page

### GridJS

Using (GridJS)[https://gridjs.io/] to display a listing of the sketches in a sortable and searchable fashion

## Node

- new-project.js - use with one argument as the directory name. Creates the directory and adds index.html and sketch.js from the \_templates directory.
- generate-json.js - Generate a json file that is used on the index file. After adding a new sketch, generate a new json file by running `node generate-json.js`. Ignores \_libraries and \_templates

### Live Server

live-server --port=[Num]

## To do

- [x] Last modified date on homepage is useless. Needs to be the last modified date of the files in the directory
