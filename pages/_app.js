import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = useState(true)

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Component isFirstMount={isFirstMount} key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp
