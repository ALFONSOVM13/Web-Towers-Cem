import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../ui/CustomButton"
import Title from "../ui/Title"
import NewsGrid from "./NewsGrid";

const news = [
    {
        title: 'Estudiante UniCosta ganador de Prix French Tech',
        image: '/images/new_01.jpg',
        publishedAt: '2024-06-27',
        author: {
            name: 'Wade Warre',
            photo: '/images/wade-warren.jpg',
        },
        slug:'estudiante-unicosta-ganador-de-prix-french-tech'
    },
    {
        title: 'Acto de clausura de la III edicion de Puentes de Talento',
        image: '/images/new_02.jpg',
        publishedAt: '2024-06-16',
        author: {
            name: 'Jenny Wilson',
            photo: '/images/leslie-alexander.jpg',
        },
        slug:'acto-de-clausura-de-la-iii-edicion-de-puentes-de-talento'
    },
    {
        title: 'Genera Summit 2024: Acompananos del 28 al 30 de agosto',
        image: '/images/new_03.jpg',
        publishedAt: '2024-05-26',
        author: {
            name: 'Leslie Alexander',
            photo: '/images/jenny-wilson.jpg',
        },
        slug:'genera-summit-2024-acompananos-del-28-al-30-de-agosto'
    },
]


const NewsSection = () => {
    return (
        <section className="py-40 px-10 bg-white h-full">
            <div className="flex justify-between items-center mb-10">
                <Title text="Noticias" size="large" />
                <CustomButton type="secondary" className="flex items-center gap-x-2 rounded-3xl">
                    Ver mas <FaArrowRightLong />
                </CustomButton>
            </div>
            <NewsGrid news={news} />
        </section>
    )
}

export default NewsSection