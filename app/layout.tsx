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
      <head>
        {" "}
        <title>Dream workshop</title>
        <meta name="description" content="Dream workshop website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          charSet="utf-8"
          lang="en"
        />
        <link rel="icon" href="/aten.jpg" />
      </head>

      <body >
        {" "}
        <div className="relative w-16 h-16">
          <Navbar />
        </div>
        <ModalOver /> {children}
      </body>
    </html>
  );
}
