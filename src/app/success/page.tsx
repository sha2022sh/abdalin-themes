export default function SuccessPage() {
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      <div className="text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          تم الربط بنجاح!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          تم ربط الثيم بمتجرك في سلة
        </p>
        <a 
          href="https://salla.sa/dashboard"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl inline-block"
        >
          اذهب إلى متجرك
        </a>
      </div>
    </main>
  );
}