import React from "react";
import Button from "../components/button";
import SocialButton from "../components/socialButton";
import Image from "next/image";
import { technologies } from "@/lib/technologies";
import { flags } from "@/lib/flags";
import Link from "next/link";
import ContactMeButtons from "../components/contactMeButtons";

type AboutProps = {};

export default function About({}: AboutProps) {
  return (
    <>
      <div className="flex p-10 mx-20 mt-10 min-h-[30vh] rounded-xl bg-gray-bg">
        <div className="w-1/3 flex justify-around">
          <h2 className="text-center font-semibold text-4xl text-black tracking-tighter">
            About Me
          </h2>
          <hr className="w-[2px] h-full border-solid border-dark-bg bg-dark-bg" />
        </div>

        <div className="w-2/3">
          <h3 className="mb-6 text-lg font-sans font-bold text-black">
            I am a full-stack developer based in Kyiv.
          </h3>
          <p className="text-base font-sans font-semibold text-dark-bg mb-10">
            I am a full-stack developer from Kyiv, looking for some interesting
            opportunities I have a background in the field of design and
            individual orders in the field of fashion. Able to work in contact
            with the client to fulfill the order as accurately as possible. I
            like to focus on availability during development. Passionate and
            interested in solutions to technical problems. I am currently
            exploring Next.js, SASS, Docker, etc. <br /> While I am not
            programming, I enjoy learning Spanish and riding a handbike. Also, I
            am developing technical devices for driving cars for people with
            disabilities. But my biggest passion is traveling. Learning more for
            improving skills.
          </p>
          <ContactMeButtons />
        </div>
      </div>
      <div className="flex mx-20 my-10">
        <div className="w-1/3 text-center">
          <h2 className="mb-6 font-semibold text-4xl tracking-tighter">
            My Skills
          </h2>
          <p className="text-sm mx-auto">
            The skills, tools, and technologies I use in my daily work and learn
            now.
          </p>
        </div>
        <div className="w-2/3">
          <ul className="grid grid-cols-4 gap-y-4">
            {technologies.map((item) => {
              return (
                <li
                  key={item.text}
                  className="flex flex-col gap-2 items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.text}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-12 h-12"
                  />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="h-[1px] border-solid border-gray-bg" />
      <div className="flex mx-20 mt-5 mb-10">
        <div className="w-1/3">
          <h2 className="mb-6 text-center font-semibold text-4xl tracking-tighter">
            Languages
          </h2>
        </div>
        <div className="w-2/3">
          <ul className="grid grid-cols-4">
            {flags.map((flag) => {
              return (
                <li
                  key={flag.description}
                  className="flex flex-col gap-2 items-center"
                >
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={flag.src}
                      alt={flag.description}
                      width={48}
                      height={48}
                    />
                  </div>
                  <span>{flag.level}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
