import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Button from '../Shared/Button';
import Title from '../Shared/Title';
import Container from '../Shared/Container';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<Container>
			<Title title="Get in Contact" home />
			<div className="bg-green-300 text-gray-800 w-4/5 max-w-md h-96 flex items-center justify-center relative">
				<form
					className="flex justify-center items-center flex-col w-full h-full"
					onSubmit={handleSubmit(onSubmit)}
				>
					<label htmlFor="name" className="w-4/5 align-self-start">
						Name:
					</label>
					<input
						id="name"
						type="text"
						placeholder={errors?.name?.message}
						{...register('name', {
							required: 'Name is required',
						})}
						className={`focus:outline-none w-4/5 p-2 rounded mb-2 ${
							errors?.name?.message && `border-red-500 border-2`
						}`}
					/>
					<label htmlFor="email" className="w-4/5 align-self-start">
						Email:
					</label>
					<input
						id="email"
						type="email"
						placeholder={errors?.email?.message}
						{...register('email', {
							required: 'Email is required',
						})}
						className={`focus:outline-none w-4/5 p-2 rounded mb-2 ${
							errors?.email?.message && `border-red-500 border-2`
						}`}
					/>
					<label htmlFor="message" className="w-4/5 align-self-start">
						Message:
					</label>
					<textarea
						id="message"
						type="text"
						placeholder={errors?.message?.message}
						rows="4"
						className={`focus:outline-none w-4/5 p-2 rounded mb-4 resize-none d ${
							errors?.message?.message && `border-red-500 border-2`
						}`}
						{...register('message', {
							required: 'Message is required',
						})}
					/>
					<Button text="Send" type="submit" />
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
		</Container>
	);
};

export default Contact;
