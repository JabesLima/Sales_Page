import {
  House,
  Hammer,
  Layers3,
  ArrowDownRight,
  Sparkles,
  Wrench,
  ShieldCheck,
  Cable,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Construção do zero",
    description:
      "Projetos completos para transformar ideias em estruturas sólidas, funcionais e feitas para durar.",
    icon: House,
  },
  {
    number: "02",
    title: "Reformas em geral",
    description:
      "Renovamos ambientes por completo, cuidando de cada etapa até o acabamento final.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Pisos e revestimentos",
    description:
      "Porcelanato, cerâmica e revestimentos instalados com alinhamento e precisão.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Escadas",
    description:
      "Construção, revestimento e acabamento com atenção a cada encaixe.",
    icon: ArrowDownRight,
  },
  {
    number: "05",
    title: "Lavabos",
    description:
      "Ambientes elegantes, funcionais e pensados para aproveitar cada espaço.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Áreas gourmet",
    description:
      "Espaços modernos e personalizados para reunir pessoas e criar momentos.",
    icon: Wrench,
  },
  {
    number: "07",
    title: "Muros e calçadas",
    description:
      "Estrutura, segurança e acabamento para valorizar todo o entorno do imóvel.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Elétrica",
    description:
      "Instalações, reparos, manutenção e ajustes realizados com organização.",
    icon: Cable,
  },
];

export default function Body() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#111111] px-5 py-24 text-white md:px-8 lg:py-36"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-40 top-20 h-100 w-100 rounded-full bg-red-600/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-red-600/5 blur-[140px]" />

      <div className="mx-auto max-w-330">
        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="
            mb-16
            grid
            gap-12
            lg:mb-24
            lg:grid-cols-[1.3fr_0.7fr]
            lg:items-end
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-7 flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 45 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-0.5 bg-red-500"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.4em]
                  text-red-500
                  md:text-[11px]
                "
              >
                O que fazemos
              </span>
            </div>

            <h2
              className="
                max-w-200
                text-[44px]
                font-black
                leading-[0.98]
                tracking-tighter 

                sm:text-[56px]
                md:text-[64px]
                lg:text-[76px]
                xl:text-[86px]
              "
            >
              A obra certa começa
              <br />

              <span className="text-white/40">
                no detalhe.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:pb-2">
            <p
              className="
                max-w-105
                text-[14px]
                leading-7
                text-white/45

                md:text-[15px]
                lg:text-[16px]
              "
            >
              Soluções completas para transformar o espaço que você
              imaginou em um ambiente construído com técnica,
              responsabilidade e atenção aos detalhes.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Do início ao acabamento
              </span>

              <div className="h-px w-16 bg-white/10" />
            </div>
          </div>
        </motion.div>

        {/* SERVICES */}

        <div
          className="
            grid
            overflow-hidden
            border
            border-white/8

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  min-h-72.5
                  cursor-pointer
                  overflow-hidden
                  border-b
                  border-r
                  border-white/8
                  bg-[#141414]
                  p-7

                  transition-colors
                  duration-500

                  hover:bg-[#191919]

                  lg:min-h-80
                  lg:p-8
                "
              >
                {/* RED GLOW */}

                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-red-500/0
                    blur-[60px]

                    transition-all
                    duration-500

                    group-hover:bg-red-500/10
                  "
                />

                {/* TOP */}

                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.25em]
                      text-red-500
                    "
                  >
                    {service.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-white/10
                      text-white/35

                      transition-all
                      duration-500

                      group-hover:rotate-6
                      group-hover:border-red-500/40
                      group-hover:bg-red-500
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-20 lg:mt-24">
                  <h3
                    className="
                      max-w-60
                      text-[20px]
                      font-bold
                      tracking-tighter
                      text-white

                      transition
                      duration-300

                      group-hover:text-red-500

                      lg:text-[22px]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-60
                      text-[12px]
                      leading-6
                      text-white/40

                      lg:text-[13px]
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* ARROW */}

                <div
                  className="
                    absolute
                    bottom-7
                    right-7
                    translate-x-4
                    opacity-0

                    transition-all
                    duration-500

                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={19}
                    className="text-red-500"
                  />
                </div>

                {/* BOTTOM RED LINE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-3
                    w-0
                    bg-red-500

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}