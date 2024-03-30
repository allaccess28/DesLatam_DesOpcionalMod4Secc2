class Propietario {
  constructor(nombreProp, direccion, telefono) {
    this._nombreProp = nombreProp;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es ${this._nombreProp}.El domicilio es ${this._direccion}, y el Número de telefónico de contacto: ${this._telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombreProp, direccion, telefono, tipo) {
    super(nombreProp, direccion, telefono);
    this._tipo = tipo;
  }
  getTipo() {
    return `El tipo de animal es un ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombreProp, direccion, telefono, tipo, nomMascota, enfermedad) {
    super(nombreProp, direccion, telefono, tipo);
    this._nomMascota = nomMascota;
    this._enfermedad = enfermedad;
  }
  getNombre() {
    return this._nomMascota;
  }
  setNombre(nomMascota) {
    this._nomMascota = nomMascota;
  }
  getEnfermedad() {
    return this._enfermedad;
  }
  setEnfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const idPropietario = document.getElementById("propietario");
  const idDireccion = document.getElementById("direccion");
  const idTelefono = document.getElementById("telefono");
  const idMascota = document.getElementById("nombreMascota");
  const idTipo = document.getElementById("tipo");

  const idEnfermedad = document.getElementById("enfermedad");
  const resultado = document.getElementById("resultado");

  const masc1 = new Mascota(
    idPropietario.value,
    idDireccion.value,
    idTelefono.value,
    idTipo.value,
    idMascota.value,
    idEnfermedad.value
  );

  console.log(masc1);
  resultado.innerHTML = `
    
    <ul>
    <li>${masc1.datosPropietario()}</li>
    <li>${masc1.getTipo()}, mientras que el nombre de la mascota es: ${masc1.getNombre()} y la enfermedad es: ${masc1.getEnfermedad()}.`;
});
