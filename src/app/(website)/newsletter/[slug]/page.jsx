import SectionHeader from "@/components/newsPage/SectionHeader";
import "../styles.scss";
import newsletterJson from "@/../public/tempData/newsletter.json";
import NewsletterFrame from "@/components/newsletter/NewsletterFrame";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import NewsletterCard from "@/components/newsletter/NewsletterCard";
import Link from "next/link";

const Page = ({ params }) => {
  const { slug } = params;
  const { newsletter: allNewsLetters } = newsletterJson;
  const newsletter = allNewsLetters.filter((item) => item.slug === slug);
  const otherNewsletters = allNewsLetters.filter((n) => n.slug !== slug);

  return (
    <section className="relative flex flex-col justify-center z-0 pt-32">
      <div className="flex flex-col justify-center items-center px-16 w-full text-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full self-start">
          <SectionHeader title="NEWSLETTER" />
          <div className="flex flex-col max-md:mt-10 mb-10 max-md:max-w-full text-left">
            Nuestros Avances
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 w-full max-w-[1216px] mb-5 max-md:mb-5 max-md:max-w-full gap-10">
          <div className="w-2/3 flex gap-10 flex-col">
            <NewsletterFrame {...newsletter[0]} index={0} />
            <NewsletterSection />
          </div>
          <div className="max-lg:mt-12 lg:w-1/3 grid gap-10 grid-col-1 max-md:grid-cols-2 lg:grid-col-1  mb-20 ">
            {otherNewsletters.map((newsletter, index) => (
              <Link
                href={"/newsletter/" + newsletter.slug}
                alt={newsletter.slug}
                className={`${index === 0 ? "" : "mt-10"} self-end`}
              >
                <NewsletterCard {...newsletter} key={index} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
