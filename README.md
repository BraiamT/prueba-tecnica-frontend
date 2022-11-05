# :clipboard: Examen ReactJS

## Descripción

Este repositorio contiene una aplicación de React la cual tiene como
objetivo una evaluación inicial para aplicar a un puesto Front End.
Dicha aplicación fue creada desde cero utilizando [Vite](https://vitejs.dev/)
como frontend tooling y [Yarn](https://yarnpkg.com/) como gestor de paquetes.

## Contenido

 - Manejo de estado con **[Redux](https://redux.js.org/)**
 - Simulación de múltiples ambientes con variables de entorno en archivos
 **dotenv**: prod, dev, qa, test
 - **[React Router](https://reactrouter.com/en/main)** - v6 | HashRouter, rutas dinámcias, públicas
 y protegidas
 - Fake Login
 - Consumo de **APIs** (GET y POST)
 - Búsqueda de información en data tables con paginación
 - Uso de modals
 - Implementación de un **Drag & Drop** con preview de imágenes - Not completed :c
 - Carga de imágenes a storage ([Cloudinary](https://cloudinary.com/)) - Not completed :c
 - Uso de [Material UI](https://mui.com/) y [Bootstrap](https://getbootstrap.com/)

## Uso

### Ejecutar el proyecto:

Para poder ejecutar el proyecto, es necesario tener instalado yarn ([Installation | Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)) a través de npm:

```sh
npm install --global yarn
```

Una vez descargado el proyecto:

  - Dirigirse a la carpeta contenedora
  - Ejectuar el comando `yarn install` o simplemente `yarn`
  - Esperar a que la instalación de paquetes termine
  - Ejectuar `yarn dev` para levantar el proyecto

### Login:

Se puede hacer un Login con las credenciales:

  - Usuario: **Cool User**
  - Contraseña: **Str0ng_p@ssword**

### Environments:

Para ejecutar el proyecto en otro ambiente que no sea el de desarrollo - *DEV*
(ambiente por defecto al ejecutar `yarn dev`) se puede agregar la bandera `--mode`
para indicar las variables de entorno que se desean tomar al levantar el proyecto, i.e:

```sh
# TEST
yarn dev --mode test

# QA
yarn dev --mode qa
```

*En este caso el único cambio según el ambiente será el título de la aplicación*


### Build:

Para generar un bundle para producción basta con ejecutar:

```sh
yarn build
```

Esto generará en la raíz del proyecto la carpeta *dist* la cual contendrá los archivos
necesarios para hacer el deploy. Esto utilizará por defecto las variables de entorno de
producción (*.env.production*)

### Comentarios adicionales:

Una disculpa de antemano por el diseño tan pobre, sé que no hay excusas pero tengo otras
actividades en mi trabjo actual que debo atender así que es por ello mismo que me disculpo
por no completar la pantalla de Upload. Sin embargo agradezco mucho la oportunidad y quedo
atento a cualquier comentario :D

> By *BraiamT* :smile:
