"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeToggleButton />
      {children}
    </NextThemesProvider>
  )
}
function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    // <button
    //   type="button"
    //   className="theme-toggle-button inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //   onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    //   aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    // >
    //   {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
    // </button>
    <div></div>
  )
}
export { ThemeProvider }
