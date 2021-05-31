import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from 'react-icons/io5';
import Button from './Button';

const Form = ({ home }) => {
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
		reset();
	};

	const onSubmit = data => {
		setPosting(true);
		setError(null);
		setMessage(null);

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({ data }),
		})
			.then(res => {
				setPosting(false);
				setMessage('Message sent!');
			})
			.catch(err => {
				setPosting(false);
				setError('An error occured!');
			});
	};

	return (
		<div
			className={`relative bg-green-300 text-gray-800 w-4/5 max-w-md h-hero flex flex-col items-center justify-center ${
				!home && 'sm:w-2/5'
			}`}
		>
			{/* <a
				href="https://ipugram.web.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="absolute top-6 transform hover:scale-110 duration-300"
			>
				<Image src="/ipu-transparent.png" alt="ipu" height={35} width={35} />
			</a> */}
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
				<Button type="submit" disabled={posting}>
					Send
				</Button>
			</form>
			{(error || message) && (
				<p
					className={`absolute bottom-5 left-50 flex justify-center text-white w-4/5 py-2 ${
						error && 'bg-red-400'
					} ${message && 'bg-green-600'}`}
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
		</div>
	);
};

export default Form;
