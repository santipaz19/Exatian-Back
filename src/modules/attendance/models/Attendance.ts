
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/database';
import Employee from '../../employee/models/EmployeeModel';
import Company from '../../companies/models/CompaniesModel';

export class Attendance extends Model {
    public id!: number;
    public employeeId!: number;
    public companyId?: number;
    public entryTime!: Date;
    public exitTime!: Date | null;
    public durationMinutes!: number | null;
}

Attendance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    entryTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    durationMinutes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'attendances',
    timestamps: false,
});

Attendance.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee',
    onDelete: 'CASCADE',
});

Employee.hasMany(Attendance, {
    foreignKey: 'employeeId',
    as: 'attendances',
    onDelete: 'CASCADE',
});

Attendance.belongsTo(Company, {
    foreignKey: 'companyId',
    as: 'company',
    onDelete: 'CASCADE',
});

Company.hasMany(Attendance, {
    foreignKey: 'companyId',
    as: 'attendances',
    onDelete: 'CASCADE',
});
