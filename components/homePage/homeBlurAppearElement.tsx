import { useRef, useEffect } from "react";

import { testCookie } from "../../utils/cookies";

const HomeBlurAppear = ({ children }) => {
  const ref = useRef<any>(null);

  const hasJs = useRef<any>(testCookie());

  const animate = () => {
    if (!ref) return;

    const offset = window.pageYOffset;
    const y = ref.current.getBoundingClientRect().y;

    if (offset + 300 > y) {
      ref.current.classList.remove("notShown");
      ref.current.classList.add("appear");
      document.removeEventListener("scroll", animate);
    }
  };

  useEffect(() => {
    if (!hasJs) return;
    ref.current.classList.add("notShown");
    if (window.pageYOffset > ref.current.getBoundingClientRect().y) {
      ref.current.classList.remove("notShown");
      ref.current.classList.add("appear");
      return;
    }
    document.addEventListener("scroll", animate);

    return () => document.removeEventListener("scroll", animate);
  }, [hasJs]);
  return (
    <div
      className={` w-[100%] h-[100%] flex items-center justify-center relative `}
      ref={ref}
    >
      {children}
    </div>
  );
};
export default HomeBlurAppear;
