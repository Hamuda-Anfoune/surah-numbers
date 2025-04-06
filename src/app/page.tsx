import React from "react";
import Link from 'next/link';

export default function Home() {
  return (<div
    className="grid content-center items-center justify-items-center p-8 pb-20 gap-16 sm:p-20"
  >
    <span className="text-4xl">Master the Surah Order: A Fun and Interactive Way</span>

    <ul>
      <li>Effortlessly learn the order and numbers of the Quran&rsquo;s chapters with our engaging app. Three attempts, maximum benefit.</li>
      <li>Interactive quizzes and focused practice to solidify your knowledge of Surah placement.</li>
      <li>Strengthen your connection to the Quran by mastering its structure.</li>
    </ul>

    <span className="text-4xl">Begin Your Memorization Journey</span>

    <Link
      href="/play"
      role="button"
      className="flex items-center justify-center transition-colors h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]
                btn-bordered bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--foreground)] font-medium text-sm sm:text-base"
    >Play Now</Link>
  </div>);
}