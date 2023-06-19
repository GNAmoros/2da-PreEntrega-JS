const services = [
    { id: 1, name: "Acido hialuronico", cost: 45000, area: "Estetica"},
    { id: 2, name: "Dermapen", cost: 7500, area: "Estetica"},
    { id: 3, name: "Fosfatidilcolina", cost: 8000, area: "Estetica"},
    { id: 4, name: "Peeling quimico", cost: 4000, area: "Estetica"},
    { id: 5, name: "Pap/Colpo", cost: 1000, area: "Ginecologia"},
    { id: 6, name: "Test de HPV", cost: 1200, area: "Ginecologia" },
    { id: 7, name: "Consejeria en salud sexual y reproductiva", cost: 3000, area: "Ginecologia"},
    { id: 8, name: "Oncolginecologia", cost: 5000, area: "Ginecologia"},
    { id: 9, name: "Obstetricia bajo/alto riesgo", cost: 7500, area: "Obstetricia"},
    { id: 10, name: "Rehabilitacion del suelo pelvico", cost: 6000, area: "Obstetricia"},
    { id: 11, name: "Post-parto", cost: 7500, area: "Obstetricia"},
    { id: 12, name: "Curso pre-parto", cost: 5000, area: "Obstetricia"}
]


let bienvenida = "Bienvenidos a nuestra clinica de obstetricia y ginecologia. Como podemos ayudarle?\n1 -Estetica\n2 - Ginecologia\n3 - Obstetricia\n4 - Sacar turno\n5 - Salir"

let option


do {
    option = Number(prompt(bienvenida))
    if (option === 1) {
        const esteticaItems = services.filter(service => service.area === 'Estetica');
        let esteticaOptions = esteticaItems.map((service, index) => `${index + 1}. ${service.name}`);
        esteticaOptions = esteticaOptions.join('\n');
        alert(`Estetica Options:\n${esteticaOptions}`);
    } else if (option === 2) {
        const ginecologiaItems = services.filter(service => service.area === 'Ginecologia');
        let ginecologiaOptions = ginecologiaItems.map((service, index) => `${index + 1}. ${service.name}`);
        ginecologiaOptions = ginecologiaOptions.join('\n');
        alert(`Ginecologia Options:\n${ginecologiaOptions}`);
    } else if (option === 3) {
        const obstetriciaItems = services.filter(service => service.area === 'Obstetricia');
        let obstetriciaOptions = obstetriciaItems.map((service, index) => `${index + 1}. ${service.name}`);
        obstetriciaOptions = obstetriciaOptions.join('\n');
        alert(`Obstetricia Options:\n${obstetriciaOptions}`);
    } else if (option === 4) {
        
    } 
      
    }  
    
    while (option !==5)

