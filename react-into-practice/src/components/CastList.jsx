import { CastCard } from "./CastCard";

export function CastList(){
    return (
        <section >
            <h2>Cast</h2>
            <div>
            <CastCard photo = "https://randomuser.me/api/portraits/men/1.jpg" actorName= "John" charName= "Roy" ></CastCard>
            <CastCard photo = "https://randomuser.me/api/portraits/men/2.jpg" actorName= "Rohn" charName= "Joy" ></CastCard>
            <CastCard photo = "https://randomuser.me/api/portraits/men/3.jpg" actorName= "Vohn" charName= "Troy" ></CastCard>
            </div>
        </section>
    )
}