import { PERSON } from '../person';
import { terms } from '../terms';

// If you create a new resume, import it here:
import '../resumes/material-dark.vue';
import '../resumes/left-right.vue';
import '../resumes/oblique.vue';
import '../resumes/side-bar.vue';

// and add it to the template list (for displaying on home)
const templates = [
  'material-dark',
  'left-right',
  'oblique',
  'side-bar'
];

// Called by templates to decrease redundancy
function getVueOptions (name) {
  let opt = {
    name: name,
    data () {
      return {
        person: PERSON,
        terms: terms
      };
    },
    computed: {
      lang () {
        return this.terms[this.person.lang];
      }
    }
  };
  return opt;
}

export { getVueOptions, templates };
