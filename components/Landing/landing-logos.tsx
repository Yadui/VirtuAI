import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiOpenai,
  SiVercel,
  SiGithub,
} from "@icons-pack/react-simple-icons"; // or react-icons

export const LandingContent = () => {
  const techStack = [
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "OpenAI", Icon: SiOpenai },
    { name: "Vercel", Icon: SiVercel },
    { name: "GitHub", Icon: SiGithub },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-16">
          Used in personal projects with
        </p>

        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {techStack.map(({ Icon, name }, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition cursor-default">
                    <Icon className="h-10 w-10 text-white opacity-70 hover:opacity-100 transition" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  <p className="text-sm font-medium text-black">{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};
