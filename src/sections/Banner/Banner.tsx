import { useEffect, useRef } from "react";
import AOS from 'aos';
import "./Banner.scss";

export function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <div
      id="banner"
      className={`banner`}
      data-aos="fade-up"
      ref={bannerRef}
    ></div>
  );
}
