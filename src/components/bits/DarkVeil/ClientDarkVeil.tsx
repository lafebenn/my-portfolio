import { useEffect, useState, type ComponentType } from "react";

type DarkVeilProps = {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
  lightMode?: boolean;
};

/**
 * DarkVeil uses ogl/WebGL. Load it only after mount so prerender/SSR never
 * touches window or WebGL, and skip it entirely when the visitor prefers
 * reduced motion.
 */
export default function ClientDarkVeil(props: DarkVeilProps) {
  const [Comp, setComp] = useState<ComponentType<DarkVeilProps> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let cancelled = false;
    import("./DarkVeil").then((mod) => {
      if (!cancelled) setComp(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!Comp) return null;
  return <Comp {...props} />;
}
