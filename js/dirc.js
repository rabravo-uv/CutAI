document.addEventListener('DOMContentLoaded', function() {
    // 1. Asegúrate de que el ID 'cvModal' exista en tu HTML
    const modalElement = document.getElementById('cvModal');
    if (!modalElement) return; // Evita errores si el modal no existe en la página

    const cvModal = new bootstrap.Modal(modalElement);
    
    const imageMap = {
        'jefe_portrait': '/home/rabravo/.gemini/antigravity/brain/d1972b29-7557-4358-b31c-90e0087b7d48/staff_portrait_webp_1776787761569.png',
        'staff_portrait': '/home/rabravo/.gemini/antigravity/brain/d1972b29-7557-4358-b31c-90e0087b7d48/staff_portrait_webp_1776787761569.png',
        'area_lead_portrait': '/home/rabravo/.gemini/antigravity/brain/d1972b29-7557-4358-b31c-90e0087b7d48/area_lead_portrait_webp_1776787940761.png',
        'analyst_portrait': '/home/rabravo/.gemini/antigravity/brain/d1972b29-7557-4358-b31c-90e0087b7d48/analyst_portrait_webp_1776788116912.png'
    }; // <-- Aquí había una coma errónea

    // Exponemos la función al objeto window para que los botones HTML (onclick) puedan verla
    window.showCV = function(name, role, dept, imgKey, edu, bio, email, ext) {
        document.getElementById('mNameHeader').textContent = name;
        document.getElementById('mRoleHeader').textContent = role;
        document.getElementById('mDept').textContent = dept;
        document.getElementById('mEducation').textContent = edu;
        document.getElementById('mBio').textContent = bio;
        document.getElementById('mEmail').textContent = email;
        document.getElementById('mExt').textContent = ext || "N/A";
        document.getElementById('mAvatar').src = imageMap[imgKey] || "";
        
        // Guardar nombre para semblanza
        const btnSemblanza = document.getElementById('btnSemblanza');
        if(btnSemblanza) btnSemblanza.setAttribute('data-nombre', name);
        
        cvModal.show();
    };

    // Función para descargar semblanza PDF
    window.descargarSemblanza = function() {
        const btn = document.getElementById('btnSemblanza');
        if (!btn) return;

        const nombre = btn.getAttribute('data-nombre');
        const nombreArchivo = nombre ? nombre.replace(/\s+/g, '_').toLowerCase() + '.pdf' : 'semblanza.pdf';
        
        // CORRECCIÓN: Se cambió 'nombreArc' por 'nombreArchivo' y la coma final por punto y coma
        const ruta = 'https://rabravo-uv.github.io/CutAI/pdfs/' + nombreArchivo;
        
        window.open(ruta, '_blank');
    };

    // Asignar el evento al botón si existe
    const btnDescarga = document.getElementById('btnSemblanza');
    if (btnDescarga) {
        btnDescarga.addEventListener('click', descargarSemblanza);
    }
});
