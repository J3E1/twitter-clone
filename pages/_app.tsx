import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import AuthModal from '@/components/Modals/AuthModal';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import EditModal from '@/components/Modals/EditModal';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<Toaster />
			<AuthModal />
			<EditModal />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}
