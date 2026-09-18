import { useState } from "react";
import { Hammer, MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "PROJETOS", href: "#projetos" },
    { name: "SOBRE", href: "#sobre" },
    { name: "CONTATO", href: "#contato" },
  ];

  return (
    <header className="relative z-50 w-full bg-[#111010]">
      <div
        className=" mx-auto
          flex
          h-20.5
          max-w-305
          items-center
          justify-between
          px-5
          md:px-8
        "
      >
        {/* LOGO */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/10
              transition
              duration-300
              group-hover:border-red-500/60
            "
          >
            <Hammer
              size={18}
              strokeWidth={1.8}
              className="text-red-500"
            />
          </div>

          <h1
            className="
              text-[14px]
              font-bold
              tracking-[0.28em]
              text-white
              sm:text-[15px]
            "
          >
            PEDREIRO
            <span className="text-red-500">.</span>
          </h1>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-white/55
                transition
                duration-300

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-px
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
        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="#contato"
          className="
            hidden
            h-11.5
            items-center
            justify-center
            gap-2
            bg-red-500
            px-7
            text-[10px]
            font-bold
            tracking-[0.08em]
            text-white
            transition
            duration-300
            hover:bg-red-600
            md:flex
          "
        >
          <MessageCircle size={17} strokeWidth={1.8} />

          ORÇAMENTO
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-white/10
            text-white
            transition
            hover:border-red-500
            hover:text-red-500
            lg:hidden
          "
          aria-label="Open menu"
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          overflow-hidden
          bg-[#111010]
          transition-all
          duration-500
          lg:hidden

          ${
            menuOpen
              ? "max-h-125 border-t border-white/5 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                border-b
                border-white/5
                py-4
                text-[11px]
                font-medium
                tracking-[0.22em]
                text-white/60
                transition
                hover:pl-2
                hover:text-red-500
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="
              mt-6
              flex
              h-12
              items-center
              justify-center
              gap-2
              bg-red-500
              text-[11px]
              font-bold
              tracking-widest
              text-white
              transition
              hover:bg-red-600
            "
          >
            <MessageCircle size={17} />
            ORÇAMENTO
          </a>
        </nav>
      </div>
    </header>
  );
}