export function MovieBanner({bannerImage, title}){
    return (
        <section style={{backgroundImage: `url(${bannerImage})`}}>
            <h1>{title}</h1>
        </section>
    )
}
