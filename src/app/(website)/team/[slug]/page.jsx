import Image from "next/image"
import { getMemberBySlug } from "@/services/team"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";


const MemberPage = async ({ params }) => {

    const member = await getMemberBySlug(params.slug)

    return (
        <div className="pb-12 md:pt-40 md:pb-20 max-w-[75rem] mx-auto">

            <article className="grid grid-cols-1 md:grid-cols-2 justify-items-end gap-10">
                <figure className="w-full">
                    <Image
                        src={member.photo}
                        alt={member.name}
                        width={800}
                        height={800}
                    />
                </figure>
                <div className="px-5">
                    <h1 className="text-complementary-200 text-4xl md:text-5xl mb-4 font-title font-bold">{member.name}</h1>
                    <h2 className="text-complementary-400 text-[1.4rem] md:text-3xl mb-5 font-content">{member.position}</h2>
                    <p className="text-complementary-200 md:text-xl font-content text-pretty">{member.about}</p>
                    <ul className="flex gap-5 mt-5 md:mt-8">
                        <li>
                            <a
                                href={member.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-complementary-200 text-2xl md:text-3xl"/>
                            </a>
                        </li>
                        <li>
                            <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn className="text-complementary-200 text-2xl md:text-3xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>

        </div>
    )
}

export default MemberPage