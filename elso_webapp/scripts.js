let car = {
    photo: './images/car.jpg',
    title: 'KEP NEVE',
    description: 'KEP LEIRASA'
  };

  let depot = {
    photo: './images/depot.jpg',
    title: 'KEP NEVE',
    description: 'KEP LEIRASA'
  };

  let house = {
    photo: './images/house.jpg',
    title: 'KEP NEVE',
    description: 'KEP LEIRASA'
  };

  let sea = {
    photo: './images/sea.jpg',
    title: 'KEP NEVE',
    description: 'KEP LEIRASA'
  };

  let stone = {
    photo: './images/stone.jpg',
    title: 'KEP NEVE',
    description: 'KEP LEIRASA'
  };

  let street = {
    photo: './images/street.jpg',
    title: 'KEP NEVE',
    description: 'KEP LEIRASA'
  }; 

let currentPhoto = 0;
let imagesData = [car, depot, house, sea, stone, street]

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
  }
  loadPhoto(currentPhoto);

  $('#nyil1').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
  });

  $('#nyil2').click(() => {
    if(currentPhoto < 6) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
  });
 

//.attr megjelníti, .append nem.
    imagesData.forEach(() => {
      $('#thumbnail').attr('src', imagesData[currentPhoto].photo
      )})

  //$('#thumbnail').attr('src', car.photo);
   
  /* imagesData.forEach(() => {
    $('#thumbnail').append('src', imagesData[loadPhoto].photo)})*/

  

 /* imagesData.forEach((currentPhoto, loadPhoto) => {
    $('#keret').append(`<div class="kep" currentPhoto="${currentPhoto}">${loadPhoto}</div>`);
    $('.kep').click((event) => {
      let preloadPhoto = $(event.target).attr(currentPhoto);
      let numberIndex = parseInt(preloadPhoto);
    })*/

    console.log("A java eddig betolt")