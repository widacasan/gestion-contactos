# Gestión de Contactos - Aplicación React TypeScript

Este proyecto es una aplicación web de gestión de contactos desarrollada con React y TypeScript. Permite listar, agregar, editar y eliminar contactos, almacenando los datos en el LocalStorage del navegador.

## Funcionalidades

- Listar contactos en una tabla.
- Agregar nuevos contactos con validación de campos.
- Editar la información de un contacto existente.
- Eliminar contactos.
- Almacenar datos en el LocalStorage.
- Validar que Id, Nombre y Email son obligatorios, y que el Email tenga el formato xxx@xx.xxx.

## Cómo Ejecutar la Aplicación

### Requisitos Previos

Asegúrate de tener Node.js y npm instalados en tu máquina.

### Pasos para Ejecutar

1. **Clona el Repositorio:**

   ```bash
   git clone https://github.com/widacasan/gestion-contactos.git

2. **Ingresa al Directorio del Proyecto:**

   ```bash
   cd gestion-contactos

3. **Intala dependencias:**

   ```bash
   npm install

4. **Ejecuta la aplicacion**

   ```bash
   npm start

La aplicación se abrirá en tu navegador predeterminado.

# Estructura del Proyecto

## Descripción de Carpetas y Archivos

- **node_modules:** Este directorio contiene las dependencias del proyecto. Es generado automáticamente al ejecutar `npm install` y no debe ser modificado directamente.

- **public:** En este directorio se encuentran los archivos estáticos y el archivo principal `index.html`. Es el punto de entrada de la aplicación React.

- **src:** Directorio principal del código fuente de la aplicación.

  - **adapters:** Carpeta que contiene adaptadores que interactúan con elementos externos.

  - **Contactos:** Carpeta del módulo de contactos.

    - **Contactos.css:** Archivo que contiene los estilos específicos para el componente de contactos.

    - **Contactos.test.tsx:** Archivo que contiene las pruebas para el componente de contactos.

    - **Contactos.tsx:** Archivo principal que contiene la implementación del componente de contactos.

  - **application:** Carpeta que contiene la lógica de aplicación. 

  - **domain:** Carpeta que contiene las entidades que representan conceptos del dominio de la aplicación. Aquí se definen las estructuras de datos fundamentales.

  - **infrastructure:** Carpeta que contiene implementaciones concretas de adaptadores externos. En este caso, puede contener servicios que interactúan con el almacenamiento local (LocalStorage), por ejemplo.

- **src/index.css:** Archivo que contiene los estilos globales para la aplicación.

- **src/index.tsx:** Archivo principal que renderiza la aplicación React en el punto de entrada.

- **src/react-app-env.d.ts:** Archivo de definiciones de tipo para entornos React.

- **src/setupTests.ts:** Archivo de configuración para las pruebas.

- **.gitignore:** Archivo que especifica patrones que deben ser ignorados por Git.

- **jest.config.js:** Archivo de configuración para Jest, que se utiliza en las pruebas.

- **package-lock.json:** Archivo de bloqueo para garantizar consistencia en las dependencias del proyecto.

- **package.json:** Archivo que contiene la configuración del proyecto, incluyendo las dependencias y scripts para ejecutar comandos.

- **tsconfig.json:** Archivo de configuración para TypeScript, donde se especifican las opciones del compilador TypeScript.
