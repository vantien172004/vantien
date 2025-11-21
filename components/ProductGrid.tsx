import React from 'react';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center px-0 pb-2 pt-5">
        <h2 className="text-slate-900 dark:text-slate-50 text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em]">
          Sản Phẩm Bán Chạy
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img 
                src={product.imageUrl} 
                alt={product.title}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              {/* Quick Add Button */}
              <button 
                className="absolute bottom-3 right-3 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white text-primary shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-white"
                title="Thêm vào giỏ"
              >
                <span className="material-symbols-outlined">add_shopping_cart</span>
              </button>

              {/* Wishlist Badge (Optional visual enhancement) */}
               <button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white">
                  <span className="material-symbols-outlined" style={{fontSize: '20px'}}>favorite</span>
               </button>
            </div>
            
            <div className="py-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-base font-semibold text-primary">
                {product.price}
              </p>
              <div className="flex items-center gap-1 mt-1">
                 {[1,2,3,4,5].map(star => (
                    <span key={star} className="material-symbols-outlined text-yellow-400" style={{fontSize: '16px', fontVariationSettings: "'FILL' 1"}}>star</span>
                 ))}
                 <span className="text-xs text-slate-400 ml-1">(24)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;