import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "An error occurred.");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to connect to the server.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 border border-green-200 rounded-xl text-center">
        <CheckCircle2 size={48} className="text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. Our team will respond within 1-2 business days.
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setStatus("idle")}
          className="btn-secondary"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Contact form"
    >
      {status === "error" && (
        <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-[#7A0C0C]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="premium-input"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-[#7A0C0C]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="premium-input"
          placeholder="email@company.com"
          value={form.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Needs <span className="text-[#7A0C0C]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="premium-input min-h-[120px] resize-y"
          placeholder="Tell us about your business challenge or consulting needs..."
          value={form.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          rows={4}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={status === "loading"}
        className="btn-primary w-full mt-4"
        disabled={status === "loading"}
      >
        <Send size={16} className="mr-2 inline" />
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
