import { useState } from 'react';
import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import Icons from './Icons';
import Button from './Button';

const ContactForm = () => {
	const [posting, setPosting] = useState(false);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const resetState = () => {
		setError(null);
		setMessage(null);
	};

	const onSubmit = data => {
		setPosting(true);
		setError(null);
		setMessage(null);

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(res => {
			setPosting(false);
			if (res.status === 200) {
				setMessage('Message Sent!');
				reset();
			} else {
				setError('An error occurred');
			}
		});
	};

	return (
		<article className="flex flex-col sm:flex-row w-full items-center justify-center">
			<div className="w-4/5 sm:w-2/5">
				<div className="w-full h-80 sm:h-hero relative">
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
			<div className="bg-green-300 text-gray-800 w-4/5 sm:w-2/5 h-hero flex flex-col items-center justify-center relative">
				{(error || message) && (
					<p
						className={`absolute top-5 left-50 flex justify-center text-white ${
							error && 'bg-red-400'
						} ${message && 'bg-green-600'} w-4/5 py-2`}
					>
						{error || message}
						<button
							className="absolute right-5 focus:outline-none"
							onClick={resetState}
						>
							<IoCloseOutline size="1.5em" />
						</button>
					</p>
				)}
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
					<Button text="Send" type="submit" disabled={posting} />
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
