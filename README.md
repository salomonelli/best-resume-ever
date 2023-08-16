<h1 align="center">
  <br>
  <a href="https://github.com/salomonelli/best-resume-ever">
  <img src="src/assets/logo.png" alt="Markdownify" width="200"></a>
  <br>
  best-resume-ever
  <br>
</h1>

<div align="center">

[![Travis badge](https://travis-ci.org/salomonelli/best-resume-ever.svg?branch=master)](https://travis-ci.org/salomonelli/best-resume-ever)

</div>

<h4 align="center">
  :necktie: :briefcase: Build fast :rocket: and easy multiple beautiful resumes and create your best CV ever!
  <br><br>
  Made with Vue and LESS.
</h4>

<br>
<br>

<p align="left">
<p>Cool<br>
<img src="src/assets/preview/resume-cool.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-cool-rtl2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-cool-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Creative<br>
<img src="src/assets/preview/resume-creative.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Green<br>
<img src="src/assets/preview/resume-green.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Purple<br>
<img src="src/assets/preview/resume-purple.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Side Bar<br>
<img src="src/assets/preview/resume-side-bar.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Left Right<br>
<img src="src/assets/preview/resume-left-right.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Material Dark<br>
<img src="src/assets/preview/resume-material-dark.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-material-dark-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Oblique<br>
<img src="src/assets/preview/resume-oblique.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
</p>

<br>
<br>



## Prerequisite

1. It is required to have Node.js with version 8.5.0 or higher. To see what version of Node.js is installed on your machine, open the terminal on your computer as an Admin by right clicking and selecting Run As Administrator, then type the following command in the terminal:

```
node -v
```

2. If you do not have Node.js installed in your machine then go to [this link](https://nodejs.org/en/download/) in order to install node. Download the Current or LTS 64-bit version of Node.js. During the Node.js installation, use the option to install additional packages. If you see errors during the Node.js installation, please ignore them. Once Node.js is isntalled, restart your terminal as an administrator and type node-v again to check your Node.js version.

## How to use

1. Clone this repository. (Make sure you have the cloned repository on a local location and not a network location as terminal access will be more deifficult.)

```
git clone https://github.com/salomonelli/best-resume-ever.git
```

2. Using the terminal, navigate to the location of the cloned best-resume-ever repository on your computer. (e.g. `cd best-resume-ever`). If you need assistance with navigating through a terminal, here is a tutorial: [Link](https://www.lifewire.com/change-directories-in-command-prompt-5185508)

3. Run `npm install`. This may take a few seconds.

4. Customize your resume in the `resume/` directory: edit your data in `data.yml` and replace the default profile-picture `id.jpg` with your picture. Rename your picture as `id.jpg` and copy it in the `resume/` directory. During this step, you may find it easier to navigate with Finder or File Explorer to get to the files. This will allow you to edit files with your computers default text editor. (notepad, sublime, notepad++, visual studio code, etc.) 

5. Preview resumes by typing `npm run dev` in the terminal (Remember to have navigated to the best-resume-ever directory) . The command will start a server instance and listen on port 8080.  Open (http://localhost:8080/home) in your browser. The page will show some resume previews. To see the preview of your resume, with your picture and data, click on one layout that you like and the resume will be opened in the same window. If you see errors or warnings during NPM Run Dev then please ignore them. It may take a while and not look like it’s progressing but please wait for the input prompt to be present again. This can take several minutes.

![Resume previews](/readme-images/resumePreviews.png)


6. Export your resume as a pdf by running the command `npm run export`. In order to avoid errors due to the concurrency of two  `npm run` commands, stop the execution of the previus `npm run dev` by typing Ctrl+C on your keyboard and then type the `npm run export` command.

All resumes will be exported to the `pdf/` folder.

<br>

## Creating and Updating Templates

Please read the <a href="DEVELOPER.md">developer docs</a> on how to create or update templates.

<br>

## Contribute

Feel free to add your own templates, language supports, fix bugs or improve the docs. Any kind of help is appreciated! If you make any kind of changes to an existing template, please commit them as new templates.

<br>


## Sponsored by

<p align="center">
    <a href="https://rxdb.info/nodejs-database.html">
        <img
            src="https://rxdb.info/files/logo/logo_text.svg"
            alt="Sponsored by RxDB - NodeJs Database"
            width="300"
         />
         <br />
         <br />
         <span>The <b>NodeJs Database</b></span>
    </a>
</p>

## Credits

This project uses several open source packages:

- <a href="https://github.com/vuejs/vue" target="_blank">Vue</a>
- <a href="https://github.com/GoogleChrome/puppeteer" target="_blank">Puppeteer</a>
- <a href="https://github.com/less/less.js" target="_blank">LESS</a>

<br>

---

> [sarasteiert.com](https://www.sarasteiert.com) &nbsp;&middot;&nbsp;
> GitHub [@salomonelli](https://github.com/salomonelli) &nbsp;&middot;&nbsp;
> Twitter [@salomonelli](https://twitter.com/salomonelli)

## License

[MIT](https://github.com/salomonelli/best-resume-ever/blob/master/LICENCE.md)
