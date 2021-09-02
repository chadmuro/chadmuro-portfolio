import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Button from '../Shared/Button';

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1 },
  },
};

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-full max-w-screen-2xl flex flex-col flex-1 sm:flex-row justify-center sm:justify-around items-center px-6 py-16 sm:py-32">
      <div className="text-center sm:text-left">
        <h1 className="uppercase text-5xl pb-10">
          Hello, my name is <span className="text-green-300">Chad</span>
        </h1>
        <h3>I'm a Frontend Developer living in Tokyo, Japan.</h3>
        <h3 className="pb-10">
          I enjoy building user-friendly websites and web applications.
        </h3>
        <Button
          onClick={() => router.push('/projects')}
          className="mb-10 sm:mb-0"
          type="button"
          variant="primary"
        >
          See my projects
        </Button>
      </div>
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="rounded-full bg-green-300"
      >
        <Image
          src="/chad.png"
          alt="Picture of me"
          width={250}
          height={250}
          priority
          className="overflow-hidden rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
