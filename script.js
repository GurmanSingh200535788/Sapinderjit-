document.addEventListener('DOMContentLoaded', function () {

    var featuredImage = document.getElementById('featured-image').querySelector('img');   

    var thumbnails = document.getElementById('thumbnails');

    var thumbnailImages = thumbnails.getElementsByTagName('img');

    for (let i=0; i < thumbnailImages.length; i++) {

    thumbnailImages[i].addEventListener('click', function () {

        featuredImage.src = this.src;

    });

}

});