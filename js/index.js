$(function() {

    // replacing the hero image when screen resizes

    const heroImage = document.querySelector('.hero-img');
    console.log(heroImage.src);
    
    function replaceImage() {
      if (window.innerWidth < 768) {
        heroImage.style.display = 'none';
        // set desktop image
        heroImage.src = './assets/images/image-web-3-mobile.jpg';
        heroImage.style.display = 'block';
      } else {
        // set mobile image
        heroImage.src = './assets/images/image-web-3-desktop.jpg';
        heroImage.style.display = 'block';
      }
    }
    
    window.addEventListener('resize', replaceImage);
    replaceImage();
 

});
