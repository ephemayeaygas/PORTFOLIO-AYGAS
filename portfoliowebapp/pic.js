  let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        currentIndex += direction;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        // Update the carousel position
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update indicator active class
        const indicators = document.querySelectorAll('.carousel-indicators li');
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentIndex].classList.add('active');
    }