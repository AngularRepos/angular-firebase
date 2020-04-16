# AngularFirebase

Aplicación web para poner en práctica la conexión de Angular con Firebase.  
Se trata de una palicación cuyo objetivo es recoger una serie de objetos que deseamos adquirir y sobre los 
que deseamos realizar una comparativa previa.  
Para cada objeto que incorporemos a nuestra "lista de deseos" podremos ir añadiendo una serie de items que nos permiterán ir recogiendo la información de compra coómo puede ser la marca, modelo, precio y lugar de compra, de forma que al final podamos tomar una decisión adecuadamente informada. 
Para poder guadar nuestras listas de deseos será necesario registrarnos como usuarios de la aplicación.

## Requerimientos

Angular CLI: 8.3.26
Node: 12.16.1
OS: win32 x64
Angular: 8.2.14

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.803.26
@angular-devkit/build-angular     0.803.26
@angular-devkit/build-optimizer   0.803.26
@angular-devkit/build-webpack     0.803.26
@angular-devkit/core              8.3.26
@angular-devkit/schematics        8.3.26
@angular/cli                      8.3.26
@angular/fire                     6.0.0
@ngtools/webpack                  8.3.26
@schematics/angular               8.3.26
@schematics/update                0.803.26
rxjs                              6.4.0
typescript                        3.5.3
webpack                           4.39.2

## Estructura de ficheros

src
├───app
│   ├───main
│   ├───models
│   ├───pulic
│   ├───services
│   ├───users
│   │   ├───user
│   │   └───users-list
│   └───wishes
├───assets
│   └───img
└───environments
