import { useRef, useEffect } from "react";

const HomeBlurAppear = ({ children }) => {
  const ref = useRef<any>(null);

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
    if (window.pageYOffset > ref.current.getBoundingClientRect().y) {
      ref.current.classList.remove("notShown");
      ref.current.classList.add("appear");
      return;
    }
    document.addEventListener("scroll", animate);

    return () => document.removeEventListener("scroll", animate);
  }, []);
  return (
    <div
      className="notShown w-[100%] h-[100%] flex items-center justify-center relative "
      ref={ref}
    >
      {children}
    </div>
  );
};
export default HomeBlurAppear;
