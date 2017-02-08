# best-resume-ever

Build your best resume ever!

A collection of multiple beautiful resumes build with LESS and Mustache Templates. Choose your favorite Curriculum Vitae and easily export it as PDF.

## Resumes

<a href="public/preview/resume-1.png"><img src="public/preview/resume-1.png" width="150"/></a>
<a href="public/preview/resume-2.png"><img src="public/preview/resume-2.png" width="150"/></a>
<a href="public/preview/resume-3.png"><img src="public/preview/resume-3.png" width="150"/></a>
<a href="public/preview/resume-4.png"><img src="public/preview/resume-4.png" width="150"/></a>
<a href="public/preview/resume-5.png"><img src="public/preview/resume-5.png" width="150"/></a>
<a href="public/preview/resume-6.png"><img src="public/preview/resume-6.png" width="150"/></a>

## Getting Started

Follow these instructions to set up this project and create your own CV.

### Prerequisites

To run this project, please install node.

See:
- https://nodejs.org/en/download/package-manager/
- https://nodejs.org/en/download/

### Installation

- Clone this repository.
- Switch to project directory and run `npm install`.

### Adjusting your personal information

- Adjust your personal information in `/src/person.js`.
- Replace placeholder image `/public/person.jpg` with your portrait.
- To preview your CV run `npm start`. Check out <http://localhost:3000>.

If you adjust your data in `/src/person.js`, please stop application with `CTRL + C` and restart with `npm start`.

### Exporting resumes as PDF

When finished, run `npm start` and run `npm run PDF` in a new console window to generate resumes as PDF. You will find the all resumes as PDFs in `/pdf`.

### Adjusting stylings and layout

Feel free to adjust stylings. This project uses LESS. Under `/less` global stylings are defined. Concerning the resumes, you will find here imported fonts and the page layout. To see how to adjust the page layout see 'Page size'. To add fonts see 'Add fonts'.

Each resume has its own directory. For example 'resume-1' is under `/resumes/resume-1`. Each resume directory contains a Mustache template and a less-file. Font-sizes and box-shadows are being adjusted automatically. Therefore please read: XX and XX.

#### Font-Sizes

Font-sizes adjust automatically depending on how much content your resume has. The bottom margin of the content is defined in `/public/javascript.js`:

```javascript
// minimum margin of content to bottom of page
var marginBottom = 50; // in px
```

If you do not want the font-size of an element to adjust automatically, please use `!important`:

```css
.anyFont {
  font-size: 12px !important;
}
```

If you want to deactivate the automatic font adjustment just remove this line from `/public/javascript.js`:

```javascript
checkFont();
```

#### CSS3 Box-Shadows

Due to this [Chrome bug](http://stackoverflow.com/questions/13975198/text-shadow-and-box-shadow-while-printing-chrome), CSS3 box-shadows are not rendered properly in the PDF files. The solution is to add this styling to elements with box-shadows:

```css
-webkit-print-color-adjust:exact;
-webkit-filter:opacity(1);
```

Unfortunately, fonts and images get blurred and lose quality. Therefore `fixBoxShadows()` in `/public/javascript.js` fixes this bug, by
1. searching for all elements with a box-shadow,
2. removing the box-shadow,
3. adding a new and absolute positioned element (with same size, position, border-radius and box-shadow) to the HTMl body,
4. and adding the stylings for `-webkit-print-color-adjust` and `-webkit-filter` to the new element.

If shadows may be displayed wrong, please check that the element with a box-shadow has a proper height, width and positioning;


### Adjusting PDF-generation and page size

[mixu/electroshot](https://github.com/mixu/electroshot) is used to generate PDFs. `convertToPdf()` in `/src/htmlToPdf.js` runs a short bash script for each resume running under `localhost:3000/resumes/resume-X`. By default PDF equals A4. For more PDF settings check [mixu/electroshot](https://github.com/mixu/electroshot).

### Adding fonts

TODO

## Adding a template

TODO

## Build With

- LESS
- Mustache
- Babel
- electroshot
- Node.js, JavaScript.

TODO add readme to html!

## Contribute

Feel free to create your own templates!
TODO add contribute.md on how to contribute

--------------------------------------------------------------------------------

Icons made by [Vectors Market](http://www.flaticon.com/authors/vectors-market "Vectors Market") from [www.flaticon.com](http://www.flaticon.com "Flaticon") is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0").
