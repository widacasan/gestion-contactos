# Gestión de Contactos - Aplicación React TypeScript

Este proyecto es una aplicación web de gestión de contactos desarrollada con React y TypeScript. Permite listar, agregar, editar y eliminar contactos, almacenando los datos en el LocalStorage del navegador.

Ademas,utiliza la arquitectura hexagonal (o puertos y adaptadores) para organizar y estructurar la aplicación. La arquitectura hexagonal se elige por varias razones:

### Desacoplamiento de Capas:

- Permite separar claramente las preocupaciones empresariales (lógica del dominio) de los detalles de implementación, facilitando cambios en una capa sin afectar otras.

### Pruebas Unitarias:

- Facilita la escritura de pruebas unitarias para la lógica del dominio sin depender de detalles de infraestructura específicos.

### Adaptabilidad:

- Permite una fácil adaptación a cambios en los requisitos de la aplicación sin afectar la lógica central.

### Independencia de Tecnologías:

- Facilita la integración de diferentes tecnologías, permitiendo cambios en la base de datos o la interfaz de usuario sin afectar la lógica del dominio.

### Facilita la Evolución:

- Diseñada para evolucionar con el tiempo, permitiendo cambios y adaptaciones sin afectar otras partes del sistema.

### Claridad en las Responsabilidades:

- División clara de la aplicación en capas con responsabilidades específicas, mejorando la comprensibilidad y mantenibilidad del código.

Esta arquitectura proporciona flexibilidad, mantenibilidad y adaptabilidad a medida que la aplicación evoluciona, centrando cada capa en tareas específicas y facilitando la colaboración entre diferentes tecnologías.

Para ejecutar la aplicación, sigue las instrucciones detalladas a continuación.

## Funcionalidades

- Listar contactos en una tabla.
- Agregar nuevos contactos con validación de campos.
- Editar la información de un contacto existente.
- Eliminar contactos.
- Almacenar datos en el LocalStorage.
- Validar que Id, Nombre y Email son obligatorios, y que el Email tenga el formato xxx@xx.xxx.

## Cómo Ejecutar la Aplicación

### Requisitos Previos

#### Versiones Utilizadas

Este proyecto está configurado con las siguientes versiones de Node.js y React:

- **Node.js:** 21.4.0
- **React:** 18.2.0
- **npm:** 10.2.4

Asegúrate de tener estas versiones instaladas en tu entorno antes de ejecutar las pruebas unitarias.

1. **Clona el Repositorio:**

   ```bash
   git clone https://github.com/widacasan/gestion-contactos.git

   ```

2. **Ingresa al Directorio del Proyecto:**

   ```bash
   cd gestion-contactos

   ```

3. **Intala dependencias:**

   ```bash
   npm install

   ```

4. **Ejecuta la aplicacion**

   ```bash
   npm start
   ```

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

# Pruebas Unitarias

A continuación se presentan los comandos para ejecutar las pruebas unitarias de los archivos especificados:

## Contactos.test.tsx

Para ejecutar las pruebas unitarias de Contactos, utiliza el siguiente comando:

```bash
npm test Contactos.test.tsx
```

## ContactosService.test.ts

Para ejecutar las pruebas unitarias de ContactosService, utiliza el siguiente comando:

```bash
npm test ContactosService.test.ts
```

## Contacto.test.ts

Para ejecutar las pruebas unitarias de Contacto, utiliza el siguiente comando:

```bash
npm test Contacto.test.ts
```

## LocalStorageService.test.ts

Para ejecutar las pruebas unitarias de LocalStorageService, utiliza el siguiente comando:

```bash
npm test LocalStorageService.test.ts
```

## Contacto.test.ts

Para ejecutar las pruebas unitarias de Contacto, utiliza el siguiente comando:

```bash
npm test Contacto.test.ts
```
