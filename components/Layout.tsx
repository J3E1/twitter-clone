import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Poppins } from 'next/font/google';

import Sidebar from './Sidebar/Sidebar';
import FollowBar from './FollowBar';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '700'] });

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Layout({ children }: Props) {
	return (
		<div className='h-screen bg-black'>
			<div className='container h-full mx-auto xl:px-30 max-w-6xl'>
				<div className='grid grid-cols-6 md:grid-cols-12 h-full'>
					<Sidebar />
					<div
						className='
							col-span-5
							md:col-span-9
							lg:col-span-6 
							border-x-[1px] 
							border-neutral-800
						'>
						{children}
					</div>
					<FollowBar />
				</div>
			</div>
		</div>
	);
}
