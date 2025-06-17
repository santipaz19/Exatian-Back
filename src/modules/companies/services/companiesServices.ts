import Company, { CompanyCreationAttributes } from '../models/CompaniesModel';
import Employee from '../../employee/models/EmployeeModel';


export async function createCompany(companyData: CompanyCreationAttributes) {
    const { name, phone, email, taxId, password } = companyData;

    // Validar que no exista una empresa con el mismo email
    const existingCompany = await Company.findOne({ where: { email } });
    if (existingCompany) {
        throw new Error('Ya existe una empresa con este email');
    }

    const company = await Company.create({
        name,
        phone,
        email,
        taxId,
        password
    });

    return company;
}

export async function getAllCompanies() {
    const companies = await Company.findAll({
        where: { isActive: true },
        // Incluir solo el conteo de empleados, no todos los empleados
        attributes: {
            include: [
                'name', 'id', 'taxId']

        },
        order: [['name', 'ASC']],
    });

    return companies;
}



export async function updateCompany(id: number, updateData: CompanyCreationAttributes) {
    const company = await Company.findOne({
        where: { id, isActive: true }
    });

    if (!company) {
        return null;
    }

    // Si se está actualizando el taxId, validar que no exista otro con el mismo
    if (updateData.taxId && updateData.taxId !== company.taxId) {
        const existingCompany = await Company.findOne({
            where: { taxId: updateData.taxId }
        });
        if (existingCompany) {
            throw new Error('Ya existe una empresa con este número de identificación fiscal');
        }
    }

    await company.update(updateData);
    return company;
}

export async function deleteCompany(id: number) {
    const company = await Company.findOne({
        where: { id, isActive: true }
    });

    if (!company) {
        return false;
    }

    // Soft delete
    await company.update({ isActive: false });
    return true;
}


export async function loginCompany(email: string, password: string) {
    // Buscar la empresa por taxId
    const company = await Company.findOne({
        where: {
            email,
            isActive: true
        }
    });

    if (!company) {
        throw new Error('Credenciales inválidas');
    }

    // Verificar la contraseña
    const isPasswordValid = password === company.password

    if (!isPasswordValid) {
        throw new Error('Credenciales inválidas');
    }

    // Retornar la empresa sin la contraseña
    const { password: _, ...companyWithoutPassword } = company.toJSON();
    return companyWithoutPassword;
}