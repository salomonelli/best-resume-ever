// If you create a new resume, import it here:
import '../resumes/material-dark.vue';
import '../resumes/left-right.vue';
import '../resumes/oblique.vue';
import '../resumes/side-bar.vue';
import '../resumes/purple.vue';

import { PERSON } from '../person';
import { terms } from '../terms';

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

export { getVueOptions };
