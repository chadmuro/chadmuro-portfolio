import Link from 'next/link';
import Title from '../Shared/Title';

const Articles = ({ posts }) => {
  return (
    <div className="w-full relative mt-36 pb-20">
      <section className="w-full h-hero bg-bg-pattern bg-center bg-cover lg:bg-fixed absolute top-0 left-0">
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
        <div className="z-10 h-full tracking-wider text-white flex flex-col justify-center items-center relative text-center px-6">
          <Title title="Recent Articles" home />
          <section>
            {posts &&
              posts.map((post, index) => {
                if (index < 5) {
                  return (
                    <h4 key={post.title} className="mb-4">
                      <Link href="/articles">{post.title}</Link>
                    </h4>
                  );
                }
              })}
          </section>
        </div>
      </section>
      <div className="h-herorel relative" />
    </div>
  );
};

export default Articles;
