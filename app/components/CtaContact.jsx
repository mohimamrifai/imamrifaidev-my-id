import Link from "next/link";
import React from "react";

export default function CtaContact() {
  return (
    <div className="mt-36 p-2 md:p-36 grid grid-cols-1 gap-5 justify-center">
      <p className="text-left md:text-center text-5xl md:text-6xl font-bold">
        Got a project or idea in mind? Let's make it happen—reach out, and let's
        create something amazing together.
      </p>
      <Link href="https://wa.me/6282118668919" target="_blank" className="mt-10 bg-pink-400 py-2 px-5 mx-auto text-white font-bold text-2xl">Let's Collaborate</Link>
    </div>
  );
}
