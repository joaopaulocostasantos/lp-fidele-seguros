"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return;

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", eventName, params);
  }

  // Google Analytics / Ads
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export const trackPageView = () => trackEvent("PageView");
export const trackFormStart = () => trackEvent("FormStart");
export const trackLead = (params?: Record<string, unknown>) =>
  trackEvent("Lead", params);
export const trackFormSubmit = (params?: Record<string, unknown>) =>
  trackEvent("FormSubmit", params);
export const trackQualifiedLead = (params?: Record<string, unknown>) =>
  trackEvent("QualifiedLead", params);
