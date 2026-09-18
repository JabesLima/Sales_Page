import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type MediaType = "image" | "video";
type FilterType = "all" | MediaType;

type ProjectItem = {
  id: number;
  src: string;
  type: MediaType;
  title: string;
  category: string;
  path: string;
};

/*
  VITE READS EVERYTHING INSIDE:

  src/assets/projects/

  Images:
  jpg
  jpeg
  png
  webp
  avif

  Videos:
  mp4
  webm
  mov
*/

const projectFiles = import.meta.glob(
  [
    "../assets/projects/**/*.{jpg,jpeg,png,webp,avif}",
    "../assets/projects/**/*.{mp4,webm,mov}",
  ],
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

function formatText(value: string) {
  return value
    .replace(/\.[^/.]+$/, "")
    .replace(/^\d+[-_\s]*/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getCategory(path: string) {
  const projectPath = path.split("/projects/")[1];

  if (!projectPath) {
    return "Projeto";
  }

  const parts = projectPath.split("/");

  if (parts.length <= 1) {
    return "Projeto";
  }

  return formatText(parts[parts.length - 2]);
}

const projects: ProjectItem[] = Object.entries(projectFiles)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, {
      numeric: true,
    })
  )
  .map(([path, src], index) => {
    const extension =
      path.split(".").pop()?.toLowerCase() ?? "";

    const videoExtensions = ["mp4", "webm", "mov"];

    return {
      id: index,
      src,
      path,
      type: videoExtensions.includes(extension)
        ? "video"
        : "image",

      title: formatText(
        path.split("/").pop() ?? "Projeto"
      ),

      category: getCategory(path),
    };
  });

export default function Projects() {
  const [filter, setFilter] =
    useState<FilterType>("all");

  const [selectedProject, setSelectedProject] =
    useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.type === filter
    );
  }, [filter]);

  function nextProject() {
    if (!selectedProject) return;

    const index = filteredProjects.findIndex(
      (item) => item.id === selectedProject.id
    );

    const nextIndex =
      (index + 1) % filteredProjects.length;

    setSelectedProject(
      filteredProjects[nextIndex]
    );
  }

  function previousProject() {
    if (!selectedProject) return;

    const index = filteredProjects.findIndex(
      (item) => item.id === selectedProject.id
    );

    const previousIndex =
      index === 0
        ? filteredProjects.length - 1
        : index - 1;

    setSelectedProject(
      filteredProjects[previousIndex]
    );
  }

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (!selectedProject) return;

      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowRight") {
        nextProject();
      }

      if (event.key === "ArrowLeft") {
        previousProject();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
  });

  return (
    <>
      <section
        id="projetos"
        className="
          relative
          overflow-hidden
          bg-[#090909]
          px-5
          py-24
          text-white

          md:px-8
          lg:py-36
        "
      >
        {/* BACKGROUND EFFECTS */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[250px]
            top-[100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/[0.07]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[300px]
            bottom-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-red-600/[0.05]
            blur-[160px]
          "
        />

        {/* BACKGROUND GRID */}

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
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-[1380px]">
          {/* TOP */}

          <div
            className="
              mb-16
              flex
              flex-col
              gap-10

              lg:mb-20
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* LABEL */}

              <div className="mb-6 flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 45 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
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
                  Projetos executados
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  max-w-[750px]
                  text-[43px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]

                  sm:text-[55px]
                  md:text-[65px]
                  lg:text-[78px]
                "
              >
                Projetos que falam
                <br />

                <span className="text-white/35">
                  pelo nosso trabalho.
                </span>
              </h2>
            </motion.div>

            {/* FILTER */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              <FilterButton
                active={filter === "all"}
                onClick={() =>
                  setFilter("all")
                }
              >
                Todos
              </FilterButton>

              <FilterButton
                active={filter === "image"}
                onClick={() =>
                  setFilter("image")
                }
              >
                <Camera size={13} />
                Fotos
              </FilterButton>

              <FilterButton
                active={filter === "video"}
                onClick={() =>
                  setFilter("video")
                }
              >
                <Play size={13} />
                Vídeos
              </FilterButton>
            </motion.div>
          </div>

          {/* TOTAL */}

          <div
            className="
              mb-7
              flex
              items-center
              justify-between
              border-t
              border-white/[0.08]
              pt-5
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Trabalhos selecionados
            </p>

            <span
              className="
                text-[10px]
                font-bold
                tracking-[0.2em]
                text-red-500
              "
            >
              {String(
                filteredProjects.length
              ).padStart(2, "0")}
            </span>
          </div>

          {/* PROJECT GRID */}

          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="
                grid
                auto-rows-[260px]
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:auto-rows-[300px]
                lg:grid-cols-4
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map(
                  (project, index) => (
                    <ProjectCard
                      key={project.path}
                      project={project}
                      index={index}
                      onClick={() =>
                        setSelectedProject(
                          project
                        )
                      }
                    />
                  )
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div
              className="
                flex
                min-h-[400px]
                items-center
                justify-center
                border
                border-white/10
              "
            >
              <p className="text-sm text-white/30">
                Nenhum projeto encontrado.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/95
              p-4
              backdrop-blur-xl

              md:p-10
            "
          >
            {/* CLOSE */}

            <button
              onClick={() =>
                setSelectedProject(null)
              }
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-12
                w-12
                items-center
                justify-center
                border
                border-white/10
                bg-white/[0.04]
                text-white

                transition
                duration-300

                hover:rotate-90
                hover:border-red-500
                hover:bg-red-500
              "
            >
              <X size={20} />
            </button>

            {/* PREVIOUS */}

            {filteredProjects.length > 1 && (
              <button
                onClick={previousProject}
                className="
                  absolute
                  left-5
                  top-1/2
                  z-30
                  hidden
                  h-14
                  w-14
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  border-white/10
                  bg-black/50

                  transition

                  hover:border-red-500
                  hover:bg-red-500

                  md:flex
                "
              >
                <ChevronLeft />
              </button>
            )}

            {/* NEXT */}

            {filteredProjects.length > 1 && (
              <button
                onClick={nextProject}
                className="
                  absolute
                  right-5
                  top-1/2
                  z-30
                  hidden
                  h-14
                  w-14
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  border-white/10
                  bg-black/50

                  transition

                  hover:border-red-500
                  hover:bg-red-500

                  md:flex
                "
              >
                <ChevronRight />
              </button>
            )}

            <motion.div
              key={selectedProject.src}
              initial={{
                scale: 0.92,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex
                max-h-[90vh]
                w-full
                max-w-[1300px]
                flex-col
                overflow-hidden
                border
                border-white/10
                bg-[#0d0d0d]
              "
            >
              {/* MEDIA */}

              <div
                className="
                  flex
                  min-h-0
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  bg-black
                "
              >
                {selectedProject.type ===
                "video" ? (
                  <video
                    src={
                      selectedProject.src
                    }
                    controls
                    autoPlay
                    playsInline
                    className="
                      max-h-[75vh]
                      w-full
                      object-contain
                    "
                  />
                ) : (
                  <img
                    src={
                      selectedProject.src
                    }
                    alt={
                      selectedProject.title
                    }
                    className="
                      max-h-[75vh]
                      w-full
                      object-contain
                    "
                  />
                )}
              </div>

              {/* INFO */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-white/10
                  p-5

                  md:flex-row
                  md:items-center
                  md:justify-between
                  md:p-7
                "
              >
                <div>
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-red-500
                    "
                  >
                    {
                      selectedProject.category
                    }
                  </span>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold

                      md:text-2xl
                    "
                  >
                    {
                      selectedProject.title
                    }
                  </h3>
                </div>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  {selectedProject.type ===
                  "video"
                    ? "Vídeo"
                    : "Fotografia"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type FilterButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

function FilterButton({
  children,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`
        relative
        flex
        h-10
        items-center
        justify-center
        gap-2
        overflow-hidden
        border
        px-5

        text-[9px]
        font-bold
        uppercase
        tracking-[0.2em]

        transition-colors
        duration-300

        ${
          active
            ? "border-red-500 text-white"
            : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
        }
      `}
    >
      {active && (
        <motion.span
          layoutId="active-filter"
          className="
            absolute
            inset-0
            bg-red-500
          "
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  onClick: () => void;
};

function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  /*
    Creates that irregular premium
    "bento" layout automatically.
  */

  const layoutPattern = index % 8;

  let sizeClass = "";

  if (layoutPattern === 0) {
    sizeClass =
      "sm:col-span-2 sm:row-span-2";
  } else if (layoutPattern === 3) {
    sizeClass =
      "lg:col-span-2";
  } else if (layoutPattern === 6) {
    sizeClass =
      "lg:row-span-2";
  }

  function playVideo() {
    if (!videoRef.current) return;

    videoRef.current.play().catch(() => {});
  }

  function pauseVideo() {
    if (!videoRef.current) return;

    videoRef.current.pause();
  }

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(
          index * 0.05,
          0.35
        ),
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onClick={onClick}
      className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        bg-[#151515]
        ${sizeClass}
      `}
    >
      {/* MEDIA */}

      {project.type === "video" ? (
        <video
          ref={videoRef}
          src={project.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            transition-transform
            duration-[1200ms]

            group-hover:scale-105
          "
        />
      ) : (
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            transition-transform
            duration-[1200ms]

            group-hover:scale-105
          "
        />
      )}

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/10
          to-black/15

          transition
          duration-500

          group-hover:from-black/75
        "
      />

      {/* RED HOVER */}

      <div
        className="
          absolute
          inset-0
          bg-red-600/0

          mix-blend-multiply

          transition
          duration-500

          group-hover:bg-red-600/10
        "
      />

      {/* NUMBER */}

      <span
        className="
          absolute
          left-5
          top-5
          text-[9px]
          font-bold
          tracking-[0.2em]
          text-white/60
        "
      >
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>

      {/* VIDEO BADGE */}

      {project.type === "video" && (
        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-11
            w-11
            items-center
            justify-center
            border
            border-white/20
            bg-black/30
            backdrop-blur-md

            transition
            duration-500

            group-hover:scale-110
            group-hover:border-red-500
            group-hover:bg-red-500
          "
        >
          <Play
            size={16}
            fill="currentColor"
          />
        </div>
      )}

      {/* CONTENT */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-5

          md:p-7
        "
      >
        <div
          className="
            mb-3
            h-[2px]
            w-8
            bg-red-500

            transition-all
            duration-500

            group-hover:w-16
          "
        />

        <span
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-white/45
          "
        >
          {project.type === "video"
            ? "Vídeo"
            : project.category}
        </span>

        <div className="mt-2 flex items-end justify-between gap-5">
          <h3
            className="
              max-w-[380px]
              text-lg
              font-bold
              leading-tight

              md:text-xl
              lg:text-2xl
            "
          >
            {project.title}
          </h3>

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              translate-y-5
              items-center
              justify-center
              bg-white
              text-black
              opacity-0

              transition-all
              duration-500

              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      {/* BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          border
          border-white/[0.06]

          transition
          duration-500

          group-hover:border-red-500/30
        "
      />
    </motion.article>
  );
}