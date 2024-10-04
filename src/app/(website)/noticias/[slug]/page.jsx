import news from "@/components/../../public/tempData/news.json";
import NewsHeader from "@/components/newsPage/NewsHeader";
import SmallNewsCard from "@/components/newsPage/SmallNewsCard";
import Image from "next/image";
import { notFound } from "next/navigation";
import "./newDetails.scss";

// Generar metadata dinámico
export async function generateMetadata({ params }) {
  const { slug } = params;
  const currentNew = news.find((n) => n.slug === slug);
  if (!currentNew) {
    return {
      title: "Noticia no encontrada - Towers Cem",
      description: "La noticia que buscas no existe.",
    };
  }

  return {
    title: `${currentNew.title} - Towers Cem`,
    description: currentNew.summary || "Noticias y novedades de Towers Cem.",
    keywords : currentNew.tags?.join(", "),
    openGraph: {
      title: `${currentNew.title} - Towers Cem`,
      description: currentNew.description || "Noticias y novedades de Towers Cem.",
      images: [currentNew.image || "/logo.png"],
      url: `https://towerscem.com/news/${slug}`,
    },
    siteName: "Towers Cem",
    type: "article",
    lang : "es",
    favicon: "/src/app/icon.ico",
    twitter: {
      card: "summary_large_image",
      title: `${currentNew.title} - Towers Cem`,
      description: currentNew.description || "Noticias y novedades de Towers Cem.",
      image: currentNew.image || "/logo.png",
    },
  };
}

const Page = ({ params }) => {
  const { slug } = params;
  const currentNew = news.find((n) => n.slug === slug);

  if (!currentNew) {
    notFound();
  }

  const relatedNews = news.filter((n) => {
    if (n.slug !== undefined)
      return (
        n.slug &&
        n.slug !== slug &&
        currentNew.tags?.find((tag) => n.tags?.includes(tag) !== undefined)
      );
    return false;
  });

  return (
    <>
      <section className="new-section py-20 md:py-28 relative flex flex-col justify-center z-0">
        <article className="container mx-auto w-full xl:px-12">
          <NewsHeader
            title={currentNew.title}
            author={currentNew.author}
            readTime={currentNew.readTime}
            publishedAt={currentNew.publishedAt}
          />
          <figure className="relative h-[18rem] sm:h-[30rem] lg:h-[48rem] w-full sm:rounded-md overflow-hidden">
            <Image
              src={currentNew.image}
              alt={currentNew.title}
              title="Imagen de artículo"
              width={1200}
              height={1200}
              className="w-full h-full object-contain object-center"
            />
          </figure>
          <div className="relative flex flex-col xl:flex-row items-start gap-14 mt-8 px-5 xl:px-10 2xl:px-16">
            <div className="font-content mb-5 max-w-[46rem] xl:max-w-[50rem] mx-auto">
              <div
                className="new-content text-complementary-200 text-pretty font-title text-justify text-lg"
                dangerouslySetInnerHTML={{ __html: currentNew.content }}
              ></div>
              <div className="flex gap-2 mt-8">
                {currentNew.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="font-content font-semibold px-3 py-0.5 border border-gray-300 text-complementary-200 border-solid rounded-3xl text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <aside className="xl:sticky xl:top-20 grid gap-5">
              <div className="text-xl text-complementary-200">
                Noticias Relacionadas
              </div>
              {relatedNews.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1 auto-rows-min gap-16 sm:gap-11 xl:overflow-y-auto xl:pb-32 px-2 text-complementary-200">
                  {relatedNews.map((newItem) => (
                    <SmallNewsCard
                      key={newItem.slug}
                      {...newItem}
                      className="xl:flex-col 2xl:flex-row"
                      imageClassName="xl:w-28 2xl:w-40 xl:aspect-video xl:w-full 2xl:aspect-square 2xl:w-40"
                    />
                  ))}
                </div>
              )}
            </aside>
          </div>
        </article>
      </section>
    </>
  );
};

export default Page;
