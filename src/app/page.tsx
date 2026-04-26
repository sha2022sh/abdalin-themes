'use client';

import { useState } from 'react';

// بيانات الثيمات
const themes = [
  {
    id: 1,
    name: 'ثيم إبداع لاين 1',
    description: 'تصميم عصري احترافي لمتجر سلة',
    price: 250,
    oldPrice: 320,
    image: '/sdq.png',
    demoUrl: 'https://demo.abdalin-themes.vercel.app',
    buyUrl: 'https://salla.sa/abdalin/product/1',
    installUrl: 'https://salla.sa/themes/install?theme_id=1'
  },
  {
    id: 2,
    name: 'ثيم إبداع لاين 2',
    description: 'تصميم أنيق بألوان داكنة',
    price: 299,
    oldPrice: 399,
    image: '/sdq.png',
    demoUrl: 'https://demo.abdalin-themes.vercel.app',
    buyUrl: 'https://salla.sa/abdalin/product/2',
    installUrl: 'https://salla.sa/themes/install?theme_id=2'
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const categories = ['الكل', 'الكترونيات', 'مستلزمات', 'أزياء', 'أثاث'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* الهيدر */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">إبداع لاين</h1>
          <p className="text-gray-600 hidden sm:block">موقع عرض وبيع ثيمات لمتجر سلة</p>
        </div>
      </header>

      {/* المحتوى */}
      <div className="max-w-6xl mx-auto p-4">
        
        {/* عنوان */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 mt-8">
          تصفّح الثيمات حسب القطاع
        </h2>

        {/* التصنيفات */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-teal-400 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة الثيمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div key={theme.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              
              {/* صورة الثيم */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <img 
                  src={theme.image} 
                  alt={theme.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  خصم
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{theme.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{theme.description}</p>

                {/* السعر */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-teal-600">{theme.price}﷼</span>
                  <span className="text-gray-400 line-through">{theme.oldPrice}﷼</span>
                </div>

                {/* الأزرار */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => window.open(theme.demoUrl, '_blank')}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>👁️</span> معاينة
                  </button>
                  
                  <button 
                    onClick={() => window.location.href = theme.buyUrl}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>🛒</span> شراء
                  </button>
                  
                  <button 
                    onClick={() => window.location.href = theme.installUrl}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>⚡</span> تثبيت على سلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* عرض المزيد */}
        <div className="text-center mt-12 mb-8">
          <button className="text-teal-600 font-bold hover:text-teal-700 transition flex items-center gap-2 mx-auto">
            عرض المزيد ←
          </button>
        </div>
      </div>

      {/* الفوتر */}
      <footer className="bg-gray-800 text-white p-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">إبداع لاين</h3>
          <p className="text-gray-400">موقع عرض وبيع ثيمات احترافية لمتجر سلة</p>
        </div>
      </footer>
    </main>
  );
}