import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-0">
        <div 
          className="flex min-h-[480px] md:min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-10 @[480px]:px-12 @[480px]:pb-12 shadow-lg" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUqvt96N0qu5CODbGaEYM5XH5kSBstBfUgFVwd0QM8yqeHLmvpESYMpHKHkk5SLxZygp096AAgPw6MGkBc1NiBbyTF9BlfX0E56QwtC-OrTPD-TUhBcF-yg1tjjEZfjb1J6RGXDXuJgzgH4pNAcj7yp3ANQ9SDb4pDEUTu4ab13KDQQ1l3XdCXtALSBDe96mryd51NZ2zPfdAgHPXVR59nAMUeC2kvMSsECsqcm8eEtiKYfUud5BRHYsevdna3BBZSd7pCA3dydt4")'
          }}
        >
          <div className="flex flex-col gap-3 text-left max-w-2xl animate-fade-in">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
              Bộ Sưu Tập Mùa Thu 2024
            </h1>
            <h2 className="text-slate-100 text-base font-medium leading-normal @[480px]:text-lg">
              Mang đến sự ấm cúng và sang trọng cho không gian sống của bạn với những thiết kế tinh tế và vật liệu cao cấp.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-orange-600 transition-all hover:scale-105 active:scale-95">
            <span className="truncate">Khám Phá Ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;