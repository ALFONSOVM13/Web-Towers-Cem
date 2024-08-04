import Link from "next/link";
import Avatar from "../ui/Avatar";
import Image from "next/image";

function SmallNewsCard({ image, title, author, readTime, slug, className="", imageClassName="" }) {
  return (

    <article
      className={`flex flex-col xl:flex-row gap-4 ${className}`}
    >
      <Link 
        href={`/noticias/${slug}`} 
        alt={slug}
        className="group"
      >
        <figure className={`relative aspect-video xl:aspect-square xl:w-40 overflow-hidden rounded-md border border-zinc-200/70 ${ imageClassName }`}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="rounded-md object-cover object-center h-full w-full transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
          />
        </figure>
      </Link>
      <div className="flex-1 flex flex-col gap-4">
        <Link
          href={`/noticias/${slug}`}
          alt={slug}
          className=""
        >
          <h3 className="text-lg lg:text-[1.3rem] font-content tracking-tight lg:leading-8 text-left text-pretty">
            {title}
          </h3>
        </Link>
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar image={author.avatar} title={author.name} />
            <p className="font-semibold text-sm">{author.name}</p>
          </div>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default SmallNewsCard;