'use strict';

const picture = [{

    title:'Great Wall of China',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url: './assets/1.png',
    overlay:'Great Wall of China',

},

{ 
    title:'Chichén Itzá',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url:'./assets/2.png',
    overlay:'Chichén Itzá',
},

{
    title:'Petra',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url:'./assets/3.png',
    overlay:'Petra',
},

{
    title:'Machu Picchu',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url:'./assets/4.png',
    overlay:'Machu Picchu',
},

{
    title:'Christ the Redeemer',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url:'./assets/5.png',
    overlay:'Christ the Redeemer',
},

{
    title:'Colosseum',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url:'./assets/6.png',
    overlay:'Colosseum',
},

{
    title:'Taj Mahal',
    text:'Pellentesque tortor lectus, porttitor a nisi eget, varius pellentesque eros. Curabitur ac eros id quam malesuada efficitur. Donec vitae facilisis neque. Maecenas viverra congue viverra. Nullam elementum, urna et consectetur rhoncus, neque odio maximus nunc, sit amet imperdiet orci eros quis massa. Duis ac ligula augue. Nam porttitor ac arcu at condimentum. Phasellus tortor orci, congue ut ultrices vel, ultrices a libero. Nulla nec risus erat.',
    url:'./assets/7.png',
    overlay:'Taj Mahal',
},

];


let thumbnails = document.querySelectorAll(".image");
  let photoView = document.getElementsByClassName("photo-view");
  let paragraphs = document.getElementsByTagName("p");
  let title = document.getElementsByTagName("h4");
  let leftArrow = document.getElementsByClassName("left-arrow");
  let rightArrow = document.getElementsByClassName("right-arrow-image");
  let overLay = document.getElementsByClassName('overlay');
  let counter = 0;
  
  photoView[0].style.backgroundImage = `url("${picture[0].url}")`;
  thumbnails[0].setAttribute('class', 'active');
  title[0].textContent = picture[0].title;
  paragraphs[0].textContent = picture[0].text;
  overLay[0].textContent = picture[0].overlay;
  

  
  for (let i = 0; i < thumbnails.length; i++) {
    counter = i;
    thumbnails[i].style.backgroundImage = `url("${picture[i].url}")`;
    thumbnails[i].onclick = function changeCurrentPic() {
      photoView[0].style.backgroundImage = thumbnails[i].style.backgroundImage;
      title[0].textContent = picture[i].title;
      paragraphs[0].textContent = picture[i].text;
      overLay[0].textContent = picture[i].overlay;
      thumbnails[counter].setAttribute('class', 'image');
      
      thumbnails[counter].setAttribute('class', 'active');
    };
  };

  function editTheCurrentPic() {
    photoView[0].style.backgroundImage =
      thumbnails[counter].style.backgroundImage;
    title[0].textContent = picture[counter].title;
    paragraphs[0].textContent = picture[counter].text;
    overLay[0].textContent = picture[counter].overlay;
}

function changePictureToLeft() {
  counter--;
  if (counter === -1) {
    counter = picture.length - 1;
    thumbnails[counter - (picture.length - 1)].setAttribute('class', 'image');
    editTheCurrentPic();
  }
  
  thumbnails[counter].setAttribute('class', 'active');
  thumbnails[counter + 1].setAttribute('class', 'image');
  
  editTheCurrentPic();
}

function changePictureToRight() {
  counter++;
  if (counter === picture.length) {
    counter = 0;
    thumbnails[counter + (picture.length - 1)].setAttribute('class', 'image');
    editTheCurrentPic();
  }
  
  thumbnails[counter].setAttribute('class', 'active');
  thumbnails[counter -1].setAttribute('class', 'image');
  editTheCurrentPic();
}


leftArrow[0].onclick = () => {
  changePictureToLeft();
};

rightArrow[0].onclick = () => {
  changePictureToRight();
};

function onKeyPress(event) {
  switch (event.keyCode) {
    case 37:
      changePictureToLeft();
      break;
    case 39:
      changePictureToRight();
      break;
  }
}
document.body.addEventListener("keydown", onKeyPress);