#!/bin/bash

# Códigos para los archivos
cat <<EOL > src/adapters/Contactos/Contactos.tsx
import React from 'react';

const Contactos = () => {
  return (
    <div>
      <h1>Contactos Component</h1>
      {/* Aquí irá tu lógica y JSX para listar contactos */}
    </div>
  );
};

export default Contactos;
EOL

cat <<EOL > src/application/Contactos/ContactosService.ts
class ContactosService {
  // Aquí irá tu lógica para manejar operaciones relacionadas con contactos
}

export default ContactosService;
EOL

cat <<EOL > src/domain/Contactos/Contacto.ts
class Contacto {
  constructor(
    public id: number,
    public nombre: string,
    public telefono: string,
    public direccion: string,
    public email: string
  ) {}
}

export default Contacto;
EOL

cat <<EOL > src/infrastructure/LocalStorage/LocalStorageService.ts
class LocalStorageService {
  // Aquí irá tu lógica para interactuar con el LocalStorage
}

export default LocalStorageService;
EOL

cat <<EOL > src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import Contactos from './adapters/Contactos/Contactos';

ReactDOM.render(
  <React.StrictMode>
    <Contactos />
  </React.StrictMode>,
  document.getElementById('root')
);
EOL

cat <<EOL > src/reportWebVitals.ts
import { reportWebVitals } from './adapters/Contactos/Contactos';
reportWebVitals();
EOL

echo "Códigos actualizados correctamente en los archivos."
