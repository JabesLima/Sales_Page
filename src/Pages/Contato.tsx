import { ArrowUpRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contato() {
  const whatsappNumber = "5511966123411";

  const whatsappMessage =
    "Olá! Vim pelo site e gostaria de solicitar um orçamento.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contato" className=" relative overflow-hidden bg-[#090909] px-5 py-28 text-white md:px-8 lg:py-44">

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,1) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* GIANT BACKGROUND TEXT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          w-full
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-center

          text-[100px]
          font-black
          uppercase
          leading-none
          tracking-[-0.08em]
          text-white/[0.018]

          md:text-[180px]
          lg:text-[260px]
        "
      >
        PROJETO
      </div>

      {/* RED GLOW LEFT */}
      <div
        className="
          pointer-events-none
          absolute
          -left-62.5
          top-1/2
          h-150
          w-150
          -translate-y-1/2
          rounded-full
          bg-red-600/8
          blur-[180px]
        "
      />

      {/* RED GLOW RIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          -right-75
          top-[20%]
          h-150
          w-150
          rounded-full
          bg-red-600/6
          blur-[190px]
        "
      />

      {/* DECORATIVE LIGHT */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[15%]
          hidden
          h-300
          w-300
          rounded-full
          border
          border-red-500/8

          lg:block
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-330
        "
      >
        {/* SMALL LABEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-8
            flex
            items-center
            gap-4
          "
        >
          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 45,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              h-0.5
              bg-red-500
            "
          />

          <span
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.4em]
              text-red-500

              md:text-[10px]
            "
          >
            Vamos conversar
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            className="
              max-w-262.5

              text-[52px]
              font-black
              uppercase
              leading-[0.87]
              tracking-[-0.065em]

              sm:text-[68px]
              md:text-[88px]
              lg:text-[112px]
              xl:text-[128px]
            "
          >
            Seu próximo
            <br />

            <span className="text-red-500">
              projeto
            </span>

            <br />

            começa aqui.
          </h2>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            my-12
            h-px
            w-full
            origin-left
            bg-white/10

            lg:my-16
          "
        />

        {/* BOTTOM AREA */}
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
          "
        >
          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <p
              className="
                max-w-110
                text-[14px]
                leading-7
                text-white/45

                md:text-[15px]
                lg:text-[16px]
                lg:leading-8
              "
            >
              Conte o que você precisa e solicite seu
              orçamento diretamente pelo WhatsApp.
              Vamos conversar sobre seu projeto,
              entender sua necessidade e planejar a
              melhor execução.
            </p>

            {/* PHONE */}
            <div
              className="
                mt-8
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-red-500
                "
              >
                <Phone
                  size={17}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <span
                  className="
                    block
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-white/25
                  "
                >
                  WhatsApp
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[15px]
                    font-semibold
                    tracking-wide
                    text-white
                  "
                >
                  (11) 96612-3411
                </span>
              </div>
            </div>
          </motion.div>

          {/* WHATSAPP CTA */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              flex
              lg:justify-end
            "
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                relative
                flex
                w-full
                max-w-130
                overflow-hidden
                bg-red-500
                p-1

                sm:w-auto
              "
            >
              {/* HOVER BACKGROUND */}
              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-white

                  transition-transform
                  duration-500
                  ease-out

                  group-hover:scale-x-100
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-22.5
                  w-full
                  items-center
                  gap-5
                  px-7

                  sm:min-w-100
                  sm:px-9
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/30

                    transition
                    duration-500

                    group-hover:rotate-6
                    group-hover:border-black/20
                  "
                >
                  <MessageCircle
                    size={20}
                    strokeWidth={1.7}
                    className="
                      text-white
                      transition
                      duration-500

                      group-hover:text-black
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <span
                    className="
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-white/60

                      transition
                      duration-500

                      group-hover:text-black/50
                    "
                  >
                    Solicitar orçamento
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[13px]
                      font-black
                      uppercase
                      tracking-[0.08em]
                      text-white

                      transition
                      duration-500

                      group-hover:text-black

                      sm:text-[14px]
                    "
                  >
                    WhatsApp — (11) 96612-3411
                  </span>
                </div>

                {/* ARROW */}
                <ArrowUpRight
                  size={21}
                  className="
                    shrink-0
                    text-white

                    transition-all
                    duration-500

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-black
                  "
                />
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* FOOTER DETAIL */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="
            mt-20
            flex
            items-center
            justify-between
            border-t
            border-white/6
            pt-6
          "
        >
          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            Seu espaço. Seu projeto.
          </span>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Sparkles
              size={12}
              className="text-red-500"
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/20
              "
            >
              Feito com atenção aos detalhes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}