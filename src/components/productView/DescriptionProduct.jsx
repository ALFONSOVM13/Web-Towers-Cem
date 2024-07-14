

const Card = ({ description }) => {
   return (
   <div className="bg-customGreen text-complementary-200 border border-gray-300 rounded-lg p-4 m-2 shadow-lg text-center flex-1">
      <p>{description}</p>
   </div>
   )
}


const DescriptionProduct = ({ cards }) => {
   return (
      <div className="flex flex-wrap justify-around">
         {cards.map((card) => (
            <Card key={card.id}
               description={card.description}
            />
         ))}
      </div>
   )
}
export default DescriptionProduct