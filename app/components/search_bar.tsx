'use client';

export default function Search(props: any) {
  return (
    <div className="flex mt-10 w-full justify-center gap-4">
      <input
        type="text"
        placeholder="Search blog titles..."
        onChange={props.handleChange}
        className="w-[30%] bg-[#1e293b] border border-gray-700 text-white h-10 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 transition"
      />
      <button
        onClick={props.handleClick}
        className="px-5 h-10 bg-purple-800 hover:bg-purple-700 text-white rounded-lg transition font-semibold"
      >
        Search
      </button>
    </div>
  );
}
