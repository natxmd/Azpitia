import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardGeneral from '../card/CardGeneral';

export default function SwiperHero() {
   
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            className="containerGeneral">
            <SwiperSlide>
               <CardGeneral
                  imageUrl="/hero/img1.png"
                  title="celebrando el día de la madre"
                  description="Porque no hay mejor momento para reunir a la familia"
               />
            </SwiperSlide>
            <SwiperSlide>
               <CardGeneral
                  imageUrl="/hero/img2.png"
                  title="pet friendly"
                  description="Donde los peluditos son bienvenidos"
               />
            </SwiperSlide>
            <SwiperSlide>
               <CardGeneral
                  imageUrl="/hero/img3.png"
                  title="HOME OFFICE"
                  description="Hacer teletrabajo lejos de la ciudad y en la tranquilidad del campo"
               />
            </SwiperSlide>
         </Swiper>
      </>
   );
}