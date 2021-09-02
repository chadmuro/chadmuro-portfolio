import DescriptionBox from './DescriptionBox';

const getDate = date => {
  return date.split(' ')[0];
};

const ArticleCard = ({ post }) => {
  return (
    <button className="w-100 max-w-xs bg-gray-800 dark:bg-white text-white dark:text-gray-800 mb-10 mx-5 flex flex-col rounded-lg overflow-hidden group transform duration-300 hover:scale-105 focus:outline-none h-auto">
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <div className="w-full relative pt-image overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full bg-cover bg-center absolute top-0 left-0  transform group-hover:scale-110"
          />
        </div>
        <div className="p-4 text-left">
          <h4 className="text-lg font-semibold group-hover:underline">
            {post.title}
          </h4>
          <p className="pb-4 text-sm">{getDate(post.pubDate)}</p>
          <div className="flex flex-wrap items-start">
            {post.categories.map(category => (
              <DescriptionBox key={category} text={category} />
            ))}
          </div>
        </div>
      </a>
    </button>
  );
};

export default ArticleCard;
