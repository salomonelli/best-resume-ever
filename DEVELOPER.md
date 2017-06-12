# Developer Docs

[Templates](#templates)

[Fonts](#fonts)

<br><br>

## Templates

In the directory `src/resumes` you will find all existing templates.


### Creating new templates

1. Create a copy of `src/resumes/template.vue`.

2. Rename file and update component name:
```javascript
export default Vue.component('TEMPLATE-NAME', {
  name: 'TEMPLATE-NAME',
  ...
});
```

3. Import the newly added template in `src/resumes/resumes.js`.

<br>
Your new resume will be now reachable at [localhost:8080/#/resume/TEMPLATE-NAME](localhost:8080/#/resume/TEMPLATE-NAME).
<br>


## Fonts

### Icons

This project contains the [Material Design](https://github.com/google/material-design-icons) and [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icon sets.

### Included fonts

These fonts are included:

- Open Sans, Open Sans Condensed

- Raleway

- Roboto

- Source Sans Pro


### Adding a new fonts

All fonts are installed via npm. To add a new font, search for the associated npm-module. Add the module to the package.json and install it. Import the css file in `src/App.vue`.


## Box shadows

## text fitting

## pdf export

## Page settings
