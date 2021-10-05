// Formato JSON

const paciente = {
    nombre: 'Juan',
    apellidos: 'Pérez López',
    edad: 40,
    alta: false,
    direccion: {
        calle: 'Gran Vía, 80', // Indicar número
        localidad: 'Madrid',
    },
    valores: [11.2, 45.6, 87,]
}

const pacienteEnJSON = JSON.stringify(paciente); // Parsear de Objeto JS a JSON
console.log(pacienteEnJSON);

const pacienteEnJS = JSON.parse(pacienteEnJSON);  // Parear de JSON a Objeto JS
console.log(pacienteEnJS.calle);
