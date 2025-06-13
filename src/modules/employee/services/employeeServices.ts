import Employee, { EmployeeCreationAttributes } from '../models/EmployeeModel';

export async function createEmployee(data: EmployeeCreationAttributes) {
    return await Employee.create(data);
}

export async function getEmployeeById(id: number) {
    const employee = await Employee.findByPk(id);
    if (!employee) throw new Error('Empleado no encontrado');
    return employee;
}

export async function getAllEmployees() {
    return await Employee.findAll();
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
