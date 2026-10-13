"use client";

import { useState } from "react";
import { ICON_DEFINITIONS } from "@/lib/icon-registry";
import { Label } from "@/components/ui/label";

export function IconField({
  name,
  label,
  value,
}: {
  name: string;
  label: string;
  value?: string;
}) {
  const [selected, setSelected] = useState(value ?? "");
  const Icon = ICON_DEFINITIONS.find((definition) => definition.key === selected)
    ?.Icon;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-2">
        <select
          name={name}
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="">— Tanpa ikon —</option>
          {["social", "tech", "general"].map((group) => (
            <optgroup
              key={group}
              label={group === "social" ? "Social / Brand" : group === "tech" ? "Tech / Skill" : "Umum"}
            >
              {ICON_DEFINITIONS.filter((definition) => definition.group === group).map(
                (definition) => (
                  <option key={definition.key} value={definition.key}>
                    {definition.label}
                  </option>
                )
              )}
            </optgroup>
          ))}
        </select>
        <div className="flex size-9 flex-none items-center justify-center rounded-md border bg-card">
          {Icon && <Icon className="size-5" />}
        </div>
      </div>
    </div>
  );
}