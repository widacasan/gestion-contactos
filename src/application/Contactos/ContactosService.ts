import Contacto from "../../domain/Contactos/Contacto";
import LocalStorageService from "../../infrastructure/LocalStorage/LocalStorageService";

class ContactosService {
  private localStorageService: LocalStorageService;

  constructor() {
    this.localStorageService = new LocalStorageService();
  }

  // Obtener la lista de contactos desde el LocalStorage
  obtenerContactos(): Contacto[] {
    const contactosStr = this.localStorageService.obtenerItem("contactos");
    const contactos: Contacto[] = contactosStr ? JSON.parse(contactosStr) : [];
    return contactos;
  }

  // Agregar un nuevo contacto al LocalStorage
  agregarContacto(contacto: Contacto): void {
    const contactos = this.obtenerContactos();
    contactos.push(contacto);
    this.localStorageService.guardarItem(
      "contactos",
      JSON.stringify(contactos)
    );
  }

  // Editar un contacto en el LocalStorage
  editarContacto(id: string, nuevoContacto: Contacto): void {
    const contactos = this.obtenerContactos();
    const indice = contactos.findIndex((c) => c.id === id);

    if (indice !== -1) {
      contactos[indice] = nuevoContacto;
      this.localStorageService.guardarItem(
        "contactos",
        JSON.stringify(contactos)
      );
    }
  }

  // Eliminar un contacto del LocalStorage
  eliminarContacto(id: string): void {
    const contactos = this.obtenerContactos();
    const nuevosContactos = contactos.filter((c) => c.id !== id);
    this.localStorageService.guardarItem(
      "contactos",
      JSON.stringify(nuevosContactos)
    );
  }
}

export default ContactosService;
