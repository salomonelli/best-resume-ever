# Developer Docs



## Adding a new template
<br>

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
