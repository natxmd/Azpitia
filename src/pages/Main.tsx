import CardGeneral from "../components/card/CardGeneral"
import SwiperHero from "../components/swipers/SwiperHero"
import CardVideo from "../components/card/CardVideo";
import SwiperComentarios from "../components/swipers/SwiperComentarios";

const Main = () => {


    return (
        <div className="bg-WhiteA pt-[50px] sm:pt-[0px]">
            <section id="Hero">
                <SwiperHero />
            </section>

            <section id="Comentarios">
                <div className="text-center grid gap-[16px] md:gap-[20px] md:pb-[20px]">
                    <h2>reseñas</h2>
                    <p className="text-[#181D15] font-light font-RobotoFlex text-[15px] px-[34px] leading-[19px] 
                        sm:text-[20px] sm:leading-[20px] sm:font-normal
                        lg:text-[30px]">
                        Lee los comentarios de nuestros visitantes.
                    </p>
                </div>
                <SwiperComentarios />
            </section>

            <section id="Razones">
                <div
                    className="containerGeneral">
                    <h2>
                        ¿Por qué ir a azpítia?
                    </h2>
                    <CardGeneral
                        link="https://wa.link/i6ngbh"
                        imageUrl="/razones/image1.png"
                        title="desconéctate en familia"
                        description="Salir de el ruido de la ciudad es la mejor forma de recargar energías"
                    />
                    <CardGeneral
                        link="https://wa.link/x4fgog"
                        imageUrl="/razones/image2.png"
                        title="Descuento de el próximo mes"
                        description="Separa tu fin de semana en un mes en adelante  y obtén 10% DSCTO"
                    />
                    <CardGeneral
                        link="https://wa.link/snmecb"
                        imageUrl="/razones/image3.png"
                        title="full day con amigos"
                        description="Un día para conectar con la naturaleza y desconectar del estrés de la ciudad"
                    />
                    <CardGeneral
                        link="https://wa.link/ftjvmb"
                        imageUrl="/razones/image4.png"
                        title="promoción parejas"
                        description="Separa un fin de semana para ir en pareja a un precio exclusivo."
                    />
                </div>
            </section>

            <section id="Casas">
                <div className="containerGeneral">
                    <h2>nuestras casas</h2>
                    <div className="w-full grid gap-[40px]">
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

        </div>
    )
}

export default Main
