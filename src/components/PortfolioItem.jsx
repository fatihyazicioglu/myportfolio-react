import React from 'react';
import img1 from '../public/images/1.png';
import img2 from '../public/images/2.png';
import img3 from '../public/images/3.png';
import img4 from '../public/images/4.png';
import img5 from '../public/images/5.png';
import img6 from '../public/images/6.png';




function PortfolioItem({ title, imgUrl, stack, link }) {
   const handleImgUrl = () => {
      switch (imgUrl) {
         case 1:
            return img1;
         case 2:
            return img2;
         case 3:
            return img3;
         case 4:
            return img4;
         case 5:
            return img5;
         case 6:
            return img6;
         default:
            return img1;
      }
   }
   return (
      <a href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
         <img
            src={handleImgUrl()}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   )
}

export default PortfolioItem;