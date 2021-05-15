import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import Articles from '../components/Home/Articles';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

export default function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<Articles />
			<About />
			<Contact />
		</div>
	);
}
