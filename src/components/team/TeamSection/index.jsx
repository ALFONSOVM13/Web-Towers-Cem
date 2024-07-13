import { team } from "@/services/team";
import { TeamCard } from "../TeamCard";
import "./styles.scss";


export const TeamSection = () => {
    return (
        <section>
            <span>CONOCENOS</span>
            <h2 className="font-title">Nuestro Equipo</h2>
            <p>
                Somos un grupo de trabajo interdisciplinario comprometido con la creación de un futuro mucho más verde para nuestras próximas generaciones, apuntándoles a los objetivos de desarrollo sostenible, innovación e infraestructura, creación de ciudades sostenibles y acción por el clima.
            </p>
            <span className="bg-watermark">Equipo</span>
            <div className="cards">
                {
                    team.map( member => (
                        <TeamCard
                            key={member.id}
                            { ...member }
                        />
                    ))
                }
            </div>
        </section>
    )
}
