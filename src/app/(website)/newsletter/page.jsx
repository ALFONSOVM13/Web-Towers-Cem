import React from "react";
import Link from "next/link";
import newsletterJson from "@/../public/tempData/newsletter.json";
import Image from "next/image";
import Avatar from "@/components/ui/Avatar";
import TimeSince from "@/components/ui/TimeSince";

function FeaturedArticlesSection() {
  const { newsletter } = newsletterJson;

  return (
    <section className="featured-articles-section py-12 px-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Artículos Destacados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12">
          {newsletter.map((newsItem, index) => (
            <Link
              key={newsItem.slug}
              href={`/newsletter/${newsItem.slug}`}
              className={`news-item relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:bg-gray-100 flex flex-col ${
                index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover news-item-image"
              />
              <div className="news-item-content p-6 flex flex-col flex-grow bg-antique-white border-t border-sepia-400">
                <h2 className="news-item-title text-2xl font-bold font-serif text-sepia-800 mb-4 leading-tight">
                  {newsItem.title}
                </h2>
                <hr className="w-20 border-t-4 border-primary-100 mb-4" />
                <p className="news-item-text font-title leading-relaxed mb-4">
                  {newsItem.metadescription}
                </p>
                <div className="news-item-meta mt-auto flex flex-col gap-4">
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
                  <Link
                    href={`/newsletter/${newsItem.slug}`}
                    className="read-more-link text-primary-600 hover:underline mt-4"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticlesSection;
