export function CastCard({photo, actorName, charName}){
    return (
        <article>
            <img src={photo} alt={actorName} className="cast-photo" />
            <h3>{actorName}</h3>
            <p>as {charName}</p>
        </article>
    )
}