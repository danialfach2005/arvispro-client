import { Lead } from "../entities/types";

export interface ILeadRepository {
  getLeads(): Promise<Lead[]>;
  getLeadById(id: string): Promise<Lead | null>;
  createLead(lead: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead>;
  updateLead(id: string, updates: Partial<Lead>): Promise<Lead>;
}

export interface IFinancialAnalysisAgent {
  analyzeFinancials(data: any): Promise<any>;
  generateValuation(ebitda: number, industryMultiplier: number): Promise<number>;
  riskScoring(data: any): Promise<number>;
}
