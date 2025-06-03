"use client";

import s from "./hero.module.scss";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className={s.hero}>
      <header className={s.header}>
        <Link href="/" title="Ninety Nine Day" className={s.logoText}>
          Ninety Nine Days
        </Link>
      </header>

      <main className={s.main}>
        <p className={s.heroText}>
          This website aims to explain the occupation of Gaité Lyrique and the
          way its media coverage influenced the decisions that led to its
          evacuation, the 18th of March 2025.
        </p>
      </main>
    </div>
  );
};
