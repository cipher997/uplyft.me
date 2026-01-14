import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <p className="text-5xl md:text-6xl font-bold">
          Uplyft
        </p>
        <p className="mt-4 max-w-xl text-lg text-red-600">
          We are a modern agency delivering high-quality web and application
          solutions for growing businesses.
        </p>

        <button className="mt-6 rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800">
          Get in Touch
        </button>
      </section>
    </main>
  );
}
