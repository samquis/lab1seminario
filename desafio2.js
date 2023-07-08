
const personaMasJoven = (personas) => {
    let personaJoven = personas[0];
    for (const persona of personas) {
      if (persona.edad < personaJoven.edad) {
        personaJoven = persona;
      }
    }
    // Devolvemos la persona más joven
    return personaJoven;
  }
  
  // Ejemplo de uso de la función con entrada de datos
  const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 27 },
    { nombre: 'María', edad: 22 }
  ];
  const personaJoven = personaMasJoven(personas);
  console.log(`La persona más joven es ${personaJoven.nombre}, con ${personaJoven.edad} años.`);
  console.log(personaJoven);