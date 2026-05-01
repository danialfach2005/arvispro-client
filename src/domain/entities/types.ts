export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "CLOSED";
  financialData?: FinancialData;
  createdAt: Date;
  updatedAt: Date;
}

export interface FinancialData {
  revenue: number;
  ebitda: number;
  debt: number;
  valuation?: number;
}

export interface User {
  id: string;
  email: string;
  role: "ADMIN" | "ADVISOR" | "CLIENT";
}
