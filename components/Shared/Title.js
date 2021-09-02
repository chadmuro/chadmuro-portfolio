const Title = ({ title, home }) => {
  return (
    <h2
      className={`text-3xl sm:text-4xl text-center ${home ? 'pb-6' : 'pb-24'}`}
    >
      {title}
      <div className="my-2 h-1 w-16 bg-green-300 mx-auto" />
    </h2>
  );
};

export default Title;
