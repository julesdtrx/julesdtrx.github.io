const typeElement = document.getElementById('typing-effect');
if (typeElement) {
    const words = ["Pentester Junior", "Développeur Junior Python / C / C++ / Java", "Network Admin", "CTF Player", "Audit system"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

const track = document.getElementById('track');
if (track) {
    let scrollAmount = 0;

    window.moveSlide = function(direction) {
        const cardWidth = 340; 
        const maxScroll = track.scrollWidth - track.clientWidth;

        scrollAmount += direction * cardWidth;

        if (scrollAmount < 0) scrollAmount = 0;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;

        track.style.transform = `translateX(-${scrollAmount}px)`;
    }
}
