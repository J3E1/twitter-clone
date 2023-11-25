import Link from 'next/link';
import { BsDot } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

type Props = {
	label: string;
	icon: IconType;
	href?: string;
	onClick?: () => void;
	auth?: boolean;
	alert?: boolean;
};
export default function SidebarItem({
	label,
	icon: Icon,
	alert,
	auth,
	href,
	onClick: handleClick,
}: Props) {
	const content = (
		<div
			className='
                    w-full
                    relative
                    flex 
                    items-row 
                    gap-4 
                    p-4 
                    rounded-full 
                    hover:bg-slate-300 
                    hover:bg-opacity-20 
                    cursor-pointer
                    items-center
                '>
			<Icon size={24} color='white' />
			<p className='hidden lg:block text-white text-xl'>{label}</p>
			{alert ? (
				<BsDot className='text-sky-500 absolute -top-4 left-0' size={70} />
			) : null}
		</div>
	);
	if (!href)
		return (
			<div onClick={handleClick} className='flex flex-row items-center'>
				{content}
			</div>
		);

	return (
		<Link href={href} className='flex flex-row items-center'>
			{content}
		</Link>
	);
}
