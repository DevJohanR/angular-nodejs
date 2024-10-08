# 🌟 Angular-NodeJS CRUD Productos: Johan Manuel Riascos Hernandez ANALISIS Y DESARROLLO DE SOFTWARE. (2721397) 🌟

¡Bienvenido al proyecto **Angular-NodeJS CRUD Productos**! Este es un proyecto full-stack que combina Angular en el frontend con Node.js y Express en el backend para crear una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) de productos.

## 🚀 Tecnologías Utilizadas

- **Frontend**: Angular, TypeScript, HTML, CSS, Bootstrap, Materialize CSS, ngx-toastr
- **Backend**: Node.js, Express, Sequelize, MySQL
- **Base de Datos**: MySQL

## 📝 Características

- **Agregar, Editar, Eliminar Productos**: Gestiona fácilmente productos con una interfaz amigable.
- **Notificaciones**: Muestra notificaciones de éxito o error utilizando ngx-toastr.
- **Componentes Reutilizables**: Utiliza componentes como Navbar y Progress Bar.
- **Gestión de Rutas**: Configuración de rutas para navegación fácil entre diferentes vistas.
- **Estilos Modernos**: Utilización de Materialize CSS para botones y tablas, mejorando la experiencia visual y de usuario.

## 🎨 Uso de Materialize CSS

Materialize CSS se utiliza en este proyecto para proporcionar un diseño moderno y atractivo a la interfaz de usuario. Se ha aplicado principalmente a:

- **Botones**: Los botones de la aplicación, como "Agregar Producto", "Editar" y "Eliminar", utilizan las clases de Materialize (`btn`, `waves-effect`, `waves-light`, `black`, `grey darken-2`), que proporcionan efectos de onda al hacer clic y estilos modernos.
- **Tablas**: Las tablas para listar productos utilizan clases como `highlight` y `centered` de Materialize, que mejoran la legibilidad y el estilo visual de los datos mostrados.
- **Formularios**: En los formularios de agregar y editar productos, Materialize se utiliza para estilizar los botones de "Aceptar" y "Volver", proporcionando una experiencia de usuario más coherente y atractiva.

## 📂 Estructura del Proyecto

```bash
angular-node/
├── client/                   # Proyecto Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Componentes Angular (Navbar, ListProducts, etc.)
│   │   │   ├── shared/       # Componentes compartidos (ProgressBar)
│   │   │   ├── services/     # Servicios Angular (ProductService)
│   │   │   └── app.module.ts # Módulo principal de Angular
│   │   └── environments/     # Archivos de entorno
│   └── ...
├── server/                   # Proyecto Node.js
│   ├── src/
│   │   ├── controllers/      # Controladores para manejar lógica de negocio
│   │   ├── db/               # Configuración de la base de datos (Sequelize)
│   │   ├── models/           # Modelos Sequelize
│   │   ├── routes/           # Rutas API
│   │   └── server.ts         # Configuración del servidor Express
│   └── ...
└── README.md                 # Documentación del proyecto
