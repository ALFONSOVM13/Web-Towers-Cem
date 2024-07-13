import { getMemberBySlug } from "@/services/team"


const MemberPage = async({ params }) => {

    const member = await getMemberBySlug( params.slug )

    return (
        <div className="py-40">
            <h1 className="text-white text-2xl">{ member.name }</h1>
        </div>
    )
}

export default MemberPage