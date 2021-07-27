import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { SearchProvider } from "../src/SearchContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </Provider>
  );
}
export default MyApp;
