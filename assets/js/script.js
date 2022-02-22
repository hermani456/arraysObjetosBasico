const radiologia = [
   {
      HORA: "11:00",
      ESPECIALISTA: "IGNACIO SCHULZ",
      PACIENTE: "FRANCISCA ROJAS",
      RUT: "9878782-1",
      PREVISION: "FONASA",
   },
   {
      HORA: "11:30",
      ESPECIALISTA: "FEDERICO SUBERCASEAUX",
      PACIENTE: "PAMELA ESTRADA",
      RUT: "15345241-3",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "15:00",
      ESPECIALISTA: "FERNANDO WURTHZ",
      PACIENTE: "ARMANDO LUNA",
      RUT: "16445345-9",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "15:30",
      ESPECIALISTA: "ANA MARIA GODOY",
      PACIENTE: "MANUEL GODOY",
      RUT: "17666419-0",
      PREVISION: "FONASA",
   },
   {
      HORA: "16:00",
      ESPECIALISTA: "PATRICIA SUAZO",
      PACIENTE: "RAMON ULLOA",
      RUT: "14989389-K",
      PREVISION: "FONASA",
   },
]
const traumatologia = [
   {
      HORA: "8:00",
      ESPECIALISTA: "MARIA PAZ ALTUZARRA",
      PACIENTE: "PAULA SANCHEZ",
      RUT: "15554774-5",
      PREVISION: "FONASA",
   },
   {
      HORA: "10:00",
      ESPECIALISTA: "RAUL ARAYA",
      PACIENTE: "ANGÉLICA NAVAS",
      RUT: "15444147-9",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "10:30",
      ESPECIALISTA: "MARIA ARRIAGADA",
      PACIENTE: "ANA KLAPP",
      RUT: "17879423-9",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "11:00",
      ESPECIALISTA: "ALEJANDRO BADILLA",
      PACIENTE: "FELIPE MARDONES",
      RUT: "1547423-6",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "11:30",
      ESPECIALISTA: "CECILIA BUDNIK",
      PACIENTE: "DIEGO MARRE",
      RUT: "16554741-K",
      PREVISION: "FONASA",
   },
   {
      HORA: "12:00",
      ESPECIALISTA: "ARTURO CAVAGNARO",
      PACIENTE: "CECILIA MENDEZ",
      RUT: "9747535-8",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "12:30",
      ESPECIALISTA: "ANDRES KANACRI",
      PACIENTE: "MARCIAL SUAZO",
      RUT: "11254785-5",
      PREVISION: "ISAPRE",
   },
]
const dental = [
   {
      HORA: "8:30",
      ESPECIALISTA: "ANDREA ZUÑIGA",
      PACIENTE: "MARCELA RETAMAL",
      RUT: "11123425-6",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "11:00",
      ESPECIALISTA: "MARIA PIA ZAÑARTU",
      PACIENTE: "ANGEL MUÑOZ",
      RUT: "9878789-2",
      PREVISION: "ISAPRE",
   },
   {
      HORA: "11:30",
      ESPECIALISTA: "SCARLETT WITTING",
      PACIENTE: "MARIO KAST",
      RUT: "7998789-5",
      PREVISION: "FONASA",
   },
   {
      HORA: "13:00",
      ESPECIALISTA: "FRANCISCO VON TEUBER",
      PACIENTE: "KARIN FERNANDEZ",
      RUT: "18887662-K",
      PREVISION: "FONASA",
   },
   {
      HORA: "13:30",
      ESPECIALISTA: "EDUARDO VIÑUELA",
      PACIENTE: "HUGO SANCHEZ",
      RUT: "17665461-4",
      PREVISION: "FONASA",
   },
   {
      HORA: "14:00",
      ESPECIALISTA: "RAQUEL VILLASECA",
      PACIENTE: "ANA SEPULVEDA",
      RUT: "14441281-0",
      PREVISION: "ISAPRE",
   },
]

// funcion que crea las tablas recibiento 3 argumentos, array, la clase y title
const creaTabla = (array, claseTabla, title) => {
   const tabla = document.querySelector(claseTabla)
   let col = `<caption class="fw-bold text-dark">${title}</caption>
            <tr>
               <th scope="col">HORA</th>
               <th scope="col">ESPECIALISTA</th>
               <th scope="col">PACIENTE</th>
               <th scope="col">RUT</th>
               <th scope="col">PREVISION</th>
            </tr>`
   for (i = 0; i < array.length; i++) {
      const row = `<tr>
            <td>${array[i].HORA}</td>
            <td>${array[i].ESPECIALISTA}</td>
            <td>${array[i].PACIENTE}</td>
            <td>${array[i].RUT}</td>
            <td>${array[i].PREVISION}</td>
         <tr>`
      col = col + row
      tabla.innerHTML = col
   }
}

// creando las tablas para radiologia, traumatologia y dental
creaTabla(radiologia, ".table1", "Radiologia")
creaTabla(traumatologia, ".table2", "Traumatologia")
creaTabla(dental, ".table3", "Dental")

// funcion que escribe al final de cada tabla la primera y ultima atencion de cada array. Recibe 2 argumentos, la clase para aplicar el texto y el arrray.
const atencion = (clase, array) => {
   const texto = document.querySelector(clase)
   texto.innerHTML = `Primera atencion: ${array[0].PACIENTE} - ${array[0].PREVISION} | Ultima atencion: ${array[array.length - 1].PACIENTE} - ${array[array.length - 1].PREVISION}`
}

// escribiendo cual fue la primera y ultima atencion en cada array
atencion(".text1", radiologia)
atencion(".text2", traumatologia)
atencion(".text3", dental)



// const texto = document.querySelector("p")
// texto.innerHTML = `Primera atencion: ${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION} | Ultima atencion: ${radiologia[radiologia.length - 1].PACIENTE} - ${radiologia[radiologia.length - 1].PREVISION}`


