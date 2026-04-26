'use client';

import { useState } from 'react';

// بيانات الثيمات
const themes = [
  {
    id: 1,
    name: 'ثيم إبداع لاين',
    description: 'تصميم عصري احترافي لمتجر سلة مع دعم كامل للعربية',
    price: 250,
    oldPrice: 350,
    image: '/sdq.png',
    category: 'الكترونيات',
    rating: 4.9,
    sales: 128,
  },
  {
    id: 2,
    name: 'ثيم الأناقة',
    description: 'تصميم أنيق بألوان داكنة مناسب للأزياء',
    price: 299,
    oldPrice: 399,
    image: '/sdq.png',
    category: 'أزياء',
    rating: 4.8,
    sales: 96,
  },
  {
    id: 3,
    name: 'ثيم البساطة',
    description: 'تصميم بسيط وخفيف للمستلزمات',
    price: 199,
    oldPrice: 299,
    image: '/sdq.png',
    category: 'مستلزمات',
    rating: 4.7,
    sales: 84,
  },
];

const categories = ['الكل', 'الكترونيات', 'أزياء', 'مستلزمات', 'أثاث', 'مطاعم'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredThemes = activeCategory === 'الكل' 
    ? themes 
    : themes.filter(t => t.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6366F1] to-[#10B981] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">إ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#6366F1] to-[#10B981] bg-clip-text text-transparent">
                إبداع لاين
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">الرئيسية</a>
              <a href="#" className="hover:text-white transition">الثيمات</a>
              <a href="#" className="hover:text-white transition">الأسعار</a>
              <a href="#" className="hover:text-white transition">الدعم</a>
            </div>
            <button className="bg-gradient-to-r from-[#6366F1] to-[#10B981] text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">أكثر من 500 متجر يثق بنا</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            ثيمات احترافية لـ{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#10B981] bg-clip-text text-transparent">
              متجر سلة
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            اختر من مجموعة واسعة من الثيمات العصرية المصممة خصيصاً لمتجرك. 
            تثبيت فوري، دعم كامل، تحديثات مجانية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#6366F1] to-[#10B981] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all hover:scale-105">
              استكشف الثيمات
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              جرب مجاناً
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'متجر نشط' },
              { number: '50+', label: 'ثيم احترافي' },
              { number: '99.9%', label: 'وقت تشغيل' },
              { number: '24/7', label: 'دعم فني' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#10B981] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اختر ثيمك المفضل
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              ثيمات مصممة بعناية لتناسب جميع أنواع المتاجر
            </p>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#10B981] text-white shadow-lg shadow-[#6366F1]/25'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map((theme) => (
              <div
                key={theme.id}
                className="group relative bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 hover:border-[#6366F1]/50 transition-all duration-500"
                onMouseEnter={() => setHoveredCard(theme.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#10B981]/20" />
                  <img 
                    src={theme.image} 
                    alt={theme.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === theme.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredCard === theme.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    خصم {Math.round((1 - theme.price / theme.oldPrice) * 100)}%
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#10B981] font-bold bg-[#10B981]/10 px-2 py-1 rounded-full">
                      {theme.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <span>★</span>
                      <span>{theme.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                    {theme.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {theme.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-[#10B981]">{theme.price}﷼</span>
                    <span className="text-gray-500 line-through text-sm">{theme.oldPrice}﷼</span>
                    <span className="text-xs text-gray-400">({theme.sales} مبيع)</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#10B981] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all hover:scale-[1.02]">
                      تثبيت على سلة
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-white/5 text-gray-300 font-bold py-2.5 rounded-xl hover:bg-white/10 transition-all text-sm">
                        👁️ معاينة
                      </button>
                      <button className="flex-1 bg-white/5 text-gray-300 font-bold py-2.5 rounded-xl hover:bg-white/10 transition-all text-sm">
                        🛒 شراء
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#6366F1]/20 to-[#10B981]/20 rounded-3xl p-12 text-center border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                جاهز تطلق متجرك؟
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                ابدأ الآن واحصل على ثيم احترافي لمتجرك في دقائق
              </p>
              <button className="bg-gradient-to-r from-[#6366F1] to-[#10B981] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all hover:scale-105">
                ابدأ مجاناً
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0F172A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#6366F1] to-[#10B981] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">إ</span>
                </div>
                <span className="text-xl font-bold">إبداع لاين</span>
              </div>
              <p className="text-gray-400 text-sm">
                منصة احترافية لبيع وشراء ثيمات متجر سلة
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
                <li><a href="#" className="hover:text-white transition">الثيمات</a></li>
                <li><a href="#" className="hover:text-white transition">الأسعار</a></li>
                <li><a href="#" className="hover:text-white transition">المدونة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white transition">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تابعنا</h4>
              <div className="flex gap-3">
                {['X', 'in', 'IG'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            © 2026 إبداع لاين. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
}