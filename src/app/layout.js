import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "CSS Animation Previewer",
  description: "A tool that helps you preview CSS animations."
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