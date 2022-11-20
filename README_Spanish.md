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
  :necktie: :briefcase: Construye rapido :rocket: y facilmente multiples curriculumns hermosos y crea tu mejor CV!
  <br><br>
  Hecho con Vue y LESS.
</h4>

<br>
<br>

<p align="left">
<p>Interesante<br>
<img src="src/assets/preview/resume-cool.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-cool-rtl2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-cool-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Creativo<br>
<img src="src/assets/preview/resume-creative.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Verde<br>
<img src="src/assets/preview/resume-green.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Morado<br>
<img src="src/assets/preview/resume-purple.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Barra por un lado<br>
<img src="src/assets/preview/resume-side-bar.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Simetrico<br>
<img src="src/assets/preview/resume-left-right.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Material Oscuro<br>
<img src="src/assets/preview/resume-material-dark.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-material-dark-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Oblicuo<br>
<img src="src/assets/preview/resume-oblique.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
</p>

<br>
<br>

## Pre-requisitos

1. Es requerido tener Nodejs con una version 8.5.0 o superior. Para ver que version de Node.js esta installa en su computadora, escriba el siguiente comando en la terminal:

```
node -v
```

2. Si no tienes Node.js instalado en tu computadora, ve a este [enlace](https://nodejs.org/en/download/) para instalar el nodo.

## Como utilizar el software

1. Clona este repositorio.

```
git clone https://github.com/salomonelli/best-resume-ever.git
```

2. Ve al directorio clonado (e.g. cd best-resume-ever)

3. Corre este comando `npm install`. Esto puede demorar algunos segundos.

4. Personaliza tu curriculum en el directorio `resume/` : edita tu informacion en el archivo `data.yml` y reemplaza la imagen predeterminada `id.jpg` con tu propia imagen. Cambia el nombre de tu imagen y nombrala `id.jpg` y copiala en el directorio `resume/`. Durante este paso, puede que te resulte mas facil navegar hacia estos archivos usando la aplicacion Finder o File explorer. Esto te permitira editar los archivos con el editor de texto predeterminado en tu computadore. 

5. Puedes revisar la vista previa de los curriculums usando el comando `npm run dev`. El comando iniciara una instancia del servidor y escuchara el puerto 8080. Abra (http://localhost:8080/home) en su navegador. La pagina mostrara algunas vistas previas de los curriculums. Para ver la vista previa de su curriculum con su foto y datos, haga clic en uno de los diseños y el curriculum se abrira en la misma ventana.

![Resume previews](/readme-images/resumePreviews.png)

6. Realice este paso si desea crear un curriculum en PDF, si no, omita este paso. Este software ah estado experimentando problemas con node.js versiones 16.18.0 cuando se trata de usa el comando npm run export para crear PDFs de los resumes. Node 12.0.0 ah sido probado y funciona bien con este software. Necesitaras Node Version Manager (nvm) para instalar y usar versiones anteriores. NVM permite descargar, instalar, cambiar y administrar muy facilmente multiples versiones de node.js. Si no tienes nvm, puedes obtenerlo siguiendo este comando: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash1`. Ahora puedes descargar e instalar el node.js v12 usando este commando: `nvm install 12.0.0`. Si quieres vovler a usar la version mas reciente, puedes usar el comando `nvm use <version>`

7. Exporta tu curriculum en formato pdf ejecutando el comando: `npm run export`. Para evitar errores debido a la concurrencia de dos comandos de ejecucion the npm, se debe de detener la ejecucion del comando anterior `npm run dev` y luego escribe el comando para exportar.

Todos los curriculums seran exportados al directorio `pdf/`.

<br>

## Creando y actualizando plantillas

Favor de leer los  <a href="DEVELOPER.md">documentos para desarrolladores</a> sobre como crear o actualizar plantillas

<br>

## Contribuir

Sientase libre de apregar sus propias plantillas, dar soporte a diferentes idiomas, corregir errores o mejorar la documentacion. Cualquier tipo de ayuda se agradece! Si realiza algun tipo de cambio en una plantilla existente, favor de confirmarlos como nuevas plantillas.

<br>

## Creditos

Este proyecto usa varios paquetes de codigo abierto:

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
