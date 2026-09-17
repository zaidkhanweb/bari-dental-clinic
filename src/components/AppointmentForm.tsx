import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { business, services } from "@/config/business";
import { Button } from "./ui/action-button";

type Errors = Partial<Record<string, string>>;
type Status = "idle" | "loading" | "error";

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-[0.95rem] text-foreground transition-colors placeholder:text-muted-foreground focus:border-secondary focus:outline-none";

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const nextErrors: Errors = {};
    const name = get("fullName");
    const phone = get("phone");

    if (name.length < 2) nextErrors["fullName"] = "Please enter your full name.";
    if (name.length > 100) nextErrors["fullName"] = "Name must be under 100 characters.";
    if (!/^[+0-9][0-9\s\-()]{6,19}$/.test(phone))
      nextErrors["phone"] = "Please enter a valid phone number.";
    if (!get("reason")) nextErrors["reason"] = "Please select a reason for your visit.";
    if (get("message").length > 1000)
      nextErrors["message"] = "Message must be under 1000 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    try {
      const message = [
        "Hello Bari Dental Clinic, I would like to request an appointment.",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Preferred contact: ${get("contactMethod")}`,
        `Reason: ${get("reason")}`,
        get("preferredDate") ? `Preferred date: ${get("preferredDate")}` : "",
        get("preferredTime") ? `Preferred time: ${get("preferredTime")}` : "",
        get("message") ? `Message: ${get("message")}` : "",
      ].filter(Boolean).join("\n");
      window.location.href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={
        compact
          ? "space-y-5"
          : "space-y-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          error={errors["fullName"]}
          required
          autoComplete="name"
          maxLength={100}
          placeholder="Your name"
        />
        <Field
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          error={errors["phone"]}
          required
          autoComplete="tel"
          maxLength={20}
          placeholder="+92 3XX XXXXXXX"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contactMethod">Preferred Contact Method</Label>
          <select id="contactMethod" name="contactMethod" className={fieldClass} defaultValue="Phone call">
            <option>Phone call</option>
            <option>WhatsApp</option>
            <option>Either</option>
          </select>
        </div>
        <div>
          <Label htmlFor="reason" required>
            Reason for Visit
          </Label>
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            aria-invalid={Boolean(errors["reason"])}
            aria-describedby={errors["reason"] ? "reason-error" : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Select a reason
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Other">Other / not sure</option>
          </select>
          <FieldError id="reason-error" message={errors["reason"]} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="preferredDate" label="Preferred Date" type="date" />
        <Field id="preferredTime" label="Preferred Time" type="time" />
      </div>

      <div>
        <Label htmlFor="message">Additional Message</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Tell us briefly about your dental concern (optional)"
          aria-invalid={Boolean(errors["message"])}
          aria-describedby={errors["message"] ? "message-error" : undefined}
          className={fieldClass}
        />
        <FieldError id="message-error" message={errors["message"]} />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Something went wrong while sending your request. Please try again, or
          call the clinic directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {status === "loading" ? "Opening WhatsApp…" : "Send Appointment Request"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Your details will open in WhatsApp as a pre-filled message. Your appointment is not
        confirmed until a team member contacts you.
      </p>
    </form>
  );
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: string;
  required?: boolean | undefined;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-display text-sm font-semibold text-foreground"
    >
      {children}
      {required && (
        <span className="text-destructive" aria-hidden="true">
          {" "}
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-destructive">
      {message}
    </p>
  );
}

function Field({
  id,
  label,
  error,
  required,
  name,
  ...props
}: {
  id: string;
  label: string;
  error?: string | undefined;
  required?: boolean | undefined;
  name?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={name ?? id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
        {...props}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
