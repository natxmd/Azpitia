import CardGeneral from "../components/card/CardGeneral"
import CardComentarios from "../components/card/CardComentarios"
import SwiperHero from "../components/swipers/SwiperHero"
import CardVideo from "../components/card/CardVideo";
import { useMediaQuery } from "react-responsive";

const Main = () => {
    const reviews = [
        {
            id: 1,
            name: 'Ronald',
            rating: 5,
            comment: 'Buen sitio para pasar en familia. Cero nullas y en tranquilidad.',
            location: '3 años en Airbnb',
            date: 'julio de 2023',
            image: '/reseñas/ronald.png'
        },
    ];
    const isSm = useMediaQuery({ query: '(min-width: 720px)' })


    return (
        <div className="bg-WhiteA">

            <section id="Hero">
                <div className="containerGeneral">
                    <SwiperHero/>
                </div>
            </section>

            <section id="Reseñas">
                <div className="containerGeneral">
                    {reviews.map(review => (
                        <CardComentarios key={review.id} review={review} />
                    ))}
                </div>
            </section>

            <section id="Razones">
                <div
                    className="containerGeneral">
                    <h2>
                        porqué ir a azpítia
                    </h2>
                    <CardGeneral
                        imageUrl="/razones/image1.png"
                        title="desconéctate en familia"
                        description="Salir de el ruido de la ciudad es la mejor forma de recargar energías"
                    />
                    <CardGeneral
                        imageUrl="/razones/image2.png"
                        title="Descuento de el próximo mes"
                        description="Separa tu fin de semana en un mes en adelante  y obtén 10% DSCTO"
                    />
                    <CardGeneral
                        imageUrl="/razones/image3.png"
                        title="full day con amigos"
                        description="Un día para conectar con la naturaleza y desconectar del estrés de la ciudad"
                    />
                    <CardGeneral
                        imageUrl="/razones/image4.png"
                        title="promoción parejas"
                        description="Separa un fin de semana para ir en pareja a un precio exclusivo."
                    />
                </div>
            </section>

            {
                isSm ?
                    <section id="Casas">
                        <div className="containerGeneral">
                            <h2>nuestras casas</h2>
                            <div className="grid items-center justify-center gap-[40px]">
                                <CardVideo
                                    link="https://www.youtube.com/embed/yRFWBwCnhqY"
                                    title="Casa Mural 2024"
                                />
                                <CardVideo
                                    link="https://www.youtube.com/embed/NCcFUi2Q5bQ"
                                    title="Casa Santorini 2024"
                                />
                                <CardVideo
                                    link=""
                                    title=""
                                />
                            </div>
                        </div>
                    </section>
                    :
                    null
            }
        </div>
    )
}

export default Main
