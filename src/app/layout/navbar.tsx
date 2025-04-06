"use client"

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

export default function Navbar () {
  const pathname = usePathname();

  return (
    <nav className="bordered-bt h-[var(--nav-height)] pt-4 px-4 sm:px-4 md:px-8 lg:px-14 xl-20">
      <div className="container flex justify-between items-center">
        { pathname !== '/' && 
          <Link
            href="/"
          >
            <Image
              className="dark:invert"
              src="/images/signs/arrow-left.svg"
              alt="Back"
              width={20}
              height={20}
            />
          </Link>
        }
      </div>
    </nav>
  )
}