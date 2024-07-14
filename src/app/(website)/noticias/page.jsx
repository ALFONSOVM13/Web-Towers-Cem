import React from "react";
import SectionHeader from "@/components/newsPage/SectionHeader.jsx";
import NewsCard from "@/components/newsPage/NewsCard.jsx";
import SmallNewsCard from "@/components/newsPage/SmallNewsCard.jsx";
import ContrastBar from "@/components/header/ContrastBar";
import "./styles.scss";
import NewsletterSection from "../../../components/newsletter/NewsletterSection";
import NewsletterCard from "@/components/newsletter/NewsletterCard";

const newsData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/da87f7e7d89726fd3cc96ab1e4395495eae68d85486ce4163e8c2e15819facf1?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    tags: ["Towers Cem", "Cemento"],
    title: "Tower Cem, ganador del Emprende Uninorte Competition 2023",
    content:
      "Con el propósito de promover el espíritu emprendedor y la creación de empresas en estudiantes y egresados de Uninorte, a través del desarrollo de competencias, el Centro de Emprendimiento concluyó el concurso con el Startup Day Uninorte 2023.",
    author: {
      name: "Leslie Alexander",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39d80681d84669517f84cbb851651998f553ff9d1f717f29913c63f7849e6405?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "9 min",
    slug: "towers-cem-ganador-emprende",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db88a75330c1d14e13b75ed16ba288aea1c5dfa52129831bcd30a2a391bed94d?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Estudiante UniCosta ganador de Prix French Tech",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Wade Warren",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0193099e7797da6327ebcd0d2c72d94b3ff59a2a14c5fea98abd3ece166eced6?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "7 min",
    slug: "estudiante-unicosta-ganador-prix",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/868631e910338daed004a33b7f261c04987ec288fcd20eb061fe2209e1192c3b?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Acto de clausura de la III edicion de Puentes de Talento",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Jenny Wilson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dfbfa8193d7de805ef4c60b9b68b2ba476d31bed9c937e4d8032b436262947b8?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "12 min",
    slug: "clausura-iii-edicion-puentes",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e19ee1bd47246920a5a0121494878a6ff791b8e5e0fd15d95cc7fde00838509c?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Genera Summit 2024: Acompañanos del 28 al 30 de agosto",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Leslie Alexander",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f84238ff75d83ed948761f2c56c0f543727057d3f01233f5f4f96d8b39bf3c8?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "5 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db88a75330c1d14e13b75ed16ba288aea1c5dfa52129831bcd30a2a391bed94d?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Estudiante UniCosta ganador de Prix French Tech",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Wade Warren",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0193099e7797da6327ebcd0d2c72d94b3ff59a2a14c5fea98abd3ece166eced6?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "7 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/868631e910338daed004a33b7f261c04987ec288fcd20eb061fe2209e1192c3b?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Acto de clausura de la III edicion de Puentes de Talento",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Jenny Wilson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dfbfa8193d7de805ef4c60b9b68b2ba476d31bed9c937e4d8032b436262947b8?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "12 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e19ee1bd47246920a5a0121494878a6ff791b8e5e0fd15d95cc7fde00838509c?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Genera Summit 2024: Acompañanos del 28 al 30 de agosto",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Leslie Alexander",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f84238ff75d83ed948761f2c56c0f543727057d3f01233f5f4f96d8b39bf3c8?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "5 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db88a75330c1d14e13b75ed16ba288aea1c5dfa52129831bcd30a2a391bed94d?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Estudiante UniCosta ganador de Prix French Tech",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Wade Warren",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0193099e7797da6327ebcd0d2c72d94b3ff59a2a14c5fea98abd3ece166eced6?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "7 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/868631e910338daed004a33b7f261c04987ec288fcd20eb061fe2209e1192c3b?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Acto de clausura de la III edicion de Puentes de Talento",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Jenny Wilson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dfbfa8193d7de805ef4c60b9b68b2ba476d31bed9c937e4d8032b436262947b8?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "12 min",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e19ee1bd47246920a5a0121494878a6ff791b8e5e0fd15d95cc7fde00838509c?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    title: "Genera Summit 2024: Acompañanos del 28 al 30 de agosto",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam aperiam commodi incidunt culpa molestiae eveniet obcaecati aspernatur, exercitationem earum dolore blanditiis voluptatem, eaque cupiditate possimus ipsam repellat harum dolor!",
    author: {
      name: "Leslie Alexander",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f84238ff75d83ed948761f2c56c0f543727057d3f01233f5f4f96d8b39bf3c8?apiKey=a388e25d634c4683ada4dcefcdb81b2e&",
    },
    readTime: "5 min",
  },
];

function NewsSection() {
  return (
    <section className="relative flex flex-col justify-center z-0">
      <div className="flex justify-center items-center px-16 py-20 w-full text-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-6 w-full max-w-[1216px] mb-[50px] max-md:mb-10 max-md:max-w-full">
          <SectionHeader title="NOTICIAS" />
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full text-left mt-2">
            Towers Cem y el Mundo
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-10 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <NewsCard {...newsData[0]} />
              </div>
              <div className="relative flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full z-[0]">
                <div className="noticias flex flex-col max-md:mt-8 max-md:max-w-full max-h-[800px] overflow-y-scroll pr-5">
                  {newsData.slice(1).map((news, index) => (
                    <SmallNewsCard key={index} {...news} index={index} />
                  ))}
                  {newsData.slice(1).length > 4 && (
                    <div className="block max-md:hidden mt-[310px] bg-[#1f1f1f]"></div>
                  )}
                  <div className="absolute h-40 w-full bottom-0 degradado z-[10] max-md:hidden"></div>
                </div>
              </div>
            </div>
          </div>
          <SectionHeader title="NEWSLETTER" className="mt-32 max-md:mt-10" />
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full text-left mt-2">
              Nuestros Avances
            </div>
            <div className="mt-12 grid gap-10 grid-col-1 md:grid-cols-2 xl:grid-cols-3  mb-20">
              {newsData.map((news, index) => (
                <NewsletterCard {...news} key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
