import { ProviderAuth } from '@hooks/useAuth';
import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout />
        <Component {...pageProps} />
      </ProviderAuth>
    </>
  );
}

export default MyApp;
