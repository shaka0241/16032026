import { useState } from "react";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  // Estado que controla el Abrir y Cerrar del Modal
  const [modalOpen, setModalOpen] = useState(false);

  // Array de datos para las tarjetas
  const listFeatures = [
    {
      id: 1,
      icon: "⏱️",
      title: "Pomodoro Integrado",
      description:
        "Bloques de trabajo de 25 minutos para máxima concentración.",
    },
    {
      id: 2,
      icon: "📊",
      title: "Estadísticas",
      description:
        "Mide tu productividad diaria con gráficos fáciles de entender.",
    },
    {
      id: 3,
      icon: "🚫",
      title: "Bloqueador de Apps",
      description:
        "Evita distracciones bloqueando redes sociales automáticamente.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-indigo-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-black mb-6 tracking-tight">
          Recupera tu tiempo con FocusApp
        </h1>
        <p className="text-xl text-indigo-100 mb-10 mx-w-2xl mx-auto">
          La herramienta definitiva para estudiantes y profesionales que quieren
          hacer más en menos tiempo.
        </p>
        {/* Boton que cambia el estado a True */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
        >
          Probar Gratis Ahora
        </button>
      </header>
      {/* Features Section Lista y Keys */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          ¿Por qué elegir FocusApp?
        </h2>
        <div className="grid grid-cols-1 md-:grid-cols-3 gap-8">
          {listFeatures.map((feature) => (
            <FeaturedCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        {/* FOOTER */}
        <footer className="bg-slate-900 text-salte-400 py-8 text-center">
          <p>2026 FocusApp. Todos los derechos Reservados</p>
        </footer>
        {/* Renderizado del modal (Le pasamos el estado y la funcion para cambiarle el estado) */}
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </section>
    </div>
  );
};

export default Home;
