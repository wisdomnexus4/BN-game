// Hero Image Zoom

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    const scale = 1 + window.scrollY * 0.0005;

    heroImage.style.transform = `scale(${scale})`;

});



// Section Reveal

const gamesSection = document.querySelector("#games");

const cards = document.querySelectorAll(".game-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            gamesSection.classList.add("show");

            cards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index*200);

            });

        }

    });

},{
    threshold:0.3
});

observer.observe(gamesSection);
