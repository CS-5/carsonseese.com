import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="worker"
        data-cf-beacon='{"token": "322ce85ef96346afb3e117497899585e"}'
      />

      <Script
        strategy="worker"
        src="https://www.googletagmanager.com/gtag/js?id=G-608FXHT6HS"
      />

      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-608FXHT6HS', { 
                page_path: window.location.pathname,
            });
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
