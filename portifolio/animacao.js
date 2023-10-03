
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const modoClaroEscuroButton = document.getElementById('modo-claro-escuro');
const body = document.body;

// Função para alternar entre os modos claro e escuro
function toggleModoClaroEscuro() {
    if (body.classList.contains('modo-escuro')) {
        body.classList.remove('modo-escuro');
        modoClaroEscuroButton.textContent = 'DarkMode';
    } else {
        body.classList.add('modo-escuro');
        modoClaroEscuroButton.textContent = 'LightMode';
    }
}

modoClaroEscuroButton.addEventListener('click', toggleModoClaroEscuro);




