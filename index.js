var BlurMath  = require('./src/BlurMath')
  , images    = document.querySelectorAll('img[data-blurit]')
  , blank     = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="

  , handelEvent = function (e) {
    process(this)
  }
  , process  = function (image) {

    var canvasId = image.getAttribute('data-blurit-canvas')
      , bluredId = image.getAttribute('data-blurit-onimg')
      , callback = image.getAttribute('data-blurit-callabck')
      , action   = image.getAttribute('data-blurit-transform')
      , radius   = image.getAttribute('data-blurit-radius') || 20
      , canvas   = canvasId ? document.getElementById(canvasId) : document.createElement('canvas')
      , blured   = bluredId ? document.getElementById(bluredId) : document.createElement('img')

    if (canvas) {
      var dataURL = BlurMath.process(image, canvas, Number(radius) , false)
      if (typeof callback == 'function') callback(image, canvas, dataURL)

        if (action) {
          switch (action){
          case 'append':
            blured.src = dataURL
            image.parentElement.appendChild(blured)
            break;
          case 'replace':
            tagToReplace = bluredId ?  document.getElementById(bluredId) : image
            tagToReplace.src = dataURL
            break;
          }
        }
    }

  }

  for (var i = 0, img; img = images[i++];) {
    if (img.complete)
      process(img)
    else
      img.onload = handelEvent
  }
