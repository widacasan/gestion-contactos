/* Definición de la clase Contacto */
class Contacto {
  constructor(
    public id: string,
    public nombre: string,
    public telefono: string,
    public direccion: string,
    public email: string
  ) {}
}

export default Contacto;
