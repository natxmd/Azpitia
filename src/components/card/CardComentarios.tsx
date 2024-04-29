import React from 'react';

interface props {
   name: string;
   rating: number;
   comment: string;
   location: string;
   date: string;
   image: string;
}

const CardComentarios: React.FC<props> = ({ name, rating, comment, location, date, image }) => {

   return (
      <div className="bg-white rounded-[12px] shadow-md  max-w-[344px] w-full h-[360px] pt-[30px] px-[32px] pb-[20px]">
         <div className='flex flex-col justify-between h-full'>
            <div className='grid gap-[16px]'>
               <div className="flex items-center gap-[20px]">
                  <img
                     src={image}
                     alt={name}
                     className="w-[100px] rounded-full"
                  />
                  <div className='grid font-RobotoFlex'>
                     <h3 className="text-xl font-semibold">
                        {name}
                     </h3>
                     <p className="text-[#181D15] font-RobotoFlex">
                        {location}
                     </p>
                  </div>
               </div>
               <div className="flex gap-[10px] items-center ">
                  <div className="flex">
                     {Array.from({ length: rating }, (_, index) => (
                        <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-300 fill-slate-400 stroke-current  mr-1"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2 l 2 7 l 7 1 l -5 4 l 2 7 l -7 -5 l -7 5 l 2 -7 l -5 -4 l 7 -1 z"
                        />
                      </svg>))
                      }
                  </div>
                  <p className="text-[#181D15]">
                     {date}
                  </p>
               </div>
               <p className="text-[#181D15] font-RobotoFlex text-[14px]">
                  {comment}
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
