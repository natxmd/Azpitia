import CardGeneral from "../components/card/CardGeneral"
import SwiperHero from "../components/swipers/SwiperHero"
import CardVideo from "../components/card/CardVideo";
import { useMediaQuery } from "react-responsive";
import SwiperComentarios from "../components/swipers/SwiperComentarios";

const Main = () => {

    const isSm = useMediaQuery({ query: '(min-width: 720px)' })


    return (
        <div className="bg-WhiteA  pt-[50px] sm:pt-[88px] lg:pt-[100px]">
            <section id="Hero">
                <SwiperHero />
            </section>

            <section id="Comentarios">
                <SwiperComentarios />
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
