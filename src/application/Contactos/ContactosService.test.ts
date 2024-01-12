import Contacto from "../../domain/Contactos/Contacto";
import LocalStorageService from "../../infrastructure/LocalStorage/LocalStorageService";
import ContactosService from "./ContactosService";

// Mock de LocalStorageService para evitar interacciones reales con el almacenamiento local
jest.mock("../../infrastructure/LocalStorage/LocalStorageService");

describe("ContactosService", () => {
  let contactosService: ContactosService;

  beforeEach(() => {
    contactosService = new ContactosService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Obtener contactos desde LocalStorage
  it("should obtain contacts from LocalStorage", () => {
    const mockedContactos: Contacto[] = [
      {
        id: "1",
        nombre: "John Doe",
        telefono: "123456789",
        direccion: "123 Main St",
        email: "john@example.com",
      },
      // Agrega más contactos según sea necesario
    ];

    // Mock de la función obtenerItem de LocalStorageService
    (
      LocalStorageService.prototype.obtenerItem as jest.Mock
    ).mockReturnValueOnce(JSON.stringify(mockedContactos));

    const obtainedContactos = contactosService.obtenerContactos();

    expect(obtainedContactos).toEqual(mockedContactos);
    expect(LocalStorageService.prototype.obtenerItem).toHaveBeenCalledWith(
      "contactos"
    );
  });

  // Agregar un nuevo contacto a LocalStorage
  it("should add a new contact to LocalStorage", () => {
    const newContact: Contacto = {
      id: "2",
      nombre: "Jane Doe",
      telefono: "987654321",
      direccion: "456 Oak St",
      email: "jane@example.com",
    };

    // Mock de la función obtenerItem de LocalStorageService
    (
      LocalStorageService.prototype.obtenerItem as jest.Mock
    ).mockReturnValueOnce(JSON.stringify([]));

    contactosService.agregarContacto(newContact);

    expect(LocalStorageService.prototype.guardarItem).toHaveBeenCalledWith(
      "contactos",
      JSON.stringify([newContact])
    );
  });

  // Editar un contacto existente en LocalStorage
  it("should edit an existing contact in LocalStorage", () => {
    const existingContact: Contacto = {
      id: "3",
      nombre: "Alice Smith",
      telefono: "555555555",
      direccion: "789 Pine St",
      email: "alice@example.com",
    };
    const updatedContact: Contacto = {
      ...existingContact,
      nombre: "Alice Johnson",
    };

    // Mock de la función obtenerItem de LocalStorageService
    (
      LocalStorageService.prototype.obtenerItem as jest.Mock
    ).mockReturnValueOnce(JSON.stringify([existingContact]));

    contactosService.editarContacto(existingContact.id, updatedContact);

    expect(LocalStorageService.prototype.guardarItem).toHaveBeenCalledWith(
      "contactos",
      JSON.stringify([updatedContact])
    );
  });

  // Eliminar un contacto existente de LocalStorage
  it("should delete an existing contact from LocalStorage", () => {
    const contactToDelete: Contacto = {
      id: "4",
      nombre: "Bob Brown",
      telefono: "777777777",
      direccion: "101 Maple St",
      email: "bob@example.com",
    };

    // Mock de la función obtenerItem de LocalStorageService
    (
      LocalStorageService.prototype.obtenerItem as jest.Mock
    ).mockReturnValueOnce(JSON.stringify([contactToDelete]));

    contactosService.eliminarContacto(contactToDelete.id);

    expect(LocalStorageService.prototype.guardarItem).toHaveBeenCalledWith(
      "contactos",
      JSON.stringify([])
    );
  });
});
