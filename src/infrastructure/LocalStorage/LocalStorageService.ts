// src/infrastructure/LocalStorage/LocalStorageService.ts
class LocalStorageService {
  obtenerItem(key: string): string | null {
    // Lógica para obtener un elemento del LocalStorage
    return localStorage.getItem(key);
  }

  guardarItem(key: string, valor: string): void {
    // Lógica para guardar un elemento en el LocalStorage
    localStorage.setItem(key, valor);
  }

  eliminarItem(key: string): void {
    // Lógica para eliminar un elemento del LocalStorage
    localStorage.removeItem(key);
  }
}

export default LocalStorageService;