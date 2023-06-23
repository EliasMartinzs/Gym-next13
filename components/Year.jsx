"use client";

import React from "react";

export default function Year() {
  const d = new Date();
  const year = d.getFullYear();
  return <div className="ml-2">{year}</div>;
}
