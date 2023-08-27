import useAuthModal from '@/hooks/useAuthModal';
import { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import Head from 'next/head';

type Props = {};
export default function AuthModal({}: Props) {
	const { isOpen, onClose, onOpen, regMode, toggleMode } = useAuthModal();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [name, setName] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async () => {
		try {
			setIsLoading(true);

			// await signIn('credentials', {
			// 	email,
			// 	password,
			// });

			// toast.success('Logged in');

			onClose();
		} catch (error) {
			// toast.error('Something went wrong');
		} finally {
			setIsLoading(false);
		}
	};

	const onToggle = () => toggleMode();

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Input
				placeholder='Email'
				onChange={e => setEmail(e.target.value)}
				value={email}
				disabled={isLoading}
				rounded='full'
			/>
			{regMode && (
				<>
					<Input
						disabled={isLoading}
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						rounded='full'
					/>
					<Input
						disabled={isLoading}
						placeholder='Username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						rounded='full'
					/>
				</>
			)}
			<Input
				placeholder='Password'
				type='password'
				onChange={e => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
				rounded='full'
			/>
		</div>
	);

	const footerContent = (
		<div className='text-neutral-400 text-center mt-4'>
			<p>
				{!regMode ? 'First time using Twitter?' : 'Already have an account?'}{' '}
				<span
					onClick={onToggle}
					className='
                        text-white 
                        cursor-pointer 
                        hover:underline
                    '>
					{!regMode ? 'Create an account' : 'Sign in'}
				</span>
			</p>
		</div>
	);

	return (
		<>
			<Head>
				<title>{regMode ? 'Register' : 'Login'}</title>
			</Head>
			<Modal
				disabled={isLoading}
				isOpen={isOpen}
				title={regMode ? 'Register' : 'Login'}
				actionLabel={regMode ? 'Register' : 'Login'}
				onClose={onClose}
				onSubmit={onSubmit}
				body={bodyContent}
				footer={footerContent}
			/>
		</>
	);
}
