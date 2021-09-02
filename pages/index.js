import Prismic from '@prismicio/client';
import Hero from '../components/Home/Hero';
import Skills from '../components/Home/Skills';
import Projects from '../components/Home/Projects';
import Articles from '../components/Home/Articles';
import Contact from '../components/Home/Contact';
import { Client } from '../prismic-config';

export async function getStaticProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
  );
  const posts = await res.json();
  const projects = await Client.query(
    Prismic.Predicates.at('document.type', 'project')
  );

  return {
    props: {
      posts: posts.items,
      projects: projects.results,
    },
  };
}

const Home = ({ posts, projects }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <Skills />
      <Projects projects={projects} />
      <Articles posts={posts} />
      <Contact />
    </div>
  );
};

export default Home;
