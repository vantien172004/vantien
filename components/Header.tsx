import React, { useState } from 'react';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm w-full">
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 px-4 sm:px-6 lg:px-10 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3 text-slate-900 dark:text-slate-50 cursor-pointer">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">FurniHome</h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['Phòng Khách', 'Phòng Ngủ', 'Phòng Ăn', 'Đồ Trang Trí'].map((item) => (
              <a 
                key={item}
                className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" 
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-1 justify-end gap-2 sm:gap-4">
          {/* Search Bar */}
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-slate-500 dark:text-slate-400 flex bg-black/5 dark:bg-white/5 items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-black/5 dark:bg-white/5 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" 
                placeholder="Tìm kiếm sản phẩm..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </label>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-black/5 dark:bg-white/5 text-slate-800 dark:text-slate-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-black/5 dark:bg-white/5 text-slate-800 dark:text-slate-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-black/5 dark:bg-white/5 text-slate-800 dark:text-slate-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;