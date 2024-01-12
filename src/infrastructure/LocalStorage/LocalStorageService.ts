class LocalStorageService {
  // Método para obtener un elemento del LocalStorage por clave
  obtenerItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Método para guardar un elemento en el LocalStorage
  guardarItem(key: string, valor: string): void {
    localStorage.setItem(key, valor);
  }

  // Método para eliminar un elemento del LocalStorage por clave
  eliminarItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export default LocalStorageService;
