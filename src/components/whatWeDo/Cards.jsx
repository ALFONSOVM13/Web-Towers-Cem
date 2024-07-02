import Card from "../ui/Card";

const cardsWhatWeDo =()=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        <Card  title="CONSTRUCTORAS" bgImage="/images/constructoras.jpg"/>
        <Card  title="PREFABRICADOS" bgImage="/images/prefabricados.jpg"/>
        <Card  title="BLOQUERAS" bgImage="/images/bloqueras.webp"/>
      </div>
    )
}
export default cardsWhatWeDo