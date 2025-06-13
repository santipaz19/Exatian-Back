import app from './app';
import sequelize from './config/database';

const PORT = 5000;

sequelize.sync({ force: true })
    .then(() => {
        console.log('Base de datos sincronizada con force: true (tablas recreadas)');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error sincronizando la base de datos:', err);
    });


