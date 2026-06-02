export interface LeadFormData {
  name: string;
  email: string;
  hasPlan: string;
  planTime: string;
  planPeople: string;
  phone: string;
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface WebhookPayload extends LeadFormData {
  utms: UtmParams;
  timestamp: string;
  page_url: string;
}
