import Image from "next/image"


const Avatar = ({ image, title="User avatar", className }) => {
  return (
    <figure className={`rounded-full h-10 w-10 overflow-hidden ${ className }`}>
        <Image
            src={ image }
            alt={ title }
            width={40}
            height={40}
            className="h-full object-cover object-center"
        />
    </figure>
  )
}

export default Avatar