const services = [
    { id: 1, name: "Acido hialuronico", cost: 45000, area: "Estetica"},
    { id: 2, name: "Dermapen", cost: 7500, category: "Estetica"},
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

let bienvenida = "Bienvenidos a nuestra clinica de obstetricia y ginecologia\n1 -Departamentos\n2 - Sacar turno\n3 - Contacto\n0 - Salir"

let option

do {
    option = Number(prompt(bienvenida))
    if (option === 1) {
        servicesList(services)
    }
}   while (option !==0)

function servicesList(listArray) {
    let areas = []
    let list =""
    listArray.forEach(element => {
        if (!areas.includes(element.area)){
            areas.push(element.area)
            list+= element.area + "\n"
        }
    })
    alert("areas disponibles:\n" + list.trim())
}