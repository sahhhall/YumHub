import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <>
      <div className="flex relative">
        <input
          placeholder="Search Restaurent or location"
          className="w-full p-2 border border-gray-400 rounded-md focus:outline-none tracking-widest text-sm font-semibold text-slate-900"
          type="text"
        />
        <Search size={20} className="absolute top-2 right-2" />
      </div>
    </>
  );
};
