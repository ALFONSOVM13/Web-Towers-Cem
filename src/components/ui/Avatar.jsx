import Image from "next/image"


const Avatar = ({ image, title="User avatar", className }) => {
  return (
    <figure className={`rounded-full h-10 w-10 min-w-10 min-h-10 overflow-hidden ${ className }`}>
        <Image
            src={ image }
            alt={ title }
            title="Avatar"
            width={40}
            height={40}
            className="h-full object-cover object-center"
        />
    </figure>
  )
}

export default Avatar