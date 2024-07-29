import Image from 'next/image'



const Card = ({ content }) => {
   return (
      <div className="bg-complementary-400 text-primary-100 rounded-md p-4 m-2 shadow-xl text-center flex-1 max-w-[300px] min-h-[120px] flex items-center justify-center transition-transform transform hover:scale-105 font-title">
         <p className="text-lg font-bold">{content}</p>
      </div>
   )
}

const UsosYAppProducts = ({ usesAndApplications }) => {
   return (
      <section className='mb-10'>
         <h2 className="text-3xl md:text-5xl font-title text-primary-100 pb-6 text-center">Usos y <span className="font-bold">Aplicaciones</span></h2>
         <div className="flex flex-col md:flex-row md:flex-wrap justify-around gap-4 px-10 py-5 pb-10">
            {usesAndApplications.map((usesAndApplications) => (
               <Card key={usesAndApplications.id} content={usesAndApplications.content} />
            ))}
         </div>

            <div className='overflow-x-auto'>
         <figure className="w-full min-w-[900px] h-auto flex justify-center mt-6">
            <Image
              src="/images/products/usos.png"
              height={700}
              width={950}
              alt="X-Cem Image"
              className="object-cover h-full cursor-pointer object-center"
            />
          </figure>
          </div>

      </section>
   )
}
export default UsosYAppProducts