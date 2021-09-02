import Hero from '../components/Pages/Hero';
import ContactForm from '../components/Shared/ContactForm';
import Container from '../components/Shared/Container';

const Contact = () => {
  return (
    <Container>
      <Hero title="contact me" />
      <section className="flex flex-col items-center justify-center w-full">
        <ContactForm />
      </section>
    </Container>
  );
};

export default Contact;
