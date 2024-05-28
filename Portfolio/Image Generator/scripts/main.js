function addRandomImage() {

    var container = document.getElementById('images-container');


    var imageNames = ['cr.jpg', 'er.jpg', 'g.jpg', 'uy.jpg', 's.jpg'];

   
    var randomIndex = Math.floor(Math.random() * imageNames.length);
    var randomImageName = imageNames[randomIndex];


    var img = document.createElement('img');
    img.src = 'images/' + randomImageName;
    img.classList.add('added-image');
    container.appendChild(img);
}


document.querySelector('.btn').addEventListener('click', addRandomImage);
