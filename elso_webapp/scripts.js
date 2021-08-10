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
  console.log("A java eddig betolt")
  //$('#photo').attr('src', car.photo);