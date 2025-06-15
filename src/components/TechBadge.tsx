
const TechBadge = ({ name }: { name: string }) => {
  return (
    <div className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full border border-border hover:border-primary transition-colors cursor-default">
      {name}
    </div>
  );
};

export default TechBadge;
