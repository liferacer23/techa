import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
