const Container = ({ children }) => {
	return (
		<section className="w-full max-w-screen-2xl flex flex-col items-center pt-36">
			{children}
		</section>
	);
};

export default Container;
