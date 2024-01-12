// src/application/Contactos/ContactosService.ts
import Contacto from '../../domain/Contactos/Contacto';
import LocalStorageService from '../../infrastructure/LocalStorage/LocalStorageService';

class ContactosService {
  private localStorageService: LocalStorageService;

  constructor() {
    this.localStorageService = new LocalStorageService();
  }

  obtenerContactos(): Contacto[] {
    // Lógica para obtener contactos desde el LocalStorage
    const contactosStr = this.localStorageService.obtenerItem('contactos');
    const contactos: Contacto[] = contactosStr ? JSON.parse(contactosStr) : [];
    return contactos;
  }

  agregarContacto(contacto: Contacto): void {
    // Lógica para agregar un nuevo contacto al LocalStorage
    const contactos = this.obtenerContactos();
    contactos.push(contacto);
    this.localStorageService.guardarItem('contactos', JSON.stringify(contactos));
  }

  editarContacto(id: string, nuevoContacto: Contacto): void {
    // Lógica para editar un contacto en el LocalStorage
    const contactos = this.obtenerContactos();
    const indice = contactos.findIndex((c) => c.id === id);

    if (indice !== -1) {
      contactos[indice] = nuevoContacto;
      this.localStorageService.guardarItem('contactos', JSON.stringify(contactos));
    }
  }

  eliminarContacto(id: string): void {
    // Lógica para eliminar un contacto del LocalStorage
    const contactos = this.obtenerContactos();
    const nuevosContactos = contactos.filter((c) => c.id !== id);
    this.localStorageService.guardarItem('contactos', JSON.stringify(nuevosContactos));
  }
}

export default ContactosService;
