import Contacto from '../../domain/Contactos/Contacto';
import LocalStorageService from '../../infrastructure/LocalStorage/LocalStorageService';

/**
 * Servicio para la gestión de contactos almacenados en el LocalStorage.
 *
 * @class ContactosService
 */
class ContactosService {
  private localStorageService: LocalStorageService;

  /**
   * Constructor de la clase ContactosService.
   * Inicializa una instancia de LocalStorageService.
   *
   * @constructor
   */
  constructor() {
    this.localStorageService = new LocalStorageService();
  }

  /**
   * Obtiene la lista de contactos almacenados en el LocalStorage.
   *
   * @returns {Contacto[]} Lista de contactos.
   */
  obtenerContactos(): Contacto[] {
    const contactosStr = this.localStorageService.obtenerItem('contactos');
    const contactos: Contacto[] = contactosStr ? JSON.parse(contactosStr) : [];
    return contactos;
  }

  /**
   * Agrega un nuevo contacto al LocalStorage.
   *
   * @param {Contacto} contacto - El nuevo contacto a agregar.
   * @returns {void}
   */
  agregarContacto(contacto: Contacto): void {
    const contactos = this.obtenerContactos();
    contactos.push(contacto);
    this.localStorageService.guardarItem('contactos', JSON.stringify(contactos));
  }

  /**
   * Edita un contacto existente en el LocalStorage.
   *
   * @param {string} id - ID del contacto a editar.
   * @param {Contacto} nuevoContacto - Los nuevos datos del contacto.
   * @returns {void}
   */
  editarContacto(id: string, nuevoContacto: Contacto): void {
    const contactos = this.obtenerContactos();
    const indice = contactos.findIndex((c) => c.id === id);

    if (indice !== -1) {
      contactos[indice] = nuevoContacto;
      this.localStorageService.guardarItem('contactos', JSON.stringify(contactos));
    }
  }

  /**
   * Elimina un contacto del LocalStorage.
   *
   * @param {string} id - ID del contacto a eliminar.
   * @returns {void}
   */
  eliminarContacto(id: string): void {
    const contactos = this.obtenerContactos();
    const nuevosContactos = contactos.filter((c) => c.id !== id);
    this.localStorageService.guardarItem('contactos', JSON.stringify(nuevosContactos));
  }
}

export default ContactosService;
