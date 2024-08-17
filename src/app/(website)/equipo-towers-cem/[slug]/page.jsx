import Image from "next/image"
import { getMemberBySlug } from "@/services/team"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";


const MemberPage = async ({ params }) => {

    const member = await getMemberBySlug(params.slug)

    return (
        <section className="bg-[#171717]">
            <div className="pb-12 md:pt-44 md:pb-20 max-w-[75rem] mx-auto">
                <article className="grid grid-cols-1 md:grid-cols-2 justify-items-end gap-10">
                    <figure className="w-full">
                        <Image
                            src={member.photo}
                            alt={member.name}
                            title="Foto de perfil"
                            width={800}
                            height={800}
                        />
                    </figure>
                    <div className="px-5">
                    <h1 className="text-complementary-200 text-4xl md:text-5xl mb-4 font-title font-bold">{member.name}</h1>
                        <h2 className="text-complementary-400 text-[1.4rem] md:text-3xl mb-5 font-title">{member.position}</h2>
                        <p className="text-complementary-100 font-title text-[17.946px] leading-[28.7136px] text-pretty md:text-justify">{member.about}</p>
                        <ul className="flex gap-5 mt-5 md:mt-8">
                            <li>
                                <a
                                    href={member.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="text-complementary-200 text-2xl md:text-[1.6rem] hover:scale-105"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={member.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="text-complementary-200 text-2xl md:text-1.7rem] hover:scale-105" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>


        </section>
    )
}

export default MemberPage