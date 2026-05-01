export interface AIAgentConfig {
  agentId: string;
  role: "financial_analyst" | "strategy_consultant" | "mna_advisor";
  capabilities: string[];
}

export interface AgentResponse {
  content: string;
  confidence: number;
  sources?: string[];
  suggestedActions?: string[];
}

export class AIAgent {
  constructor(public config: AIAgentConfig) {}

  public initialize(): void {
    console.log(`[AI Agent] Initializing ${this.config.role} agent...`);
    // Initialize model context protocol here
  }
}
