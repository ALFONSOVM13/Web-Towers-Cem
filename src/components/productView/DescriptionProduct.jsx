const Card = ({ description }) => {
  return (
    <div className="bg-complementary-400 text-primary-100 rounded-md p-4 m-2 shadow-xl text-center flex-1 max-w-[200px] min-h-[120px] flex items-center justify-center transition-transform transform hover:scale-105 font-title">
      <p className="text-lg font-bold">{description}</p>
    </div>
  );
};

const DescriptionProduct = ({ cards }) => {
  return (
    <div className="flex overflow-x-scroll md:overflow-x-hidden md:flex-wrap justify-around gap-4 px-10 py-5 pb-10">
      {cards.map((card) => (
        <Card key={card.id} description={card.description} />
      ))}
    </div>
  );
};

export default DescriptionProduct;
