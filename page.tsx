export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">🎯 PromptPackHub</h1>
        <p className="text-gray-600 mb-10">
          Gotowe zestawy promptów do AI, które pomogą Ci zarabiać szybciej i mądrzej.
        </p>

        <div className="grid gap-6">
          {packs.map((pack) => (
            <div key={pack.id} className="bg-white shadow-md p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold">{pack.title}</h2>
              <p className="text-gray-500 mb-4">{pack.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
                Kup za {pack.price} zł
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const packs = [
  {
    id: 1,
    title: "🔹 50 promptów do TikToka",
    description: "Generuj viralowe pomysły, hooki i opisy.",
    price: 19,
  },
  {
    id: 2,
    title: "🛍️ 100 promptów do e-commerce",
    description: "Opisy produktów, reklamy, mailingi – gotowe do użycia.",
    price: 29,
  },
  {
    id: 3,
    title: "💼 CV + LinkedIn Prompty",
    description: "Zbuduj idealne CV i profil pod AI rekruterów.",
    price: 9,
  },
];
