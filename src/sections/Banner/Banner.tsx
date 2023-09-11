import { useRef } from "react";
import "./Banner.scss";
import useIsElementVisible from "../../hooks/useIsElementVisible/useIsElementVisible";

export function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsElementVisible(bannerRef);
  return (
    <div
      id="banner"
      className={`banner ${isVisible ? "fade-in" : ""}`}
      ref={bannerRef}
      style={{ opacity: isVisible ? 1 : 0 }}
    ></div>
  );
}
