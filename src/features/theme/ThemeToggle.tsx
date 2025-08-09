"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { useI18n } from "locales/client";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const t = useI18n();

  return (
    <div className="tooltip tooltip-bottom" data-tip={resolvedTheme === "light" ? t("commons.dark_mode") : t("commons.light_mode")}>
      <Button
        className="hover:bg-slate-200 rounded-full p-1 pr-1 sm:p-2 sm:pr-2"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        variant="ghost"
      >
        {resolvedTheme === "light" ? (
          <MoonIcon className="text-blue-500 dark:text-blue-400 h-6 w-6" />
        ) : (
          <SunIcon className="text-blue-500 dark:text-blue-400 h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
