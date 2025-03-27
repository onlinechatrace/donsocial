export default function Home() {

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-black pb-10 bg-top"
      style={{
        backgroundImage: "url('/chivafoto.png')",
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center flex flex-col justify-center items-center">
        <img src="/chiva77.png" alt="chiva66" className="w-50 h-50 mb-4" />
        <p className="text-5xl font-bold text-white text-shadow mb-4">
          Goat<span className="WIN">66</span>
        </p>
        <p className="text-2xl m-1 text-white">¡Juego inmediato!</p>
        <p className="m-1 text-white mb-6">
          WhatsApp Bot disponible 24/7, <i>todos los días</i>.
        </p>
        {/* ACA ABAJO CAMBIO EL LINK Y NUMERO */}
        <a
          href="https://wa.me/123456789"
          className="ases-button-one text-xl flex justify-center gap-6 items-center"
        >
          <span>¡Contactá ya!</span>
          <img src="/whatsapp.png" alt="chiva66" className="h-8" />
        </a>
        <p className="text-gray-400 text-sm italic m-6">
          Tu juego, sin demoras.
        </p>
      </div>
    </div>
  );
}
