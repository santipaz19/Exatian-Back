import Company from '../../companies/models/CompaniesModel';
import Employee, { EmployeeCreationAttributes } from '../models/EmployeeModel';

export async function createEmployee(data: EmployeeCreationAttributes) {
    return await Employee.create(data);
}

export async function getEmployeeById(id: number) {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new Error('Empleado no encontrado');
    return employee;
}

export async function getAllEmployees(companyId?: number) {
    const whereCondition: any = { isActive: true };

    // Si se proporciona companyId, agregarlo al filtro
    if (companyId) {
        whereCondition.companyId = companyId;
    }

    const employees = await Employee.findAll({
        where: whereCondition,
        include: [{
            model: Company,
            as: 'company',
            attributes: ['id', 'name', 'taxId'],
        }],
        order: [['fullName', 'ASC'], ['fullName', 'ASC']]
    });

    return employees;
}

export async function updateEmployee(id: number, data: Partial<EmployeeCreationAttributes>) {
    const employee = await Employee.findByPk(id);
    if (!employee) return null;
    return await employee.update(data);
}

export async function deleteEmployee(id: number) {
    const employee = await Employee.findByPk(id);
    if (!employee) return false;
    await employee.destroy();
    return true;
}
