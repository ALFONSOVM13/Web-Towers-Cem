import Image from "next/image"
import Avatar from "../ui/Avatar"
import TimeSince from "../ui/TimeSince"
import Link from "next/link"


const NewCard = ({ newItem }) => {

    const { title, image, publishedAt, author, slug } = newItem

    return (
        <div className="flex flex-col">
            <Link href={`${slug}`}>
                <figure className="group h-52 lg:h-64 rounded-lg overflow-hidden mb-2">
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500"
                    />
                </figure>
            </Link>
            <Link href={`noticias/${slug}`} className="flex-1 hover:text-primary-200 mb-5 md:mb-2">
                <h3 className="font-bold text-xl sm:text-2xl sm:leading-9">{ title }</h3>
            </Link>
            <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-3">
                    <Avatar image={ author.photo } title={ author.name } />
                    <p className="font-semibold">{ author.name }</p>
                </div>
                <TimeSince date={ new Date(publishedAt) } />
            </div>
        </div>
    )
}

export default NewCard