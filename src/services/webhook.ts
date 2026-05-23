import type { WebhookPayload } from "@/types";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL ?? "";
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendLeadToWebhook(payload: WebhookPayload): Promise<void> {
  if (!WEBHOOK_URL) {
    console.warn("[webhook] NEXT_PUBLIC_WEBHOOK_URL not configured");
    return;
  }

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      return;
    } catch (err) {
      if (attempt === MAX_RETRIES) {
        console.error("[webhook] All retries failed:", err);
        throw err;
      }
      await delay(RETRY_DELAY_MS * attempt);
    }
  }
}
