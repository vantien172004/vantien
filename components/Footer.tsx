import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/5 dark:bg-white/5 mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-50">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight">FurniHome</h2>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Không gian sống đẳng cấp, khẳng định phong cách độc bản của bạn với nội thất tinh tế.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">Sản phẩm</h3>
            <ul className="flex flex-col gap-3">
              {['Phòng Khách', 'Phòng Ngủ', 'Phòng Ăn', 'Trang Trí'].map((item) => (
                <li key={item}>
                  <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">Về Chúng Tôi</h3>
            <ul className="flex flex-col gap-3">
              {['Câu chuyện', 'Sự bền vững', 'Tuyển dụng', 'Blog'].map((item) => (
                <li key={item}>
                  <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">Hỗ Trợ</h3>
            <ul className="flex flex-col gap-3">
              {['Liên hệ', 'Chính sách đổi trả', 'Bảo hành', 'FAQ'].map((item) => (
                <li key={item}>
                  <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">Đăng ký nhận tin</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="form-input w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                placeholder="Nhập email của bạn" 
                type="email"
              />
              <button 
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white hover:bg-orange-600 transition-colors" 
                type="submit"
              >
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">© 2024 FurniHome. All rights reserved.</p>
          <div className="flex gap-6">
             {/* Social Placeholders */}
             {['facebook', 'instagram', 'twitter'].map((social) => (
                 <a key={social} href="#" className="text-slate-400 hover:text-primary transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-50"></div>
                 </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;