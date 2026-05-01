export interface Deal {
  id: string;
  clientId: string;
  type: "M&A" | "ADVISORY" | "STRATEGY";
  value: number;
  status: "PENDING" | "ACTIVE" | "CLOSED";
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  role: "ADMIN" | "ADVISOR" | "CLIENT";
}
