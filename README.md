 BlurIt
=
Thes library takes magic attributes from each image tag and produce blur!

- examples?
 take a look at http://gagoar.github.io/BlurIt

- how do I use it? Just drop it into header or the bottom of the body as usual.
 ``` html
  <script src=https://rawgithub.com/gagoar/BlurIt/master/dist/BlurIt.min.js></script>
 ```

- Attributes

 all the attributes are related with img tag elements

 `data-blurit` : if the tag don't have these attribute will beignored

 `data-blurit-transofrm`: ['append'|| 'replace'] alter the dom producing in each
  case the expected change.

 `data-blurit-callback` : after process we call the callback function
  with the following arguments: [ image, canvas, dataURL ]

 `data-blurit-transform='replace' data-blurit-onimg` : [id of an image element] it replace a different tag.

 `data-blurit-radius` : [number || 20] to alter the radius applied to the
  blured image

 ``` html
  <image src='someIamge' data-blurit data-blurit-transform='append' data-blurit-radius=50>
 ```

- Algorithm
  All the credit goes to http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html

- Development

 - Install dependencies
  ```` bash
   npm install
  ````
 - Run server for development

  ``` bash
   npm start
  ```

 - Build the library

 ``` bash
 npm run-script build
 ```
