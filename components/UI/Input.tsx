type Props = {
	placeholder?: string;
	value?: string;
	type?: string;
	disabled?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	required?: boolean;
	rounded?: 'md' | 'full' | 'sm' | 'none';
};
export default function Input({
	placeholder,
	value,
	type = 'text',
	onChange,
	disabled,
	label,
	rounded,
	required = false,
}: Props) {
	return (
		<div className='w-full'>
			{label && (
				<p className='text-xl text-white font-semibold mb-2'>{label}</p>
			)}
			<input
				disabled={disabled}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				type={type}
				required={required}
				className={` w-full
                    py-4 
                    px-6 
                    text-lg 
                    bg-black 
                    border-2
                    border-neutral-800 
                    outline-none
                    text-white
                    focus:border-sky-500
                    focus:border-2
                    transition
                    disabled:bg-neutral-900
                    disabled:opacity-70
                    disabled:cursor-not-allowed 
                    rounded-${rounded || 'md'}
                    `}
			/>
		</div>
	);
}
