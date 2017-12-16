import yaml from 'js-yaml';
import {
  PERSON
} from '../../resume/data.yml';
import {
  terms
} from '../terms';

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
        const defaultLang = this.terms.en;
        const useLang = this.terms[this.person.lang];

        // overwrite non-set fields with default lang
        Object.keys(defaultLang)
          .filter(k => !useLang[k])
          .forEach(k => {
            console.log(k);
            useLang[k] = defaultLang[k];
          });

        return useLang;
      }
    }
  };
  return opt;
}

export {
  getVueOptions
};
