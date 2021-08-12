let car = {
    photo: './images/car.jpg',
    title: 'Auto',
    description: 'Sárga Fiat, Bari utcáin (Dél-Olaszország)'
  };

  let depot = {
    photo: './images/depot.jpg',
    title: 'Kikötő',
    description: 'Bari városi kikötője (Dél-Olaszország)'
  };

  let house = {
    photo: './images/house.jpg',
    title: 'Ház',
    description: 'Belvárosi tömbház (Dél-Olaszország)'
  };

  let sea = {
    photo: './images/sea.jpg',
    title: 'Tenger',
    description: 'Az Adriai-tengerpart (Dél-Olaszország)'
  };

  let stone = {
    photo: './images/stone.jpg',
    title: 'Kövesút',
    description: 'Skanzen (Dél-Olaszország)'
  };

  let street = {
    photo: "./images/street.jpg",
    title: 'Utca',
    description: 'Tipikus utcakép (Dél-Olaszország)'
  }; 

let currentPhoto = 0;
let imagesData = [car, house, depot, sea, stone, street]

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
  }
  loadPhoto(currentPhoto);

let loadTitle = (photoTitle) => {
    $('h1').text(imagesData[photoTitle].title);
  }
  loadTitle(currentPhoto);
  
let loadDescription = (photoDescription) => {
    $('p').text(imagesData[photoDescription].description);
  }
  loadDescription(currentPhoto);

  $('.gomb1').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
  });

  $('.gomb2').click(() => {
    if(currentPhoto < 6) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
  });
 
  imagesData.forEach((item, index) => { 

    
    $('#keret').append('<div class="thumbnail" data-number="'+index+'"><div class="hover"> '+item.title+' </div><img src="'+item.photo+'" data-number="'+index+'" title="'+item.title+'" alt=""> </div>');


    $('.thumbnail').click((event) => { 
    
      let ind = parseInt($(event.target).attr('data-number')); 
      
      loadPhoto(ind);    
      loadTitle(ind);
      loadDescription(ind);
       
      
       }); 
    

    }); 
    let loadLittleTitle = (photoLittleTitle) => {
    $('.item').text(imagesData[photoLittleTitle].title);
  }
  loadLittleTitle(currentPhoto);




    console.log("A java eddig betolt");