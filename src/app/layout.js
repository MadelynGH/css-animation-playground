import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "CSS Animation Playground",
  description: "A playground ... for CSS animations!"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}