import ProfileCard from "../components/ProfileCard/ProfileCard";

const View = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-black text-slate-800 mb-10">
        Sugerencias para ti
      </h1>
      {/* Contenedor flex para alinear las tarjetas */}
      <div className="flex flex-wrap justify-center gap-8">
        <ProfileCard
          profileName="Ana"
          profilePhoto="https://i.pravatar.cc/300"
          profileProfession="Developer"
        />
        <ProfileCard
          profileName="Bouchra"
          profilePhoto="https://i.pravatar.cc/300"
          profileProfession="Developer"
        />
        <ProfileCard
          profileName="Alberto"
          profilePhoto="https://i.pravatar.cc/300"
          profileProfession="Developer"
        />
      </div>
    </div>
  );
};

export default View;
