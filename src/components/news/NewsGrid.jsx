import NewCard from "./NewCard"

const NewsGrid = ({ news }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {
                news.map( newItem =>(
                    <NewCard key={newItem.slug} newItem={ newItem } />
                ))
            }
        </div>
    )
}

export default NewsGrid