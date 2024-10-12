import { Sequelize } from 'sequelize';

// Configuración de Sequelize con pool de conexiones y reintentos
const sequelize = new Sequelize('u491711087_almacen', 'u491711087_admin123', 'F*7c4>?xRrc', {
    host: 'srv1180.hstgr.io',
    dialect: 'mysql',
    pool: {
        max: 20,  // Aumentamos el número máximo de conexiones activas en el pool
        min: 5,   // Mantener un número mínimo de conexiones activas en el pool
        acquire: 60000, // Tiempo máximo de espera para adquirir una conexión (60 segundos)
        idle: 5000,  // Tiempo máximo que una conexión puede estar inactiva antes de ser liberada (5 segundos)
    },
    dialectOptions: {
        connectTimeout: 60000 // Tiempo máximo de espera para conectarse (60 segundos)
    },
    retry: {
        match: [
            /ECONNREFUSED/, // Error de conexión rechazada
            /ETIMEDOUT/,    // Error de tiempo de espera agotado
            /EHOSTUNREACH/, // Host inalcanzable
        ],
        max: 5, // Número máximo de reintentos
    },
});

// Exportamos sequelize para que pueda ser usado en otras partes de la aplicación
export default sequelize;
