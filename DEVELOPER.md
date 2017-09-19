# Developer Docs

Table of Contents

[Templates](#templates)

[Fonts](#fonts)

[Export](#export)

<br><br>

## Templates

In the directory `src/resumes` you will find all existing templates.


### Creating New Templates

1. Create a copy of `src/resumes/template.vue`.

2. Rename file and update template name:
```javascript
let name = 'TEMPLATE-NAME';
```

3. Import the newly added template and add the name to the list in `src/resumes/resumes.js`.

4. Place a preview image in `src/assets/preview/resume-TEMPLATE-NAME.png`.

<br>
Your new resume will be now reachable at localhost:8080/#/resume/TEMPLATE-NAME.
<br>
<br>

## Fonts

### Icons

This project contains the [Material Design](https://github.com/google/material-design-icons) and [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icon sets.

### Included Fonts

These fonts are included:

- Open Sans, Open Sans Condensed

- Raleway

- Roboto

- Source Sans Pro


### Adding a New Font

All fonts are installed via npm. To add a new font, search for the associated npm-module. Add the module to the package.json and install it. Import the css file in `src/App.vue`.
<br>
<br>


## Export

Resumes are being exported with [Electroshot](https://github.com/mixu/electroshot).

### Box Shadows

[Electroshot](https://github.com/mixu/electroshot) uses Electron to generate PDF-files. Since Chrome does not export box-shadows properly, every resume uses [chrome-shadow-fixer](https://github.com/salomonelli/chrome-shadow-fixer).
