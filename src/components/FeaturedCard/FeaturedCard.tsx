interface FeaturedCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeaturedCard = ({ icon, title, description }: FeaturedCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shhadow-sm border border-slate-100 hover:shadow-dm transition-shadow text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeaturedCard;
