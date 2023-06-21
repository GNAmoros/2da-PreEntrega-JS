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

const datesEstetica = [
    { day: "27/6", time: "16:00"},
    { day: "27/6", time: "16:30"},
    { day: "27/6", time: "17:00"},
    { day: "27/6", time: "17:30"},
    { day: "27/6", time: "18:00"},
    { day: "27/6", time: "18:30"},
    { day: "27/6", time: "19:00"},
    { day: "29/6", time: "16:00"},
    { day: "29/6", time: "16:30"},
    { day: "29/6", time: "17:00"},
    { day: "29/6", time: "17:30"},
    { day: "29/6", time: "18:00"},
    { day: "29/6", time: "18:30"},
    { day: "29/6", time: "19:00"}
]

const datesGinecologia = [
    { day: "26/6", time: "16:00"},
    { day: "26/6", time: "16:30"},
    { day: "26/6", time: "17:00"},
    { day: "26/6", time: "17:30"},
    { day: "26/6", time: "18:00"},
    { day: "26/6", time: "18:30"},
    { day: "26/6", time: "19:00"},
    { day: "29/6", time: "16:00"},
    { day: "29/6", time: "16:30"},
    { day: "29/6", time: "17:00"},
    { day: "29/6", time: "17:30"},
    { day: "29/6", time: "18:00"},
    { day: "29/6", time: "18:30"},
    { day: "29/6", time: "19:00"}
]

const datesObstetricia = [
    { day: "28/6", time: "16:00"},
    { day: "28/6", time: "16:30"},
    { day: "28/6", time: "17:00"},
    { day: "28/6", time: "17:30"},
    { day: "28/6", time: "18:00"},
    { day: "28/6", time: "18:30"},
    { day: "28/6", time: "19:00"},
    { day: "30/6", time: "16:00"},
    { day: "30/6", time: "16:30"},
    { day: "30/6", time: "17:00"},
    { day: "30/6", time: "17:30"},
    { day: "30/6", time: "18:00"},
    { day: "30/6", time: "18:30"},
    { day: "30/6", time: "19:00"}
]


let bienvenida = "Bienvenidos a nuestra clínica de obstetricia y ginecología. ¿Cómo podemos ayudarle?\n1 - Estética\n2 - Ginecología\n3 - Obstetricia\n4 - Sacar turno\n5 - Salir";

let option;

do {
  option = Number(prompt(bienvenida));

  if (option === 1) {
    const esteticaItems = services.filter(service => service.area === 'Estetica');
    let esteticaOptions = esteticaItems.map((service, index) => `${index + 1}. ${service.name}`);
    esteticaOptions = esteticaOptions.join('\n');
    alert(`Tratamientos de estética:\n${esteticaOptions}`);
  } else if (option === 2) {
    const ginecologiaItems = services.filter(service => service.area === 'Ginecologia');
    let ginecologiaOptions = ginecologiaItems.map((service, index) => `${index + 1}. ${service.name}`);
    ginecologiaOptions = ginecologiaOptions.join('\n');
    alert(`Consultas ginecológicas:\n${ginecologiaOptions}`);
  } else if (option === 3) {
    const obstetriciaItems = services.filter(service => service.area === 'Obstetricia');
    let obstetriciaOptions = obstetriciaItems.map((service, index) => `${index + 1}. ${service.name}`);
    obstetriciaOptions = obstetriciaOptions.join('\n');
    alert(`Consultas obstétricas:\n${obstetriciaOptions}`);
  } else if (option === 4) {
    const selectService = Number(prompt(`Seleccione el servicio:\n1. Estética\n2. Ginecología\n3. Obstetricia`));
    let selectedOption;
    if (selectService === 1) {
      selectedOption = { option: 1, dates: datesEstetica };
    } else if (selectService === 2) {
      selectedOption = { option: 2, dates: datesGinecologia };
    } else if (selectService === 3) {
      selectedOption = { option: 3, dates: datesObstetricia };
    }
    
    if (selectedOption && selectedOption.dates.length > 0) {
      const selectedDateOption = selectedOption.dates.map((date, index) => `${index + 1}. ${date.day} ${date.time}`).join('\n');
      const selectedDate = Number(prompt(`Por favor elija su turno:\n${selectedDateOption}`));
      if (selectedDate >= 1 && selectedDate <= selectedOption.dates.length) {
        const selectedDateObj = selectedOption.dates[selectedDate - 1];
        selectedOption.dates.splice(selectedDate - 1, 1);
        alert(`Ha reservado un turno para: ${selectedDateObj.day} ${selectedDateObj.time}`);
      } else {
        alert("Opción no válida");
      }
    } else {
      alert("Opción no válida");
    }
  }
} while (option !== 5);

