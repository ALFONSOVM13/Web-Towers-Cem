import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../ui/CustomButton";
import Title from "../ui/Title";
import Link from "next/link";
import NewsGrid from "./NewsGrid";
import news from "../../../public/tempData/news.json";

const NewsSection = () => {
  // Ordenar las noticias por fecha más reciente
  const sortedNews = news.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Seleccionar las últimas 4 noticias
  const latestNews = sortedNews.slice(0, 4);

  return (
    <section className="mx-12 sm:mx-20 bg-white h-full">
      <div className="flex justify-between items-center mb-10">
        <Title text="Noticias" />
        <Link href="/noticias" alt="Noticias">
          <CustomButton
            type="secondary"
            className="flex items-center gap-x-2 rounded-3xl"
          >
            Ver más <FaArrowRightLong />
          </CustomButton>
        </Link>
      </div>
      <NewsGrid news={latestNews} />
    </section>
  );
};

export default NewsSection;
