"use client";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import profile from "./../../images/profile.jpg";
import Image from "next/image";

export default function CoverSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10  [mask-image:radial-gradient(100%_100%_at_left_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Marlou Flores Pepito
          </motion.h1>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            The capacity to learn is a gift; the ability to learn is a skill;
            <br /> the willingness to learn is a choice.
            <br />
          </motion.div>
          <motion.div initial={{ x: -200 }} animate={{ x: 0 }}>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className=" font-semibold leading-6 text-white text-4xl"
              >
                Fullstack Developer
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div initial={{ x: 400 }} animate={{ x: 0 }}>
              <Image
                alt="App screenshot"
                src={profile}
                quality={100}
                width={2432}
                height={1442}
                className="w-[20rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
