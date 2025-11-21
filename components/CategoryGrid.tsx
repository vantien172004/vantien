import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryGrid: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center px-0 pb-2 pt-5">
        <h2 className="text-slate-900 dark:text-slate-50 text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em]">
          Danh Mục Nổi Bật
        </h2>
        <a href="#" className="text-primary hover:text-orange-600 text-sm font-bold flex items-center gap-1">
           Xem tất cả <span className="material-symbols-outlined" style={{fontSize: '18px'}}>arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {CATEGORIES.map((category) => (
          <a key={category.id} href={`#${category.id}`} className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div 
              className="aspect-[3/4] w-full relative overflow-hidden rounded-xl"
            >
               {/* Background Image Layer */}
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                 style={{ backgroundImage: `url("${category.backgroundUrl}")` }}
               />
               
               {/* Overlay Layer for Better Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

               {/* Content */}
               <div className="absolute bottom-0 left-0 p-4 sm:p-5 w-full">
                  <p className="text-white text-xl font-bold leading-tight transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    {category.title}
                  </p>
                  <div className="h-1 w-8 bg-primary mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" />
               </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;