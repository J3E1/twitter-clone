import useUser from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
	userId: string;
	isLarge?: boolean;
	hasBorder?: boolean;
	profileImage?: string;
};

export default function Avatar({
	userId,
	isLarge,
	hasBorder,
	profileImage,
}: Props) {
	const router = useRouter();

	const { data: fetchedUser } = useUser(userId);
	const onClick = (event: any) => {
		event.stopPropagation();

		const url = `/users/${userId}`;

		router.push(url);
	};

	return (
		<div
			className={`
                ${hasBorder ? 'border-4 border-black' : ''}
                ${isLarge ? 'h-32' : 'h-12'}
                ${isLarge ? 'w-32' : 'w-12'}
                rounded-full 
                hover:opacity-90 
                transition 
                cursor-pointer
                relative
            `}>
			<Image
				fill
				style={{
					objectFit: 'cover',
					borderRadius: '100%',
				}}
				alt='Avatar'
				// onClick={onClick}
				src={profileImage || '/images/placeholder.jpg'}
			/>
		</div>
	);
}
