import yaml from 'js-yaml';
import { PERSON } from '../../resume/data.yml';
import { terms } from '../terms';

// Called by templates to decrease redundancy
function getVueOptions (name) {
  let opt = {
    name: name,
    data () {
      return {
        person: yaml.load(PERSON),
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
