import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import AuthModal from '@/components/Modals/AuthModal';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthModal />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
