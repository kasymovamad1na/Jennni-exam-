import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-[650px]">

      {/* Фотографии */}
      <div className="grid grid-cols-3 h-full">

        {/* Первая */}
        <div className="relative">
          <img
            src="/1photo.svg"
            alt="hero1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#5B1D1D]/50"></div>
        </div>

        {/* Вторая */}
        <div className="relative">
          <img
            src="/2photo.svg"
            alt="hero2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600/50"></div>
        </div>

        {/* Третья */}
        <div className="relative">
          <img
            src="/3photo.svg"
            alt="hero3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#5B1D1D]/50"></div>
        </div>

      </div>

      {/* Текст */}
   <div className="absolute inset-0 flex items-center justify-center mt-35">
  <div
    className="w-[520px] h-[209px] bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center"
  >
    <h1 className="text-white text-6xl font-bold mb-4">
      Новинки
    </h1>

    <p className="text-white text-center mb-6">
      Сочетание комфорта и элегантности
      <br />
      для нового сезона.
    </p>

    <Link
      to="/catalog"
      className="bg-red-600 text-white px-8 py-3"
    >
      Каталог
    </Link>
  </div>
</div>
    </section>
  );
}

export default Hero;