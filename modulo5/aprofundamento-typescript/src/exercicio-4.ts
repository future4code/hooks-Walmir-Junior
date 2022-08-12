/*
Para transpilar esse codigo eu criaria um package.json e um tsconfig
criaria uma pasta chamda src/

o package.json teria as segueintes configurações
{
  "name": "nome do diretorio",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "tsc && node ./build/index.js",
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
=======================//===========
E o tsconfig teria essa

{
  "compilerOptions": {
  "target": "es6", 
  "module": "commonjs", 
  "sourceMap": true, 
  "outDir": "./build", 
  "rootDir": "./src", 
  "removeComments": true,
  "noImplicitAny": true,
  }
 }

 ============//===============

 ai rodaria o comando "npm run start"

 D) dar comando tsc e separar os nomes do arquivo por espaço

*/