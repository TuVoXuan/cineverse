'use client';

import FilmCard from '@/components/Card/FilmCard/FilmCard';

export default function Home() {
  return (
    <div className="p-3">
      <div className="grid grid-cols-2 gap-6">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </div>
  );
}
