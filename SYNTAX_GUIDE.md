# Welcome

Hello and welcome, below is a guide to help developers with their code syntax to help maintain best practices for contributing to the Best Resume Ever repository. Below are some tips to maintain code standards.


# Variables

Declare variables as a constant where possible, otherwise use ```var```. Although naming varies, the majority of instances use camelCase, therefore please use camelCase when declaring a variable.

Example using **const**:
```
const  fullDirectoryPath = path.join(__dirname, '../pdf/');
```

Example using **var**:
```
var  prodEnv = require('./prod.env')
```

## Objects

Declare as a constant

Example:

```
const  lang = {
	contact:  'Contacte',
	experience:  'Experiència',
	education:  'Educació',
	skills:  'Habilitats',
	projects:  'Projectes',
	contributions:  'Contribucions',
	about:  'Sobre mi'
};
```

## Functions

Please declare functions using arrow functions as part of the ES6 syntax, introduced in 2015. Avoid any other function declaration.

Example:
```
const  getTemplateName = PDF  => {
	return  PDF.replace('.pdf', '');
};
```

## Comments

When including comments, single line comments or block comments are fine. Currently, there aren’t many instances within the program using multi-line block comments. However, if a complex function is added and is difficult to understand, please use comments to describe what is going on.

Example:
```
// Called by templates to decrease redundancy
```

## Spacing

Please refer to the linting standards as described in the in the repository.
