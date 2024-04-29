import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import CardGeneral from '../card/CardGeneral';

export default function SwiperHero() {
   
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="containerGeneral">
            <SwiperSlide>
               <CardGeneral
                  imageUrl="/razones/image1.png"
                  title="desconéctate en familia"
                  description="Salir de el ruido de la ciudad es la mejor forma de recargar energías"
               />
            </SwiperSlide>
            <SwiperSlide>
               <CardGeneral
                  imageUrl="/razones/image2.png"
                  title="desconéctate en familia"
                  description="Salir de el ruido de la ciudad es la mejor forma de recargar energías"
               />
            </SwiperSlide>
            <SwiperSlide>
               <CardGeneral
                  imageUrl="/razones/image3.png"
                  title="desconéctate en familia"
                  description="Salir de el ruido de la ciudad es la mejor forma de recargar energías"
               />
            </SwiperSlide>
         </Swiper>
      </>
   );
}