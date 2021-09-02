import Prismic from '@prismicio/client';
import Hero from '../components/Pages/Hero';
import Container from '../components/Shared/Container';
import Title from '../components/Shared/Title';
import Button from '../components/Shared/Button';
import ProjectCard from '../components/Shared/ProjectCard';
import { Client } from '../prismic-config';

export async function getStaticProps() {
  const projects = await Client.query(
    Prismic.Predicates.at('document.type', 'project')
  );

  return {
    props: {
      projects,
    },
  };
}

const Projects = ({ projects }) => {
  return (
    <Container>
      <Hero title="Projects" />
      <section className="flex flex-col items-center w-full">
        <Title title="My Recent Projects" />
        <div className="flex flex-wrap justify-center items-stretch w-full">
          {projects.results &&
            projects.results.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>
      <section className="pt-6">
        <a
          href="https://github.com/chadmuro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" type="button">
            See all Projects
          </Button>
        </a>
      </section>
    </Container>
  );
};

export default Projects;
