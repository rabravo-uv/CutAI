document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.list-group-item');
    const contenidos = document.querySelectorAll('.contenido-seccion');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover active de todos los items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Agregar active al item clickeado
            this.classList.add('active');
            
            // Ocultar todos los contenidos
            contenidos.forEach(contenido => {
                contenido.style.display = 'none';
            });
            
            // Mostrar el contenido correspondiente
            const contentId = 'contenido' + this.dataset.content.charAt(0).toUpperCase() + 
                           this.dataset.content.slice(1);
            document.getElementById(contentId).style.display = 'block';
        });
    });
});