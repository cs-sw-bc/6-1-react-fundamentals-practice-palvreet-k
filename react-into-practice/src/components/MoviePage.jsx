import { MovieBanner } from "./MovieBanner"
import { MovieDetails } from "./MovieDetails"
import { CastList } from "./CastList"

export function MoviePage(){
    return (
        <main>
            <MovieBanner bannerImage= "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80" title= "Fast and Furious"></MovieBanner>
            <MovieDetails description= "An undercover cop dives into the world of street racing to take down a crew hijacking trucks, but loyalty and family ties blur the line between duty and friendship." year= "2001"></MovieDetails>
            <CastList></CastList>
        </main>
    )
}