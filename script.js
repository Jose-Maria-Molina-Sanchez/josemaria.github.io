document.addEventListener('DOMContentLoaded', function() {
    // Botón Descargar CV - enlace al archivo PDF en la carpeta del proyecto
    document.getElementById('downloadCV').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'Jose_Maria_Molina_Sanchez.pdf';
    });

    // Botón Github - enlace a la página de GitHub especificada
    document.getElementById('github').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/Jose-Maria-Molina-Sanchez', '_blank');
    });

    // Botón Contacto - enlace a index.html
    document.getElementById('contact').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
});
