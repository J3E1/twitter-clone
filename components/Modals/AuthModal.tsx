import useAuthModal from '@/hooks/useAuthModal';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from '../Modal';
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import Input from '../UI/Input';

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

			if (regMode) {
				console.log('🚀 ~ file: AuthModal.tsx:13 ~ AuthModal ~', {
					password,
					name,
					username,
					email,
				});
				const res = await axios.post('/api/register', {
					password,
					name,
					username,
					email,
				});

				toast.success('Registered successfully');

				await signIn('credentials', {
					email,
					password,
				});
			} else {
				await signIn('credentials', {
					email,
					password,
				});
				toast.success('Logged in');
			}
			// await signIn('credentials', {
			// 	email,
			// 	password,
			// });

			onClose();
		} catch (error) {
			toast.error('Something went wrong');
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
				type='email'
				required
			/>
			{regMode && (
				<>
					<Input
						disabled={isLoading}
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						rounded='full'
						type='text'
						required
					/>
					<Input
						disabled={isLoading}
						placeholder='Username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						rounded='full'
						type='text'
						required
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
				required
			/>
		</div>
	);

	const footerContent = (
		<div className='text-neutral-400 text-center mt-4'>
			<p>
				{!regMode ? 'First time using Shitter?' : 'Already have an account?'}{' '}
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
