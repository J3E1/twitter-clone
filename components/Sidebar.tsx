import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

type Props = {};

const items = [
	{
		icon: BsHouseFill,
		label: 'Home',
		href: '/',
	},
	{
		icon: BsBellFill,
		label: 'Notifications',
		href: '/notifications',
		auth: true,
		// alert: currentUser?.hasNotification,
		alert: undefined,
	},
	{
		icon: FaUser,
		label: 'Profile',
		href: `/users/123`,
		// href: `/users/${currentUser?.id}`,
		auth: true,
	},
];

export default function Sidebar({}: Props) {
	return (
		<div className='col-span-1 h-full pr-4 md:pr-6'>
			<div className='flex flex-col items-end'>
				<div className='space-y-2 lg:w-[230px]'>
					<SidebarLogo />
					{items.map(item => (
						<SidebarItem
							key={item.href}
							alert={item.alert}
							auth={item.auth}
							href={item.href}
							icon={item.icon}
							label={item.label}
						/>
					))}
					{/* {currentUser && (
						<SidebarItem
							onClick={() => signOut()}
							icon={BiLogOut}
							label='Logout'
						/>
					)} */}
					<SidebarItem onClick={() => {}} icon={BiLogOut} label='Logout' />
					<SidebarTweetButton />
				</div>
			</div>
		</div>
	);
}
