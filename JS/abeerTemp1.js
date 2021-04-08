'use strict';

//////to upload an image
document.getElementsByClassName('imagePart')[0].addEventListener('mouseover', function(){
    document.getElementById('imageLabel').style.display='inline';
    document.getElementById('userImg').style.display = 'inline';
  });
  
  document.getElementsByClassName('imagePart')[0].addEventListener('mouseout', function(){
    document.getElementById('imageLabel').style.display='none';
    document.getElementById('userImg').style.display = 'block';
  });
  
  let loadFile = function(event) {
    let image = document.getElementById('userImg');
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
  ////////////////////////