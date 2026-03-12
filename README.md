# Página Odontológica 

Este repositorio contiene la aplicación web de la clínica odontológica desarrollada con **React**, **TypeScript** y **Vite**. Está diseñada como una landing page informativa para mostrar servicios, testimonios y facilitar el contacto con los pacientes.

---

## Tecnologías principales

- **React 18** con JSX/TSX
- **TypeScript** para tipado estático
- **Vite** como empaquetador y servidor de desarrollo
- **Tailwind CSS** para estilos utilitarios
- **ESLint** y **Prettier** para calidad de código


## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Pagina_odontologica.git
   cd Pagina_odontologica/clinica
   ```
2. Instala dependencias:
   ```bash
   npm install
   # o yarn / pnpm
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Accede a `http://localhost:5173` en el navegador.


## Estructura del proyecto

```
clinica/
├── public/          # Archivos estáticos (favicon, imágenes)
├── src/
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes reutilizables
│   ├── styles/      # CSS globales
│   └── main.tsx     # Punto de entrada
└── vite.config.ts   # Configuración de Vite
```


## Componentes destacados

- `Navbar`, `Hero`, `About`, `Services`, `Testimonials`, `Contact`, `Footer`
- Carpeta `components/ui` incluye utilidades y componentes de diseño (botones, formularios, menús, etc.)


## Uso y desarrollo

- Añade o modifica secciones en `src/components` según requieras.
- Utiliza el sistema de componentes de la carpeta `ui` para mantener consistencia visual.
- Ejecuta `npm run build` para generar la versión de producción.
