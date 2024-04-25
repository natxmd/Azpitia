import CardGeneral from "../components/card/CardGeneral"
import SwiperHero from "../components/swipers/SwiperHero"

const Main = () => {
    return (
        <div className="bg-WhiteA">

            <section id="Hero">
                <SwiperHero />
            </section>

            <section id="Reseñas">

            </section>

            <section id="Razones" className="grid gap-[10px] md:gap-[40px] px-[16px] sm:px-[25px]">
                <CardGeneral
                    imageUrl="/razones/image1.png"
                    title="celebrando el día de la madre"
                    description="Porque no hay mejor momento para reunir a la familia"
                />
                <CardGeneral
                    imageUrl="/razones/image1.png"
                    title="celebrando el día de la madre"
                    description="Porque no hay mejor momento para reunir a la familia"
                />
                <CardGeneral
                    imageUrl="/razones/image1.png"
                    title="celebrando el día de la madre"
                    description="Porque no hay mejor momento para reunir a la familia"
                />
                <CardGeneral
                    imageUrl="/razones/image1.png"
                    title="celebrando el día de la madre"
                    description="Porque no hay mejor momento para reunir a la familia"
                />
                <CardGeneral
                    imageUrl="/razones/image1.png"
                    title="celebrando el día de la madre"
                    description="Porque no hay mejor momento para reunir a la familia"
                />
                <CardGeneral
                    imageUrl="/razones/image1.png"
                    title="celebrando el día de la madre"
                    description="Porque no hay mejor momento para reunir a la familia"
                />
            </section>

            <section id="Casas">

            </section>

        </div>
    )
}

export default Main
