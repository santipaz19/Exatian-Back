import Company, { CompanyCreationAttributes } from "../models/CompaniesModel";


export const companyMockupData: CompanyCreationAttributes[] = [
    {
        name: "Tecnología Avanzada S.A.",
        phone: "+5491123456789",
        email: "tecnologia@prueba.com",
        taxId: "30-71234567-8",
        password: "tecnologia1",
        isActive: true
    },
    {
        name: "Constructora Del Sur",
        phone: "+5491187654321",
        email: "constructora@prueba.com",
        taxId: "30-65432109-7",
        password: "constructora1",
        isActive: true
    },
    {
        name: "Servicios Financieros BA",
        phone: "+5491156789012",
        email: "servicios@prueba.com",
        taxId: "30-98765432-1",
        password: "servicios1",
        isActive: false
    },
    {
        name: "Logística Rápida CABA",
        phone: "+5491134567890",
        email: "logistica@prueba.com",
        taxId: "30-11223344-5",
        password: "logistica1",
        isActive: true
    },
    {
        name: "Consultoría Empresarial Plus",
        email: "consultora@prueba.com",
        taxId: "30-55667788-9",
        password: "consultora1",
        isActive: true
    },
    {
        name: "Desarrollo Software Arg",
        phone: "+5491145678901",
        email: "desarrollo@prueba.com",
        taxId: "30-99887766-3",
        password: "prueba1",
        isActive: true
    },
    {
        name: "Importaciones del Plata",
        phone: "+5491167890123",
        email: "importaciones@prueba.com",
        taxId: "30-22334455-6",
        password: "importaciones1",
        isActive: false
    },
    {
        name: "Energía Renovable SA",
        phone: "+5491178901234",
        email: "energia@prueba.com",
        taxId: "30-44556677-8",
        password: "energia1",
        isActive: true
    }
];

export const createMockupCompanies = async () => {
    try {
        const companies = await Company.bulkCreate(companyMockupData);
        console.log(`✅ ${companies.length} empresas creadas exitosamente`);
        return companies;
    } catch (error) {
        console.error('❌ Error creando empresas mockup:', error);
        throw error;
    }
};
