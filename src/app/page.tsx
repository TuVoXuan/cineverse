'use client';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <section className="bg-gray-100">
      <Header />
      <div className="mt-3">
        hello world
        <button
          className="p-3 bg-blue-400"
          onClick={() => {
            console.log('hello');
          }}
        >
          hello
        </button>
      </div>
    </section>
  );
}
