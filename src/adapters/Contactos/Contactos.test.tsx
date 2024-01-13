import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contactos from "./Contactos";

/**
 * Prueba para verificar que el componente se renderiza correctamente.
 *
 * @test {rendersComponentCorrectly}
 */
test("renders component correctly", () => {
  render(<Contactos />);

  // Verifica que los elementos necesarios estén presentes en el componente renderizado
  expect(
    screen.getByText("Aplicación React TypeScript de Gestión de Contactos")
  ).toBeInTheDocument();
  expect(screen.getByText("Agregar Nuevo Contacto")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Teléfono")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Dirección")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByText("Agregar Contacto")).toBeInTheDocument();
  expect(screen.getByText("Listado de Contactos")).toBeInTheDocument();
});

/**
 * Prueba para verificar que se agrega un nuevo contacto correctamente.
 *
 * @test {addsANewContact}
 */
test("adds a new contact", () => {
  render(<Contactos />);

  // Simula la entrada de datos
  fireEvent.change(screen.getByPlaceholderText("Nombre"), {
    target: { value: "William Camacho" },
  });
  fireEvent.change(screen.getByPlaceholderText("Teléfono"), {
    target: { value: "123456789" },
  });
  fireEvent.change(screen.getByPlaceholderText("Dirección"), {
    target: { value: "123 Main St" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "john@example.com" },
  });

  // Simula el clic en el botón de agregar contacto
  fireEvent.click(screen.getByText("Agregar Contacto"));

  // Verifica que el nuevo contacto esté en la tabla
  expect(screen.getByText("William Camacho")).toBeInTheDocument();
  expect(screen.getByText("123456789")).toBeInTheDocument();
  expect(screen.getByText("123 Main St")).toBeInTheDocument();
  expect(screen.getByText("john@example.com")).toBeInTheDocument();
});
