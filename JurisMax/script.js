document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".referencia-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(elemento => observer.observe(elemento));
    
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".container-2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(elemento => observer.observe(elemento));
    
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".process-steps");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(elemento => observer.observe(elemento));
    
});


// APENAS MOBILE  

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) return; // Sai do script se for desktop

    gsap.registerPlugin(ScrollTrigger);

    const destaqueItens = document.querySelectorAll(".destaque-item");

    destaqueItens.forEach((item) => {
        ScrollTrigger.create({
            trigger: item,
            start: "top 53%", // Ativa quando 53% do item entra na tela
            end: "top 30%", // Desativa quando passar de 30% da tela
            toggleClass: { targets: item, className: "hover-ativo" },
            once: false
            
        });
    });
});

// Imagem aparece pela esquerda

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".imagem img",
        { opacity: 0, x: 50 }, // Começa invisível e deslocada para a direita
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".imagem",
                start: "top 85%", // Inicia quando 85% da div entrar na tela
                end: "top 50%",
                toggleActions: "play none none none"
            }
        }
    );
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".imagem2 img",
        { opacity: 0, x: 50 }, // Começa invisível e deslocada para a direita
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".imagem2",
                start: "top 85%", // Inicia quando 85% da div entrar na tela
                end: "top 50%",
                toggleActions: "play none none none"
            }
        }
    );
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".imagedois img",
        { opacity: 0, x: -50 }, // Começa invisível e deslocada para a direita
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".imagedois",
                start: "top 85%", // Inicia quando 85% da div entrar na tela
                end: "top 50%",
                toggleActions: "play none none none"
            }
        }
    );
});