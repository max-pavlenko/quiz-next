import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Header from '@/app/shared/widgets/layout/Header';

export default function App({Component, pageProps}: AppProps) {
   return (
       <>
          <Header />
          <main className='h-[calc(100%_-_var(--header-height))] mt-12'>
             <Component {...pageProps} />
          </main>
       </>
   );
}
