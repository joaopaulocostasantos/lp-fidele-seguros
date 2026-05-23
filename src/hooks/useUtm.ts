"use client";

import { useEffect, useState } from "react";
import type { UtmParams } from "@/types";

export function useUtm(): UtmParams {
  const [utms, setUtms] = useState<UtmParams>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys: (keyof UtmParams)[] = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ];

    const collected: UtmParams = {};
    keys.forEach((key) => {
      const val = params.get(key);
      if (val) collected[key] = val;
    });

    // persist to sessionStorage so UTMs survive SPA navigation
    const stored = sessionStorage.getItem("fidele_utms");
    const merged = { ...(stored ? JSON.parse(stored) : {}), ...collected };
    sessionStorage.setItem("fidele_utms", JSON.stringify(merged));
    setUtms(merged);
  }, []);

  return utms;
}
