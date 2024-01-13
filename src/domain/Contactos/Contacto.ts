/**
 * Clase que representa un contacto.
 *
 * @class Contacto
 */
class Contacto {
  /**
   * Crea una instancia de la clase Contacto.
   *
   * @constructor
   * @param {string} id - El identificador único del contacto.
   * @param {string} nombre - El nombre del contacto.
   * @param {string} telefono - El número de teléfono del contacto.
   * @param {string} direccion - La dirección del contacto.
   * @param {string} email - La dirección de correo electrónico del contacto.
   */
  constructor(
    public id: string,
    public nombre: string,
    public telefono: string,
    public direccion: string,
    public email: string
  ) {}
}

export default Contacto;
