export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  hasCnpj: string;
  companySize: string;
  cnpjType: string;
  currentOperator: string;
  mainPain: string;
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
