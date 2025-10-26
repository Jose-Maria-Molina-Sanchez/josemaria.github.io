document.addEventListener('DOMContentLoaded', function() {
    // Botón Descargar CV - enlace al archivo PDF en la carpeta del proyecto
    document.getElementById('downloadCV').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'Jose_Maria_Molina_Sanchez.pdf';
    });

    // Botón Github - enlace a la página de GitHub especificada
    document.getElementById('github').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/Jose-Maria-Molina-Sanchez');
    });

    // Botón Inicio - enlace a index.html
    document.getElementById('inicio').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    // Botón Sobre Mí - enlace a yo.html
    document.getElementById('yo').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'yo.html';
    });

    // Botón Sobre Mis PRoyectos - enlace a proyectos.html
    document.getElementById('proyectos').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'proyectos.html';
    });

    // Botón Sobre Formulario - enlace a https://jose-maria-molina-sanchez.github.io/formulario.github.io/
    document.getElementById('formulario').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://jose-maria-molina-sanchez.github.io/formulario.github.io/');
    });

    // Botón Sobre Jardineria - enlace a https://jose-maria-molina-sanchez.github.io/formulario.github.io/
    document.getElementById('jardineria').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/Jose-Maria-Molina-Sanchez/Proyecto-Jardineria-CSharp');
    });
});
