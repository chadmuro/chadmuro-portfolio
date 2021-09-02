import { RichText } from 'prismic-reactjs';
import { FaLaptop, FaGithub } from 'react-icons/fa';
import Container from '../Shared/Container';
import Title from '../Shared/Title';
import Button from '../Shared/Button';

const Projects = ({ projects }) => {
  return (
    <Container>
      <Title title="Projects" home />
      <section className="flex flex-col justify-center items-center">
        {projects &&
          projects.map((project, index) => (
            <article
              key={project.id}
              className={`flex flex-col items-center ${
                index === 0 ? 'pb-24' : null
              }`}
            >
              <h3 className="text-2xl">
                {RichText.asText(project.data.project_name)}
              </h3>
              <img
                src={project.data.main_image.url}
                alt={RichText.asText(project.data.project_name)}
                height={project.data.main_image.dimensions.height}
                width={project.data.main_image.dimensions.width}
              />
              <div className="flex flex-col sm:flex-row sm:justify-evenly w-full">
                <Button variant="primary" className="mb-4 sm:mb-0 mx-4">
                  <a
                    className="flex items-center justify-center"
                    href={RichText.asText(project.data.project_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLaptop />
                    <span className="pl-2">View Project</span>
                  </a>
                </Button>
                <Button variant="primary" className="mx-4">
                  <a
                    className="flex items-center justify-center"
                    href={RichText.asText(project.data.project_github)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span className="pl-2">View Source Code</span>
                  </a>
                </Button>
              </div>
            </article>
          ))}
      </section>
    </Container>
  );
};

export default Projects;
