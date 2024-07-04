
const advantages = [
   {
      id: 1,
      title: '170 árboles en un año',
      content: 'Esta cantidad equivale a lo que descontaminarían'
   },
   {
      id: 2,
      title: '173.35Kg de CO2',
      content: 'es la cantidad que descontaminamos de la atmosfera por cada tonelada(t) de cemento producido'
   },
   {
      id: 3,
      title: '12,800 Ton',
      content: 'de las emisiones de CO2 anuales provienen de la producción de cemento a nivel mundial.'
   }
]

const Advantages = () => {

   return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 bg-complementary-300 text-complementary-200'>
         {advantages.map((advantage) => (
            <article key={advantages.id} className='text-center px-5 py-10'>
               <h4 className='mb-8 text-2xl font-bold'>{advantage.title}</h4>
               <p>{advantage.content}</p>
            </article>
         ))}
      </div>
   )
}
export default Advantages