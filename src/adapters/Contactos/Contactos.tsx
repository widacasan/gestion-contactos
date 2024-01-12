import React, { useState, useEffect } from 'react';
import Contacto from '../../domain/Contactos/Contacto';
import ContactosService from '../../application/Contactos/ContactosService';
import { v4 as uuidv4 } from 'uuid';

const Contactos = () => {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [nuevoContacto, setNuevoContacto] = useState<Contacto>({
    id: '',
    nombre: '',
    telefono: '',
    direccion: '',
    email: ''
  });
  const [error, setError] = useState<string | null>(null);
  const contactosService = new ContactosService();

  useEffect(() => {
    // Al cargar el componente, obtener la lista de contactos
    const contactosObtenidos = contactosService.obtenerContactos();
    setContactos(contactosObtenidos);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoContacto({
      ...nuevoContacto,
      [e.target.name]: e.target.value
    });
    setError(null); // Limpiar el mensaje de error al cambiar un campo
  };

  const validarCampos = (): boolean => {
    if (!nuevoContacto.nombre || !nuevoContacto.email) {
      setError('Nombre y Email son campos obligatorios.');
      return false;
    }

    // Validar formato de Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(nuevoContacto.email)) {
      setError('El formato del Email no es válido.');
      return false;
    }

    return true;
  };

  const agregarContacto = () => {
    if (validarCampos()) {
      const nuevoContactoConId: Contacto = {
        ...nuevoContacto,
        id: uuidv4()
      };
      contactosService.agregarContacto(nuevoContactoConId);
      setContactos(contactosService.obtenerContactos());
      setNuevoContacto({
        id: '',
        nombre: '',
        telefono: '',
        direccion: '',
        email: ''
      });
    }
  };

  const editarContacto = (id: string) => {
    const contactoAEditar = contactos.find((c) => c.id === id);
    if (contactoAEditar) {
      // Lógica para editar el contacto
      const nuevoNombre = prompt('Ingrese el nuevo nombre:', contactoAEditar.nombre);
      const nuevoTelefono = prompt('Ingrese el nuevo teléfono:', contactoAEditar.telefono);
      const nuevaDireccion = prompt('Ingrese la nueva dirección:', contactoAEditar.direccion);
      const nuevoEmail = prompt('Ingrese el nuevo email:', contactoAEditar.email);

      const nuevoContacto: Contacto = {
        ...contactoAEditar,
        nombre: nuevoNombre || contactoAEditar.nombre,
        telefono: nuevoTelefono || contactoAEditar.telefono,
        direccion: nuevaDireccion || contactoAEditar.direccion,
        email: nuevoEmail || contactoAEditar.email
      };

      contactosService.editarContacto(id, nuevoContacto);
      setContactos(contactosService.obtenerContactos());
    }
  };

  const eliminarContacto = (id: string) => {
    // Lógica para eliminar el contacto
    if (window.confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      contactosService.eliminarContacto(id);
      setContactos(contactosService.obtenerContactos());
    }
  };

  return (
    <div>
      <h1>Contactos Component</h1>
      <div>
        <h2>Agregar Nuevo Contacto</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoContacto.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={nuevoContacto.telefono}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={nuevoContacto.direccion}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={nuevoContacto.email}
          onChange={handleInputChange}
        />
        <button onClick={agregarContacto}>Agregar Contacto</button>
      </div>
      <h2>Listado de Contactos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <tr key={contacto.id}>
              <td>{contacto.id}</td>
              <td>{contacto.nombre}</td>
              <td>{contacto.telefono}</td>
              <td>{contacto.direccion}</td>
              <td>{contacto.email}</td>
              <td>
                <button onClick={() => editarContacto(contacto.id)}>Editar</button>
                <button onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contactos;
