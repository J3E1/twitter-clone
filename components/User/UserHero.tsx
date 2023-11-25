import Image from 'next/image';
import Avatar from '../Avatar';

export default function UserHero({
	coverImage,
	userId,
}: {
	coverImage: string;
	userId: string;
}) {
	return (
		<div>
			<div className='bg-neutral-700 h-44 relative'>
				{coverImage && (
					<Image
						src={coverImage}
						fill
						alt='Cover Image'
						style={{ objectFit: 'cover' }}
					/>
				)}
				<div className='absolute -bottom-16 left-4'>
					<Avatar userId={userId} isLarge hasBorder />
				</div>
			</div>
		</div>
	);
}
