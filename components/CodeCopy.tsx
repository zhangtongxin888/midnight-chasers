"use client";

import { useState } from "react";

export function CodeCopy() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText("ThanksFor940k");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="copy-button" type="button" onClick={copyCode} aria-live="polite">
      {copied ? "Copied" : "Copy code"}
    </button>
  );
}
