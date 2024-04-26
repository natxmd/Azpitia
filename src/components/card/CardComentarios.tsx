import React from 'react';

interface Review {
   id: number;
   name: string;
   rating: number;
   comment: string;
   location: string;
   date: string;
   image: string;
}

const CardComentarios: React.FC<{ review: Review }> = ({ review }) => {

   return (
      <div className="bg-white rounded-[12px] shadow-md w-[344px] h-[344px] pt-[46px] px-[32px] pb-[20px]">
         <div className='flex flex-col justify-between h-full'>
            <div className='grid gap-[16px]'>
               <div className="flex items-center gap-[32px]">
                  <img 
                     src={review.image} 
                     alt={review.name} 
                     className="w-[100px] rounded-full" 
                  />
                  <div>
                     <h3 className="text-xl font-semibold">
                        {review.name}
                     </h3>
                     <p className="text-gray-600">
                        {review.location}
                     </p>
                  </div>
               </div>
               <div className="flex items-center ">
                  <div className="flex">
                     {Array.from({ length: review.rating }, (_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5 text-yellow-500 fill-current mr-1"
                           viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd"
                              d="M10 0l2.5 6.5L20 7l-5 5 1.5 6L10 17l-5.5 3 1.5-6-5-5 7.5-0.5L10 0z"
                              clipRule="evenodd"
                           />
                        </svg>
                     ))}
                  </div>
                  <p className="text-gray-600">
                     {review.date}
                  </p>
               </div>
               <p className="text-gray-800">
                  {review.comment}
               </p>
            </div>
            <img 
               src="/icons/airbnb.svg" 
               alt="Airbnb"
               className='w-[80px] h-[30px]'
            />
         </div>
      </div>
   );
};

export default CardComentarios;
