import Card from './Card';

const CardList = ({ projects }) => {
  return (
    <div className="px-4 py-12">
      <div className="flex flex-wrap -mx-2">
        {projects.map((project) => (
          <div className="px-2 w-full sm:w-1/2 lg:w-1/3" key={project.title}>
            <Card {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
