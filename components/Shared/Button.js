const Button = ({ text, onClick, className, type, variant }) => {
	return (
		<button
			className={`${
				variant === 'primary'
					? `bg-green-300 hover:bg-green-500 text-gray-800`
					: `bg-white hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white`
			}  focus:outline-none focus:shadow-none px-6 py-3 rounded uppercase shadow-xl transition ${className}`}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
};

export default Button;
