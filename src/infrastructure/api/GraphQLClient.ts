export class GraphQLClient {
  private endpoint: string;
  private token: string | null = null;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public setToken(token: string) {
    this.token = token;
  }

  public async query<T>(query: string, variables?: Record<string, any>): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({ query, variables }),
      });

      const json = await response.json();

      if (json.errors) {
        throw new Error(json.errors.map((e: any) => e.message).join(", "));
      }

      return json.data as T;
    } catch (error) {
      console.error("[GraphQLClient] Error:", error);
      throw error;
    }
  }

  public async mutate<T>(mutation: string, variables?: Record<string, any>): Promise<T> {
    // Mutations use the exact same transport mechanism
    return this.query<T>(mutation, variables);
  }
}

// Singleton instance for the application
export const graphQLClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_ENDPOINT || "https://api.arvispro.com/graphql"
);
