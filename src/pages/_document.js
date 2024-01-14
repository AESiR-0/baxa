import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const jostFont = localFont({
    src: "../../Jost-VariableFont_wght.ttf",
    variable: "--font-jost",
    display: "swap",
  });
  return (
    <Html lang="en">
      <Head />
      <body className={jostFont.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
