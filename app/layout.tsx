import ModalOver from "../components/modalOver";
import Navbar from "../components/navbar/navbar";
import "./../styles/globals.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body>
        {" "}
        <div className='relative w-16 h-16'> 
        <Navbar />
        </div>
        <ModalOver /> {children}
      </body>
    </html>
  );
}
