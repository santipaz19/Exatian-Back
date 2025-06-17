import app from './app';
import sequelize from './config/database';
import { createMockupCompanies } from './modules/companies/seeds/seedCompanies';

const PORT = 5000;

sequelize.sync({ force: true })
    .then(() => {
        createMockupCompanies()
        console.log('Base de datos sincronizada con force: true (tablas recreadas)');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error sincronizando la base de datos:', err);
    });


