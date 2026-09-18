import {
  ArrowUp,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = "5511966123411";

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const links = [
    {
      name: "Início",
      href: "#inicio",
    },
    {
      name: "Serviços",
      href: "#servicos",
    },
    {
      name: "Projetos",
      href: "#projetos",
    },
    {
      name: "Sobre",
      href: "#sobre",
    },
  ];

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/6
        bg-[#0d0d0d]
        px-5
        text-white

        md:px-8
      "
    >
      {/* SUBTLE RED GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-200
          left-1/2
          h-350
          w-700
          -translate-x-1/2
          rounded-full
          bg-red-600/5
          blur-130
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-330
        "
      >
        {/* MAIN FOOTER */}

        <div
          className="
            grid
            gap-12
            py-16

            md:grid-cols-2

            lg:grid-cols-[1.2fr_1fr_0.8fr]
            lg:items-center
            lg:py-20
          "
        >
          {/* BRAND */}

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
              duration: 0.7,
            }}
          >
            <a
              href="#inicio"
              className="
                inline-flex
                items-center
                gap-1

                text-[18px]
                font-black
                uppercase
                tracking-[0.28em]
              "
            >
              PEDREIRO

              <span className="text-red-500">
                .
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-90
                text-[13px]
                leading-6
                text-white/35
              "
            >
              Construção, reforma e acabamento
              com responsabilidade, precisão e
              atenção a cada detalhe.
            </p>

            <div
              className="
                mt-6
                h-2
                w-12
                bg-red-500
              "
            />
          </motion.div>

          {/* NAVIGATION */}

          <motion.nav
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
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              flex
              flex-wrap
              gap-x-7
              gap-y-4

              lg:justify-center
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative

                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-white/35

                  transition
                  duration-300

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-1
                  after:w-0
                  after:bg-red-500
                  after:transition-all
                  after:duration-300

                  hover:text-white
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2

                text-[9px]
                font-black
                uppercase
                tracking-[0.28em]
                text-red-500

                transition
                duration-300

                hover:text-white
              "
            >
              <MessageCircle size={13} />

              WhatsApp
            </a>
          </motion.nav>

          {/* BACK TO TOP */}

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
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              flex

              md:justify-end
            "
          >
            <button
              type="button"
              onClick={scrollToTop}
              className="
                group

                flex
                h-14
                w-14
                items-center
                justify-center

                border
                border-white/10

                transition
                duration-300

                hover:border-red-500
                hover:bg-red-500
              "
              aria-label="Back to top"
            >
              <ArrowUp
                size={17}
                className="
                  text-white/50

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:text-white
                "
              />
            </button>
          </motion.div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            flex
            flex-col
            gap-4

            border-t
            border-white/6

            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/20
            "
          >
            © {currentYear} PEDREIRO. Todos os
            direitos reservados.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-5
                w-5
                rounded-full
                bg-red-500
              "
            />

            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/20
              "
            >
              Qualidade e compromisso em cada detalhe.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}