import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../config/database';

interface CompanyAttributes {
    id: number;
    name: string;
    phone?: string;
    email?: string;
    taxId: string; // RUT o identificación fiscal
    password: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id' | 'phone' | 'email' | 'isActive'> { }

class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
    public id!: number;
    public name!: string;
    public phone?: string;
    public email?: string;
    public taxId!: string;
    public password!: string;
    public isActive!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },
        taxId: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [8, 255], // Mínimo 8 caracteres
            },
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    },
    {
        sequelize,
        tableName: 'companies',
        timestamps: true,
    }
);

export default Company;