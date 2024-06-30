import NewCard from "./NewCard"

const NewsGrid = ({ news }) => {
    return (
        <div>
            {
                news.map( newItem =>(
                    <NewCard key={newItem.slug} newItem={ newItem } />
                ))
            }
        </div>
    )
}

export default NewsGrid