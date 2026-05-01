import { Deal } from "../domain/Deal";

export interface IDealRepository {
  getDeals(): Promise<Deal[]>;
  createDeal(deal: Omit<Deal, "id" | "createdAt">): Promise<Deal>;
}

export class AnalyzeDealUseCase {
  constructor(private dealRepo: IDealRepository) {}

  async execute(dealData: Omit<Deal, "id" | "createdAt">): Promise<Deal> {
    // Business logic isolated from framework
    if (dealData.value < 0) throw new Error("Invalid deal value");
    return this.dealRepo.createDeal(dealData);
  }
}
