import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import CardComentarios from '../card/CardComentarios';

export default function SwiperComentarios() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    270: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: true
                    },
                    360: {
                        slidesPerView: 0.95,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    400: {
                        slidesPerView: 1.05,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    500: {
                        slidesPerView: 1.3,
                        centeredSlides: true
                    },
                    640: {
                        slidesPerView: 1.6,
                        centeredSlides: true
                    },
                    800: {
                        slidesPerView: 1.9,
                    },
                    920: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 2.8,
                        centeredSlides: true
                    },
                    1320: {
                        slidesPerView: 3.8,
                        centeredSlides: true
                    },
                    1400: {
                        slidesPerView: 4,
                        centeredSlides: true
                    },
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                centeredSlides={true}
                className="grid items-center py-[19px]">
                <SwiperSlide>
                    <CardComentarios
                        name= 'Ronald'
                        rating= {5}
                        comment= 'Buen sitio para pasar en familia. Cero bullas y en tranquilidad.'
                        location= '3 años en Airbnb'
                        date= 'julio de 2023'
                        image= '/reseñas/ronald.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Victor'
                        rating= {5}
                        comment= 'El anfitrión estuvo atento constantemente a cualquier duda que pudiese presentar. Atento y amable. todo OK con el hospedaje'
                        location= '3 años en Airbnb'
                        date= 'mayo de 2023'
                        image= '/reseñas/victor.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Fredy'
                        rating= {5}
                        comment= 'Buen sitio para pasar en familia. Cero bullas y en tranquilidad.'
                        location= '3 años en Airbnb'
                        date= 'agosto de 2023'
                        image= '/reseñas/fredy.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Mayra'
                        rating= {5}
                        comment= 'Fernando fue muy amable al comunicarse dando información necesaria muy rápido y la Sra Gloria es muy atenta y servicial. Me sentí bien atendida y como en casa.'
                        location= 'Región de Lima, Perú.'
                        date= 'marzo de 2023'
                        image= '/reseñas/mayra.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'María'
                        rating= {5}
                        comment= 'Excelente estadía, la casa está bien equipada. Wilson es una persona super atenta y amable, nos ayudó prendiendo el horno. Toda la casa y la piscina se encontraba limpia. '
                        location= 'El Agustino, Perú'
                        date= 'febrero de 2023'
                        image= '/reseñas/maria.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'María Elena'
                        rating= {5}
                        comment= 'Excelente lugar para desconectarte, la zona es muy tranquila, fuimos con mi esposo y nuestra perrita, la pasamos muy bien. La casa tiene buenas instalaciones e implementos. El anfitrión es muy atento a cualquier consulta.'
                        location= 'Región de Lima, Perú'
                        date= 'septiembre de 2023'
                        image= '/reseñas/mariaelena.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Cinthia'
                        rating= {5}
                        comment= 'Las áreas verdes fue lo que mas me gusto a mí y a mi perritos, todo tal cual las fotos. Los anfitriones súper amables, hermoso, nos encataria volver.'
                        location= '1 año en Airbnb'
                        date= 'noviembre de 2022'
                        image= '/reseñas/cinthia.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Renattha'
                        rating= {5}
                        comment= 'Excelente lugar para hospedarse y liberarse del bullicio, la rutina, despejarse de la ciudad, y lo mejor, que es pet friendly. Fui con mi familia (4 adultos, 1 niña) y mis 3 perritos, nos sentimos súper tranquilos.'
                        location= 'Lima. Perú'
                        date= 'septiembre de 2023'
                        image= '/reseñas/renattha.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Eleska'
                        rating= {5}
                        comment= 'Todo muy bien, la pasamos increíble. Diego un super anfitrión. que decir del Sr. Wilson. Una recomendación para los huéspedes. lleven repelente porque hay muchos mosquitos por la zona. El lugar espectacular.'
                        location= 'Lurigancho-Chosica'
                        date= 'enero de 2022'
                        image= '/reseñas/eleska.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Christine'
                        rating= {5}
                        comment= 'Es un lugar muy original y alegre gracias a las murales y plantas. La casa es chiquitita pero tiene todo lo necesario para una estadía. la jardínes muy grande y bordeado por vallas entonces es perfecto.'
                        location= 'Colchester, Reino Unido'
                        date= 'marzo de 2022'
                        image= '/reseñas/christine.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Diana'
                        rating= {5}
                        comment= 'Todo muy bien, la casa es muy linda y funcional, la pasamos excelente en familia, muy cerca de Azpítia y de el otro pueblo, con todas las comodidades. Definitivamente volvería.'
                        location= 'Región de Lima, Perú'
                        date= 'mayo de 2023'
                        image= '/reseñas/diana.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Andrea'
                        rating= {5}
                        comment= 'Todo muy lindo! La casa es muy bonita y el clima templado. Tiene todo lo que uno necesita para pasar unos días y el diseño minimalista es realmente un respiro. Espero volver pronto!'
                        location= 'San Isidro, Perú'
                        date= 'agosto de 2022'
                        image= '/reseñas/andrea.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Erick'
                        rating= {5}
                        comment= 'Buen sitio para pasar en familia. Cero bullas y en tranquilidad.'
                        location= 'El Agustino, Perú'
                        date= 'agosto de 2023'
                        image= '/reseñas/erick.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Geraldine'
                        rating= {5}
                        comment= 'El lugar muy cómodo ,agradable y limpio ,donde se pueden obtenermuy buenas experiencias'
                        location= 'Los Olivos. Perú'
                        date= 'agosto de 2022'
                        image= '/reseñas/geraldine.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Isaías'
                        rating= {5}
                        comment= 'excelente lugar para pasar en familia o amigos, todo limpio y ordenado. El anfitrión es atento y el espacio es amplio'
                        location= '2 años en Airbnb'
                        date= 'enero de 2023'
                        image= '/reseñas/isaias.png'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComentarios
                        name= 'Rosmery'
                        rating= {4}
                        comment= 'Un lugar lindo con lo necesario para desconectarnos y pasar un lindo momento. Recomendado para familias.'
                        location= '2 años en Airbnb'
                        date= 'marzo de 2022'
                        image= '/reseñas/rosmery.png'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}