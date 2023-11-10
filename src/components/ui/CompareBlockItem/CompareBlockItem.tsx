type compareItemProps = {
  title: string;
  stats?: number | string;
  metric?: string;
};

const CompareBlockItem = ({ title, stats, metric }: compareItemProps) => {
  return (
    <div className="w-full text-zinc-100 font-bold flex flex-col">
      <div className="bg-zinc-600 w-full text-center p-2 max-md:text-xs">
        {title}
      </div>
      <div className="flex flex-col bg-zinc-800 w-full text-center p-2 text-6xl">
        <span className="text-4xl font-medium  max-md:text-xl">{stats}</span>
        <span className="text-xs font-normal">{metric}</span>
      </div>
    </div>
  );
};

export default CompareBlockItem;
