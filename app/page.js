export default function Home() {

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-black pb-10 bg-top"
      style={{
        backgroundImage: "url('/donsocialfoto.png')",
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center flex flex-col justify-center items-center">
        <img src="/94C4CF33-FB93-407D-ACF9-6B5D456F0403.PNG" alt="chiva66" className="w-60 h-60" />
        
        <p className="m-1 text-white text-2xl font-bold mb-1">
        Envianos un WhatsApp<br/>para crear tu cuenta
        </p>
        {/* ACA ABAJO CAMBIO EL LINK Y NUMERO */}
        <a
          href="https://api.whatsapp.com/send/?phone=5493517963503&text=Hola%21+Vi+este+anuncio%2C+quisiera+un+nuevo+usuario.&type=phone_number&app_absent=0"
          className="ases-button-one text-xl flex justify-center gap-3 items-center mt-8 mb-4"
        >
          <span>¡Contactá ya!</span>
          <img src="/whatsapp.png" alt="chiva66" className="h-8" />
        </a>
        <p className="text-2xl m-1 text-white pt-6">¡Juego inmediato!</p>
        <p className="text-gray-400 text-sm italic m-6">
          Tu juego, sin demoras.
        </p>
      </div>
    </div>
  );
}
