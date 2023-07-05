// import Layout from "../components/layout";

// import RootLayout from "@/app/layout";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
