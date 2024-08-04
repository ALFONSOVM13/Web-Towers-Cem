import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../ui/CustomButton";
import Title from "../ui/Title";
import Link from "next/link";
import NewsGrid from "./NewsGrid";
import news from "../../../public/tempData/news.json";

const NewsSection = () => {
  return (
    <section className="mx-4 sm:mx-8  bg-white h-full">
      <div className="flex justify-between items-center mb-10">
        <Title text="Noticias" />
        <Link href="/noticias" alt="Noticias">
          <CustomButton
            type="secondary"
            className="flex items-center gap-x-2 rounded-3xl"
          >
            Ver mas <FaArrowRightLong />
          </CustomButton>
        </Link>
      </div>
      <NewsGrid news={news} />
    </section>
  );
};

export default NewsSection;
