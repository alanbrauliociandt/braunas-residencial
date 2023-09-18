import { useRef } from "react";
import "./Banner.scss";

export function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id="banner"
      className={`banner`}
      ref={bannerRef}
    ></div>
  );
}
