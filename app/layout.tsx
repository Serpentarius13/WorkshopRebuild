import ModalOver from "../components/modalOver";
import Navbar from "../components/navbar/navbar";
import "./../styles/globals.scss";

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
        <Navbar /> <ModalOver /> {children}
      </body>
    </html>
  );
}
