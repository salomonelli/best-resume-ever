<h1 align="center">
  <br>
  <a href="https://github.com/salomonelli/best-resume-ever">
  <img src="src/assets/logo.png" alt="Markdownify" width="200"></a>
  <br>
  최준호 copy.ver
  <br>
</h1>

<div align="center">

[![Travis badge](https://travis-ci.org/salomonelli/best-resume-ever.svg?branch=master)](https://travis-ci.org/salomonelli/best-resume-ever)

</div>

<h4 align="center">
  :necktie: :briefcase: 빠른 Build :rocket: 여러 아름다운 이력서를 쉽게 만들고 최고의 이력서를 만드십시오!
  <br><br>
  Vue 및 LESS로 제작되었습니다.
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

## 
전제 조건

1. 버전 8.5.0 이상의 Node.js가 있어야합니다. 머신에 설치된 Node.js 버전을 확인하려면 터미널에 다음 명령을 입력하십시오.

```
node -v
```

2. 머신에 Node.js를 설치하지 않은 경우 [이 링크] (https://nodejs.org/en/download/)로 이동하여 노드를 설치합니다.

## 사용하는 방법


1. 이 저장소를 복제합니다.

```
git clone https://github.com/salomonelli/best-resume-ever.git
```

2. 복제 된 디렉터리로 이동합니다 (예 :`cd best-resume-ever`).

3. `npm install`을 실행합니다.


4. 'resume /'디렉토리에서 이력서를 맞춤 설정하세요. 데이터 'data.yml'을 수정하고 기본 프로필 사진 'id.jpg'를 사진으로 바꿉니다. 사진의 이름을`id.jpg`로 바꾸고`resume /`디렉토리에 복사합니다.

5. 'npm run dev'로 미리보기가 재개됩니다. 이 명령은 서버 인스턴스를 시작하고 포트 8080에서 수신합니다. 브라우저에서 (http : // localhost : 8080 / home)을 엽니 다. 페이지에는 몇 가지 이력서 미리보기가 표시됩니다. 사진과 데이터가 포함 된 이력서 미리보기를 보려면 원하는 레이아웃 하나를 클릭하면 이력서가 같은 창에서 열립니다.


![Resume previews](/readme-images/resumePreviews.png)


6. `npm run export` 명령을 실행하여 이력서를 pdf로 내 보냅니다. 두 개의`npm run` 명령의 동시성으로 인한 오류를 방지하려면 이전`npm run dev`의 실행을 중지 한 다음 export 명령을 입력하십시오.

모든 이력서는`pdf /`폴더로 내보내집니다.

<br>

## Creating and Updating Templates

Please read the <a href="DEVELOPER.md">developer docs</a> on how to create or update templates.

<br>

## Contribute

Feel free to add your own templates, language supports, fix bugs or improve the docs. Any kind of help is appreciated! If you make any kind of changes to an existing template, please commit them as new templates.

<br>

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
