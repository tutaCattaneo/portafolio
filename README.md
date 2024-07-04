
# Portafolio

Este es el proyecto de mi portafolio personal, que incluye información sobre mis habilidades, proyectos y contacto.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1.22 o superior)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tutaCattaneo/portafolio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd portafolio
   ```

3. Asegúrate de estar en la rama `master`:

   ```bash
   git checkout master
   ```

4. Instala las dependencias:

   Usando npm:

   ```bash
   npm install
   ```

   O usando yarn:

   ```bash
   yarn install
   ```

## Ejecución

Para ejecutar el proyecto localmente, utiliza el siguiente comando:

Usando npm:

```bash
npm run dev
```

O usando yarn:

```bash
yarn dev
```

Abre tu navegador y ve a `http://localhost:3000` para ver el proyecto en ejecución.

## Scripts

En este proyecto están disponibles los siguientes scripts:

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila el proyecto para producción.
- `start`: Inicia el servidor en modo producción.

## Estructura del Proyecto

```plaintext
.
├── public/                     # Archivos públicos (imágenes, iconos, etc.)
├── src/
│   ├── app/
│   │   ├── components/         # Componentes de React
│   │   │   ├── About.js        # Componente About
│   │   │   ├── ContactForm.js  # Componente ContactForm
│   │   │   ├── Header.js       # Componente Header
│   │   │   ├── Interests.js    # Componente Interests
│   │   ├── styles/             # Archivos de estilos CSS
│   │   │   ├── About.module.css
│   │   │   ├── ContactForm.module.css
│   │   │   ├── Header.module.css
│   │   │   ├── Home.module.css
│   │   │   ├── Interests.module.css
│   ├── favicon.ico             # Icono de la aplicación
│   ├── globals.css             # Estilos globales
│   ├── layout.js               # Componente Layout
│   ├── page.js                 # Página principal
│   ├── page.module.css         # Estilos de la página principal
├── .eslintrc.json              # Configuración de ESLint
├── .gitignore                  # Archivos a ignorar por Git
├── README.md                   # Documentación del proyecto
├── jsconfig.json               # Configuración de JavaScript
├── next.config.mjs             # Configuración de Next.js
├── package-lock.json           # Archivo de bloqueo de dependencias (npm)
├── package.json                # Archivo de configuración del proyecto
```


