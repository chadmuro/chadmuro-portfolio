const Button = ({ text, onClick, className, type }) => {
	return (
		<button
			className={`bg-green-300 hover:bg-green-500 text-gray-800 focus:outline-none focus:shadow-none px-6 py-3 rounded uppercase shadow-xl transition ${className}`}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
};

export default Button;
