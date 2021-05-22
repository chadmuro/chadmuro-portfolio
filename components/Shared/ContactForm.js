import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Icons from './Icons';
import Button from './Button';

const ContactForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<article className="flex flex-col sm:flex-row w-full items-center justify-center">
			<div className="w-4/5 sm:w-2/5">
				<div className="w-full h-80 sm:h-hero relative">
					<Image src="/ipu.jpg" alt="my dog" layout="fill" objectFit="cover" />
					<div className="absolute top-0 left-0 bg-black opacity-50 h-full w-full z-10 flex justify-center items-center" />
					<div className="flex flex-col justify-center items-center w-full h-full">
						<h2 className="z-20 text-white text-2xl">Get in Contact</h2>
						<Icons />
					</div>
				</div>
			</div>
			<div className="bg-green-300 text-gray-800 w-4/5 sm:w-2/5 h-80 sm:h-hero flex items-center justify-center relative">
				<form
					className="flex justify-center items-center flex-col w-full h-full"
					onSubmit={handleSubmit(onSubmit)}
				>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						{...register('email')}
						className="focus:outline-none w-4/5 p-2 rounded mb-2"
					/>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						type="text"
						rows="4"
						className="focus:outline-none w-4/5 p-2 rounded"
						{...register('message')}
					/>
					<Button text="Send" type="submit" className="mt-2" />
				</form>
				<a
					className="absolute bottom-1 right-1"
					href="https://ipugram.web.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src="/ipu-transparent.png" alt="ipu" height={40} width={40} />
				</a>
			</div>
		</article>
	);
};

export default ContactForm;
