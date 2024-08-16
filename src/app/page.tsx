'use client';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <section>
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
      <Footer />
    </section>
  );
}
