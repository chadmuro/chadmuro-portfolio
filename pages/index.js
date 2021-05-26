import Hero from '../components/Home/Hero';
import Skills from '../components/Home/Skills';
import Projects from '../components/Home/Projects';
import Articles from '../components/Home/Articles';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

export default function Home() {
	return (
		<div className="w-full max-w-screen-2xl flex flex-col items-center">
			<Hero />
			<Skills />
			<Projects />
			<Articles />
			<About />
			<Contact />
		</div>
	);
}
