import Hero from '../components/Pages/Hero';
import ContactForm from '../components/Shared/ContactForm';

const Contact = () => {
	return (
		<div className="w-full max-w-screen-2xl flex flex-col items-center py-36">
			<Hero title="contact me" />
			<section className="flex flex-col items-center justify-center w-full">
				<ContactForm />
			</section>
		</div>
	);
};

export default Contact;
