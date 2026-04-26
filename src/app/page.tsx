export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
          إبداع لاين
        </h1>
        <p className="text-xl mb-10 text-gray-300">
          موقع عرض وبيع ثيمات لمتجر سلة
        </p>
        
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          تثبيت على سلة
        </button>
      </div>
    </main>
  );
}