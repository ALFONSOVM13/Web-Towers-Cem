import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../ui/CustomButton"
import Title from "../ui/Title"
import NewsGrid from "./NewsGrid";

const news = [
    {
        title: 'Estudiante UniCosta ganador de Prix French Tech',
        image: '',
        publishedAt: '2024-05-26',
        author: {
            name: 'Wade Warre',
            photo: '',
        },
        slug:''
    },
    {
        title: 'Acto de clausura de la III edicion de Puentes de Talento',
        image: '',
        publishedAt: '2024-05-26',
        author: {
            name: 'Jenny Wilson',
            photo: '',
        },
        slug:''
    },
    {
        title: 'Genera Summit 2024: Acompananos del 28 al 30 de agosto',
        image: '',
        publishedAt: '2024-05-26',
        author: {
            name: 'Leslie Alexander',
            photo: '',
        },
        slug:''
    },
]


const NewsSection = () => {
    return (
        <section className="py-40 px-10 bg-white h-full">
            <div className="flex justify-between">
                <Title text="Noticias" size="large" className="" />
                <CustomButton type="secondary" className="flex items-center gap-x-2 rounded-lg">
                    Ver mas <FaArrowRightLong />
                </CustomButton>
            </div>
            <NewsGrid news={news} />
        </section>
    )
}

export default NewsSection