import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

type Props = { showBackArrow?: boolean; label: string };
export default function Header({ showBackArrow, label }: Props) {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};
	return (
		<div className='border-b-[1px] border-neutral-800 p-5'>
			<div className='flex flex-row items-center gap-2'>
				{showBackArrow && (
					<BiArrowBack
						onClick={handleBack}
						color='white'
						size={20}
						className='
                            cursor-pointer 
                            hover:opacity-70 
                            transition
                        '
					/>
				)}
				<h1 className='text-white text-xl font-semibold'>{label}</h1>
			</div>
		</div>
	);
}
