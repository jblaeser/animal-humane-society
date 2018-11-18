var locationLink = document.querySelector('.locationlink');
locationLink.addEventListener('click', function() {console.log('Open Sesame');
document.querySelector('body')
    .classList
    .toggle('location-on')
});


var adoptButton1 = document.querySelector('.adoptbutton1');
adoptButton1.addEventListener('click', function() {console.log('Open Sesame');
document.querySelector('body')
    .classList
    .toggle('adoption-open')
});

var adoptButton2 = document.querySelector('.adoptbutton2');
adoptButton2.addEventListener('click', function() {console.log('Open Sesame');
document.querySelector('body')
    .classList
    .toggle('adoption-open')
});

var adoptButton3 = document.querySelector('.adoptbutton3');
adoptButton3.addEventListener('click', function() {console.log('Open Sesame');
document.querySelector('body')
    .classList
    .toggle('adoption-open')
});

var closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function() {console.log('Close Sesame');
document.querySelector('body')
    .classList
    .toggle('adoption-open')
});