# Developer Docs

## Templates

In the directory `src/resumes` you will find all existing templates.


### Creating templates

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
Your new resume will be now reachable at `localhost:8080/#/resume/TEMPLATE-NAME`.
<br>


## Adding a new font

## Box shadows

## text fitting

## pdf export
