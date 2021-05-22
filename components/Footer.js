import Icons from './Shared/Icons';

const Footer = () => {
	return (
		<footer className="min-h-footer w-full bg-green-300 text-gray-800 flex justify-center items-center py-10">
			<div className="flex flex-col items-center">
				<p>Copyright &copy; 2021 Chad Murobayashi</p>
				<Icons dark />
			</div>
		</footer>
	);
};

export default Footer;
