import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Header from '@/components/UI/Header';
import AuthModal from '@/components/Modals/AuthModal';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Header label='Home' />
		</>
	);
}
