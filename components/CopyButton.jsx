"use client";

import { useRef, useState } from "react";

export default function CopyButton({ value, targetId }) {
  const [label, setLabel] = useState("Copy");
  const timer = useRef(null);

  function flash(text) {
    setLabel(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("Copy"), 1600);
  }

  function selectText() {
    const el = document.getElementById(targetId);
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    flash("Selected");
  }

  function copy() {
    try {
      navigator.clipboard.writeText(value).then(() => flash("Copied"), selectText);
    } catch (e) {
      selectText();
    }
  }

  return (
    <button type="button" className="copy" onClick={copy}>
      {label}
    </button>
  );
}
