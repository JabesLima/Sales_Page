import { ArrowRight, Check } from "lucide-react";

import heroImage from "../assets/home-bg.jpg";
import profileImage from "../assets/profile.jpg";

export default function Home() {
  return (
    <main
      id="inicio"
      className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#111]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction project"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-black/10" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-82px)]
          max-w-305
          items-center
          px-5
          py-14
          md:px-8
          lg:py-16
        "
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_340px]">
          {/* LEFT */}
          <div>
            {/* SMALL LABEL */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-10 bg-red-500" />

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-red-500
                  sm:text-[10px]
                "
              >
                Construção • Reformas • Acabamentos
              </p>
            </div>

            {/* TITLE */}
            <h1
              className="
                max-w-190
                text-[58px]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.055em]
                text-white

                sm:text-[72px]
                md:text-[90px]
                lg:text-[105px]
              "
            >
              Projetos
              <br />

              <span className="text-red-500">Bem</span>
              <br />

              Feitos.
              <br />

              <span className="text-white/35">Espaços</span>
              <br />

              <span className="text-white/35">Vivos.</span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-130
                text-[13px]
                leading-7
                text-white/55
                md:text-sm
              "
            >
              Construção, reformas e acabamentos feitos com precisão,
              responsabilidade e atenção a cada detalhe.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="
                  group
                  flex
                  h-13
                  items-center
                  justify-center
                  gap-5
                  bg-red-500
                  px-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition
                  duration-300
                  hover:bg-red-600
                "
              >
                Solicitar orçamento

                <ArrowRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#projetos"
                className="
                  flex
                  h-13
                  items-center
                  justify-center
                  border
                  border-white/25
                  px-8
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Ver projetos
              </a>
            </div>

            {/* BENEFITS */}
            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                text-[10px]
                text-white/50
                sm:flex-row
                sm:flex-wrap
                sm:gap-7
              "
            >
              <div className="flex items-center gap-2">
                <Check size={13} className="text-red-500" />
                <span>Atendimento personalizado</span>
              </div>

              <div className="flex items-center gap-2">
                <Check size={13} className="text-red-500" />
                <span>Compromisso com prazos</span>
              </div>

              <div className="flex items-center gap-2">
                <Check size={13} className="text-red-500" />
                <span>Acabamento de alto padrão</span>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div
            className="
              hidden
              justify-center
              lg:flex
              lg:justify-end
              lg:pt-32
            "
          >
            <div className="group relative w-55">
              <div
                className="
                  absolute
                  -right-3
                  -top-3
                  h-full
                  w-full
                  border
                  border-red-500/30
                  transition
                  duration-500
                  group-hover:-right-1.5
                  group-hover:-top-1.5
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  border
                  border-white/20
                  bg-[#181818]
                "
              >
                <img
                  src={profileImage}
                  alt="Professional"
                  className="
                    aspect-3/4
                    w-full
                    object-cover
                    grayscale
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    bg-linear-to-t
                    from-black
                    via-black/40
                    to-transparent
                    px-4
                    pb-4
                    pt-14
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-white
                    "
                  >
                    Quem executa, cuida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVE SIDE LINE */}
      <div className="absolute bottom-0 left-0 z-10 h-3 w-20 bg-red-500" />
    </main>
  );
}