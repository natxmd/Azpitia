import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardGeneral from '../card/CardGeneral';
import { Pagination } from 'swiper/modules';

export default function SwiperHero() {

   return (
      <>
         <Swiper
            spaceBetween={40}
            pagination={true}
            loop={true}
            modules={[Pagination]}
            className="containerGeneral">
            <SwiperSlide>
               <CardGeneral
                  link='https://wa.link/zpkxvp'
                  imageUrl="/hero/img1.png"
                  title="celebrando el día de la madre"
                  description="Porque no hay mejor momento para reunir a la familia"
               />
            </SwiperSlide>
            <SwiperSlide>
               <CardGeneral
                  link='https://wa.link/k2cdaz'
                  imageUrl="/hero/img2.png"
                  title="pet friendly"
                  description="Donde los peluditos son bienvenidos"
               />
            </SwiperSlide>
            <SwiperSlide>
               <CardGeneral
                  link='https://wa.link/1pc2vn'
                  imageUrl="/hero/img3.png"
                  title="HOME OFFICE"
                  description="Hacer teletrabajo lejos de la ciudad y en la tranquilidad del campo"
               />
            </SwiperSlide>
         </Swiper>
      </>
   );
}