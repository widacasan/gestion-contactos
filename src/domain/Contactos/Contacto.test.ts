import Contacto from "./Contacto";

describe("Contacto", () => {
  it("should create a new Contacto instance", () => {
    // Datos de ejemplo para el nuevo contacto
    const id = "1";
    const nombre = "John Doe";
    const telefono = "123456789";
    const direccion = "123 Main St";
    const email = "john@example.com";

    // Crear una nueva instancia de Contacto
    const nuevoContacto = new Contacto(id, nombre, telefono, direccion, email);

    // Verificar que los atributos se hayan asignado correctamente
    expect(nuevoContacto.id).toEqual(id);
    expect(nuevoContacto.nombre).toEqual(nombre);
    expect(nuevoContacto.telefono).toEqual(telefono);
    expect(nuevoContacto.direccion).toEqual(direccion);
    expect(nuevoContacto.email).toEqual(email);
  });
});
