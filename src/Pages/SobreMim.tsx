import { ArrowUpRight, Hammer, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

import profileImage from "../assets/profile.jpg";

export default function SobreMim() {
  return (
    <section
      id="sobre"
      className="
        relative
        overflow-hidden
        bg-[#141414]
        px-5
        py-24
        text-white

        md:px-8
        lg:py-40
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-red-600/[0.06]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          bottom-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-red-600/[0.04]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1280px]
          items-center
          gap-16

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-24
        "
      >
        {/* IMAGE SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[470px]
            lg:mx-0
          "
        >
          {/* BACK BORDER */}
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            whileInView={{
              x: -14,
              y: -14,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              absolute
              inset-0
              border
              border-white/10
            "
          />

          {/* IMAGE */}
          <div
            className="
              group
              relative
              overflow-hidden
              border
              border-white/10
              bg-[#0f0f0f]
            "
          >
            <motion.img
              src={profileImage}
              alt="Professional"
              initial={{
                scale: 1.08,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                aspect-[4/5]
                w-full
                object-cover
                object-center
                grayscale

                transition
                duration-[1000ms]

                group-hover:scale-[1.04]
                group-hover:grayscale-0
              "
            />

            {/* IMAGE DARK GRADIENT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-black/10
              "
            />

            {/* RED LINE */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[3px]
                w-20
                bg-red-500

                transition-all
                duration-700

                group-hover:w-full
              "
            />

            {/* LITTLE ICON */}
            <div
              className="
                absolute
                left-5
                top-5
                flex
                h-12
                w-12
                items-center
                justify-center
                border
                border-white/10
                bg-black/30
                backdrop-blur-md
              "
            >
              <Hammer
                size={19}
                strokeWidth={1.5}
                className="text-red-500"
              />
            </div>
          </div>

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="
              absolute
              -bottom-6
              right-[-10px]

              flex
              min-h-[76px]
              min-w-[150px]
              items-center
              justify-center

              bg-red-500
              px-6
              text-center
            "
          >
            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.24em]
                text-white
              "
            >
              Predeiro
            </span>
          </motion.div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* SMALL TITLE */}
          <div className="mb-7 flex items-center gap-4">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 42,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="h-[2px] bg-red-500"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.4em]
                text-red-500

                md:text-[10px]
              "
            >
              Sobre o trabalho
            </span>
          </div>

          {/* MAIN TITLE */}
          <h2
            className="
              max-w-[720px]

              text-[46px]
              font-black
              leading-[0.95]
              tracking-[-0.055em]

              sm:text-[56px]
              md:text-[66px]
              lg:text-[76px]
              xl:text-[82px]
            "
          >
            Experiência que
            <br />

            aparece nos
            <br />

            <span className="text-white/35">
              detalhes.
            </span>
          </h2>

          {/* TEXT */}
          <div
            className="
              mt-10
              max-w-[650px]
              space-y-6

              text-[14px]
              leading-7
              text-white/50

              md:text-[15px]
              lg:text-[16px]
              lg:leading-8
            "
          >
            <p>
              Cada projeto tem uma história, uma rotina e um jeito
              próprio de ser. O trabalho começa entendendo o que
              precisa ser feito e executando cada etapa com cuidado.
            </p>

            <p>
              Do planejamento ao último acabamento, o foco está na
              organização, no resultado e no respeito pelo espaço de
              cada cliente.
            </p>

            <p>
              Sem atalhos e sem serviço feito de qualquer jeito.
              Trabalho bem executado, comunicação clara e atenção
              aos detalhes.
            </p>
          </div>

          {/* DIVIDER */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="
              my-10
              h-[1px]
              max-w-[620px]
              origin-left
              bg-white/10
            "
          />

          {/* CTA */}
          <motion.a
            href="#contato"
            whileHover={{
              x: 6,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              inline-flex
              items-center
              gap-4

              text-[10px]
              font-black
              uppercase
              tracking-[0.25em]
              text-red-500

              transition
              duration-300

              hover:text-white
            "
          >
            Fale diretamente comigo

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-red-500/30

                transition
                duration-300

                group-hover:rotate-45
                group-hover:border-red-500
                group-hover:bg-red-500
              "
            >
              <ArrowUpRight
                size={16}
                className="
                  transition
                  duration-300
                  group-hover:text-white
                "
              />
            </span>
          </motion.a>

          {/* SMALL FOOTER */}
          <div
            className="
              mt-12
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/20
            "
          >
            <MoveUpRight size={13} />

            Construção • Reforma • Acabamento
          </div>
        </motion.div>
      </div>
    </section>
  );
}