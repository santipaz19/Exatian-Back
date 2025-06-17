import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../config/database';
import Company from '../../companies/models/CompaniesModel';

// Define los atributos del empleado
interface EmployeeAttributes {
    id: number;
    fullName: string;
    dni: string;
    email: string;
    position?: string;
    hireDate?: Date;
    companyId?: number;
    isActive?: boolean;
}

// Define cuáles atributos son opcionales para la creación (p. ej. id, timestamps)
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id' | 'position' | 'hireDate' | 'isActive' | 'companyId'> { }

// Modelo Sequelize que implementa esos atributos
class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    public id!: number;
    public fullName!: string;
    public dni!: string;
    public email!: string;
    public position?: string;
    public hireDate?: Date;
    public companyId!: number;
    public isActive?: boolean;
}

Employee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hireDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Company,
            key: 'id',
        },
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    }
}, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
});


// Definir asociaciones
Company.hasMany(Employee, { foreignKey: 'companyId', as: 'employees' });
Employee.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });


export default Employee;
export type { EmployeeAttributes, EmployeeCreationAttributes };
