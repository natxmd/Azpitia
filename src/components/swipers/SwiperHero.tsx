import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardGeneral from '../card/CardGeneral';

export default function SwiperHero() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <CardGeneral
            imageUrl="/hero/img1.png"
            title="promoción parejas"
            description="Separa un fin de semana para ir en pareja a un precio exclusivo."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
