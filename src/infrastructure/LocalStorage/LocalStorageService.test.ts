import LocalStorageService from "./LocalStorageService";

describe("LocalStorageService", () => {
  beforeEach(() => {
    // Limpia el LocalStorage antes de cada prueba
    localStorage.clear();
  });

  // Prueba para almacenar y recuperar un elemento del LocalStorage
  it("should store and retrieve an item from LocalStorage", () => {
    const localStorageService = new LocalStorageService();
    const key = "testKey";
    const value = "testValue";

    // Guarda un elemento en el LocalStorage
    localStorageService.guardarItem(key, value);

    // Obtiene el elemento del LocalStorage
    const retrievedValue = localStorageService.obtenerItem(key);

    // Verifica que el valor recuperado sea igual al valor almacenado
    expect(retrievedValue).toEqual(value);
  });

  // Prueba para eliminar un elemento del LocalStorage
  it("should remove an item from LocalStorage", () => {
    const localStorageService = new LocalStorageService();
    const key = "testKey";
    const value = "testValue";

    // Guarda un elemento en el LocalStorage
    localStorageService.guardarItem(key, value);

    // Elimina el elemento del LocalStorage
    localStorageService.eliminarItem(key);

    // Verifica que el elemento haya sido eliminado
    const retrievedValue = localStorageService.obtenerItem(key);

    // Verifica que el valor recuperado sea nulo después de la eliminación
    expect(retrievedValue).toBeNull();
  });
});
