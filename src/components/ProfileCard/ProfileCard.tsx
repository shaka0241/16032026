import { useState } from "react";

interface ProfileCardProps {
  profileName: string;
  profileProfession: string;
  profilePhoto: string;
}

const ProfileCard = ({
  profileName,
  profileProfession,
  profilePhoto,
}: ProfileCardProps) => {
  // Definimos el stado del follow
  const [follow, setFollow] = useState(false);

  // Funcion majeadora (opcional porque esto se puede incluir inline)
  const handleChangeFollow = () => {
    setFollow(!follow);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center max-w-xs text-center hover:shadow-lg transition-shadow">
      {/* Imagen dinamica por props */}
      <img
        src={profilePhoto}
        alt={`Foto de ${profileName}`}
        className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm border-2 border-slate-50"
      />

      {/* Textos dinamicos por props */}
      <h2 className="text-xl font-bold text-slate-800">{profileName}</h2>
      <p className="text-slate-500 text-sm mb-6">{profileProfession}</p>

      {/* Boton Interactivo: Usamos el State para cambiar clases de tailwind y el texto */}

      <button
        onClick={handleChangeFollow}
        className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 ${follow ? "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg"}`}
      >
        {follow ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
};

export default ProfileCard;
