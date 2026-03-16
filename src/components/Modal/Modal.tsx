interface ModalProps {
  isOpen: boolean;
  onClose: () => void; //Tipado de una funcion que no devuelve nada
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  // Si no esta abierto, no se renderiza nada
  if (!isOpen) return null;
  return (
    // Fondo Oscuro que cubrira toda la pantalla (Fijado encima de todo)
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Contenedor de todo el modal */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full relative transform transition-all animate-fade-in-up">
        {/* Boton Cerrar en la esquina (ejecuta la funcion) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-xl"
        >
          x
        </button>
        <h2 className="text-2xl font-black text-indigo-600 mb-2">
          Unete a la Beta!
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          Dejanos tu email y te contactaremos cuando la FocusApp este ready!
        </p>
        <input
          type="email"
          placeholder="algo@algo.com"
          className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:border-indigo-500"
        />
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors"
          onClick={onClose}
        >
          Enviar Solicitud
        </button>
      </div>
    </div>
  );
};

export default Modal;
