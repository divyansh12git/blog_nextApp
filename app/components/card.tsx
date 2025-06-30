'use client';

export default function Card({ author, content, date, title }: any) {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 mx-4 my-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_36px_rgba(0,255,200,0.1)] transition-all duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 hover:text-purple-700 transition">
        {title}
      </h2>

      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <span>by <span className=" font-medium text-purple-800">{author}</span></span>
        <span>{date}</span>
      </div>

      <p className="text-gray-300 leading-relaxed tracking-wide text-md">
        {content}
      </p>
    </div>
  );
}

