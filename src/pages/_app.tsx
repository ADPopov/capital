import { type AppType } from "next/app";
import { Montserrat } from 'next/font/google'

import { api } from "src/utils/api";

import "~/styles/globals.css";

const montserrat = Montserrat({
    subsets: ['latin']
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <main className={montserrat.className}>
          <Component {...pageProps} />
      </main>
  )
};

export default api.withTRPC(MyApp);
