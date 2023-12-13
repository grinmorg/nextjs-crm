import type { AppProps } from "next/app";
import { AppProvider } from "./app-provider";
import { Jura } from "next/font/google";
import { ToastContainer } from "react-toastify";

const font = Jura({ subsets: ["latin"] });
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={font.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}
