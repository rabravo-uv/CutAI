document.addEventListener('DOMContentLoaded', function() {
    const directory = [
       {
            name: "Coordinación Universitaria de Transparencia, Acceso a la Información y Protección de Datos Personales",
            position: "Coordinacion",
            email: "transparencia@uv.mx",
            phone: "(228) 842-17-00, 842-27-00 10500",
            image: "https://www.uv.mx/transparencia/files/2025/02/01Cutai03_Perfil-de-Redes-Sociales.png"
        },      
         {
            name: "Mtra. Yadira del Carmen Rosales Ruiz.",
            position: "Coordinadora provisional",
            email: "yrosales@uv.mx",
            phone: "Ext: 10500",
            image: "https://www.uv.mx/transparencia/files/2022/08/cutai2.jpg"
        },
         {
          name: "Calle Guillermo Prieto #103; primer piso",
          position: "Colonia Dos de Abril, CP 91030",
          email: "Xalapa, Veracruz, México",
          phone: "Tel: 228-841-5920  &#13;&#10;&#10;Tel: 228-818-7891",
          image: "https://www.uv.mx/transparencia/files/2025/02/01Cutai03_Perfil-de-Redes-Sociales.png"
        },
        {
            name: "",
            position: "Jefa del Departamento de Transparencia",
            email: "",
            phone: "Ext: 10502",
            image: "https://www.uv.mx/transparencia/files/2025/02/01Cutai03_Perfil-de-Redes-Sociales.png"
        },
        {
            name: "Mtro. Ricardo Amaro Santos",
            position: "Jefe del Departamento de Acceso a la Información.",
            email: "riamaro@uv.mx",
            phone: "10505",
            image: "https://www.uv.mx/transparencia/files/2022/08/cutai3.jpg"
        },
         {
            name: "L.A.E. Elizabeth Ramzahuer Villa.",
            position: "Oficial de Datos Personales",
            email: "eramzahuer@uv.mx",
            phone: "Ext: 10504",
            image: "https://www.uv.mx/transparencia/files/2022/08/cutai4.jpg"
        },
        // Agrega más personas según sea necesario
    ];

    const directoryContainer = document.getElementById('directory');

    directory.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('col-md-4');

        personCard.innerHTML = `
            <div class="card">
                <img src="${person.image}" class="card-img-top" alt="${person.name}">
                <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">${person.position}</p>
                    <p class="card-text"><small class="text-muted">${person.email}</small></p>
                    <p class="card-text"><small class="text-muted">${person.phone}</small></p>
                </div>
            </div>
        `;

        directoryContainer.appendChild(personCard);
    });
});
