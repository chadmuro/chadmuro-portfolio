import Image from 'next/image';
import Icons from './Icons';
import Form from './Form';

const ContactForm = () => {
	return (
		<article className="flex flex-col sm:flex-row w-full items-center justify-center">
			<div className="w-4/5 max-w-md sm:w-2/5">
				<div className="h-80 sm:h-hero relative">
					<Image
						src="/ipu.jpg"
						alt="my dog"
						layout="fill"
						objectFit="cover"
						priority
					/>
					<div className="absolute top-0 left-0 bg-black opacity-50 h-full w-full z-10 flex justify-center items-center" />
					<div className="flex flex-col justify-center items-center w-full h-full">
						<h2 className="z-20 text-white text-2xl sm:text-4xl mb-4">
							Get in Contact
						</h2>
						<Icons />
					</div>
				</div>
			</div>
			<Form />
		</article>
	);
};

export default ContactForm;
