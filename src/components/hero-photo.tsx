"use client";

import Image from "next/image";
import { useState } from "react";

const faceClass =
  "absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d]";
const imageClass =
  "size-full rounded-[1.6rem] object-cover grayscale-[0.15] select-none";

export function HeroPhoto({
  photos,
  alt,
}: {
  photos: readonly string[];
  alt: string;
}) {
  const [flips, setFlips] = useState(0);
  const count = photos.length;

  const frontIndex = (flips % 2 === 0 ? flips : flips - 1) % count;
  const backIndex = (flips % 2 === 1 ? flips : Math.max(flips - 1, 0)) % count;

  return (
    <button
      type="button"
      onClick={() => setFlips((value) => value + 1)}
      aria-label={`${alt} — show next photo`}
      className="relative z-10 block aspect-square w-full cursor-pointer rounded-[1.6rem] [perspective:1400px]"
    >
      <span
        className="relative block size-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] motion-reduce:transition-none"
        style={{ transform: `rotateY(${flips * 180}deg)` }}
      >
        <span className={faceClass}>
          <Image
            src={photos[frontIndex]}
            alt={alt}
            width={480}
            height={480}
            priority
            className={imageClass}
          />
        </span>

        <span className={`${faceClass} [transform:rotateY(180deg)]`}>
          <Image
            src={photos[backIndex]}
            alt={alt}
            width={480}
            height={480}
            className={imageClass}
          />
        </span>
      </span>
    </button>
  );
}
