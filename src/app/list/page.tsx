"use client";

import { SURAHS } from "../../lib/constants/quran";

export default function List () {
  return <>
    {SURAHS.map((surah, i) => <div key={i}>{i+1}: {surah.name_arabic}</div>)}
  </>
}