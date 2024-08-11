document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');
    console.log(images);
    
    const imgOrg = [];

    const options = {
        threshold: 0.5
    }

    function loadImage(entry) {
        const image = entry.target;
        console.log('load');
        
        const originalImage = img.getAttribute('src');
        console.log(originalImage);

        imgOrg.push(originalImage);
        // console.log(imgOrg);

        image.src = image.getAttribute('data-src')

        observer.unobserve(image)

        
        
    }
    // loadImage();

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
        if(entry.isIntersecting) {
            loadImage(entry);
        }
    })

}, options)

    images.forEach(image => {
        observer.observe(image)
    })

});
