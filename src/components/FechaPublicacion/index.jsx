import { formatearFecha } from "@/utils/fechaFormateada";
import { timeSince } from "@/utils/timeSince";
import { IoIosTime } from "react-icons/io";

const FechaPublicacion = ({ fecha }) => {
  const tiempoDesde = timeSince(fecha);
  const fechaFormateada = formatearFecha(fecha);
  return (
    <span className="flex self-end items-center gap-2 text-lg">
      <IoIosTime className="w-8 h-8" />
      <span className="text-left">
        Publicado hace {tiempoDesde} <br /> {fechaFormateada}
      </span>
    </span>
  );
};

export default FechaPublicacion;
