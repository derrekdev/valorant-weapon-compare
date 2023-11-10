import { ReactNode } from "react";

const DamageBlockItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full bg-zinc-800 text-zinc-100 font-bold flex flex-row justify-between p-4">
      <div className="text-teal-200 uppercase w-1/4 max-md:text-xs">
        {title}
      </div>
      <div className="grow text-center flex justify-around w-3/4">
        {children}
      </div>
    </div>
  );
};

export default DamageBlockItem;
