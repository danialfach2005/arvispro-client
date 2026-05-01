import { Lead } from "../entities/types";
import { ILeadRepository, IFinancialAnalysisAgent } from "../repositories/interfaces";

export class AnalyzeLeadFinancialsUseCase {
  constructor(
    private leadRepository: ILeadRepository,
    private financialAgent: IFinancialAnalysisAgent
  ) {}

  async execute(leadId: string, industryMultiplier: number = 5.0): Promise<Lead> {
    const lead = await this.leadRepository.getLeadById(leadId);
    if (!lead || !lead.financialData) {
      throw new Error("Lead or financial data not found");
    }

    const valuation = await this.financialAgent.generateValuation(
      lead.financialData.ebitda,
      industryMultiplier
    );

    const riskScore = await this.financialAgent.riskScoring(lead.financialData);

    const updatedLead = await this.leadRepository.updateLead(leadId, {
      financialData: {
        ...lead.financialData,
        valuation,
      },
      status: riskScore > 70 ? "QUALIFIED" : "CONTACTED",
    });

    return updatedLead;
  }
}
