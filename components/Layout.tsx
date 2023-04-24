import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Poppins } from 'next/font/google';

import Sidebar from './Sidebar';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '700'] });

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Layout({ children }: Props) {
	return (
		<div className={`h-screen bg-black ${poppins.className}`}>
			<div className='container h-full mx-auto xl:px-30 max-w-5xl'>
				<div className='gird col-4 h-full'>
					<Sidebar />
					<div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
