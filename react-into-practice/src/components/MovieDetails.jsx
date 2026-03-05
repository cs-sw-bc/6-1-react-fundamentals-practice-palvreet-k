export function MovieDetails({description, year}){
    return (
        <article className="movie-details">
            <h2>Overview</h2>
            <p>{description}</p>
            <p><strong>Release Year:</strong> {year}</p>
        </article>
    )
}