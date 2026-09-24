"use client";

import { useSyncExternalStore } from "react";

function subscribe(query: string) {
  return (onStoreChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onStoreChange);
    return () => mql.removeEventListener("change", onStoreChange);
  };
}

/** SSR-safe media query hook; returns `false` on the server and first paint. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribe(query),
    () => window.matchMedia(query).matches,
    () => false
  );
}
