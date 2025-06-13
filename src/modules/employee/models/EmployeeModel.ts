import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../config/database';

// Define los atributos del empleado
interface EmployeeAttributes {
    id: number;
    fullName: string;
    dni: string;
    email: string;
    position?: string;
    hireDate?: Date;
    isActive?: boolean;
}

// Define cuáles atributos son opcionales para la creación (p. ej. id, timestamps)
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id' | 'position' | 'hireDate' | 'isActive'> { }

// Modelo Sequelize que implementa esos atributos
class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    public id!: number;
    public fullName!: string;
    public dni!: string;
    public email!: string;
    public position?: string;
    public hireDate?: Date;
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

export default Employee;
export type { EmployeeAttributes, EmployeeCreationAttributes };
