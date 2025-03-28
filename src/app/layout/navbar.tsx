"use client"
import Image from "next/image";

export default function Navbar () {
  return (
    <nav className="bordered-bt pt-4 h-[var(--nav-height)]">
      <div className="container mx-auto flex justify-between items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/images/signs/arrow-left.svg"
            alt="Back"
            width={20}
            height={20}
          />
        </a>
      </div>
    </nav>
  )
}