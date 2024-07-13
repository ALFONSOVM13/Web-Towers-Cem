'use client'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./styles.scss";
import { useRouter } from "next/navigation";

export const TeamCard = ({ name, photo, position, social, slug }) => {
    
    const router = useRouter()

    return (
        <div 
            onClick={()=>router.push(`/team/${slug}`)} 
            className="card"
        >
            <img src={ photo } alt={ name } />
            <div className="card-content">
                <h3>{ name }</h3>
                <p>{ position }</p>
                <ul>
                    <li>
                        <a 
                            href={ social.instagram }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram id="red" className="fa-brands fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href={ social.linkedin }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn id="red" className="fa-brands fa-linkedin-in" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
