
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/database';
import Employee from '../../employee/models/EmployeeModel';

export class Attendance extends Model {
    public id!: number;
    public employeeId!: number;
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
    entryTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    durationMinutes: {
        type: DataTypes.NUMBER,
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