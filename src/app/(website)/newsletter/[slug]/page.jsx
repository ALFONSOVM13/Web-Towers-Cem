import newsletterJson from "@/../public/tempData/newsletter.json";
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/ui/Avatar";
import TimeSince from "@/components/ui/TimeSince";

const Page = ({ params }) => {
  const { slug } = params;
  const { newsletter: allNewsLetters } = newsletterJson;

  // Encuentra la newsletter correspondiente al slug
  const newsItem = allNewsLetters.find((item) => item.slug === slug);

  if (!newsItem) {
    return (
      <p className="text-center text-red-500 font-medium">
        Artículo no encontrado.
      </p>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white  rounded-lg">
      <article>
        <Image
          width={1920}
          height={1080}
          src={newsItem.image}
          alt={newsItem.title}
          title="Imagen de artículo"
          className="w-full h-auto object-cover rounded-t-lg mb-6"
        />

        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          {newsItem.title}
        </h1>

        <p className="text-lg text-gray-800 mb-8">{newsItem.metadescription}</p>

        <div className="prose lg:prose-xl text-gray-800 mb-8">
          {newsItem.content.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
              <p className="leading-relaxed">{section.paragraph}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="my-5">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Etiquetas</h2>
        <div className="flex flex-wrap gap-2">
          {newsItem.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary-200 text-complementary-200 text-sm font-medium mr-2 px-3 py-1 rounded-lg border border-blue-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="news-item-meta mt-auto flex flex-row items-center gap-4">
        <div className="news-item-author flex items-center gap-3">
          {newsItem.author.photo && (
            <Avatar
              image={newsItem.author.photo}
              title={newsItem.author.name}
              className="news-item-avatar"
            />
          )}
          <p className="news-item-author-name font-semibold text-sepia-800">
            {newsItem.author.name}
          </p>
        </div>
        <TimeSince date={new Date(newsItem.publishedAt)} />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Artículos Relacionados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {allNewsLetters
            .filter((item) => item.slug !== slug)
            .map((relatedNews, index) => (
              <Link
                key={index}
                href={`/newsletter/${relatedNews.slug}`}
                passHref
                className="group block bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                <Image
                  src={relatedNews.image}
                  alt={relatedNews.title}
                  title="Imagen de artículo"
                  width={400}
                  height={250}
                  objectFit="cover"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedNews.title}
                  </h3>
                  <p className="text-gray-600">{relatedNews.metadescription}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
