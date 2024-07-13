

const Card = ({title , description}) => {
<div className="bg-secondary-200 text-complementary-200 border border-gray-300 rounded-lg p-4 m-2 shadow-lg text-center flex-1">
      <h1 className="text-lg font-semibold mb-2">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>
}


const DescriptionProduct = () => {

const cards = [
   {title: 'Card 1', description: 'Description 1'},
   {title: 'Card 2', description: 'Description 2'},
   {title: 'Card 3', description: 'Description 3'},
   {title: 'Card 4', description: 'Description 4'},
   {title: 'Card 5', description: 'Description 5'},
   {title: 'Card 6', description: 'Description 6'},
];



  return (
   <div className="flex flex-wrap justify-around">
   {cards.map((card, index) => (
     <Card key={index} title={card.title} description={card.description} />
   ))}
 </div>
  )
}
export default DescriptionProduct