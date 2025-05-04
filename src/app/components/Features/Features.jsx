"use client";
import clsx from "clsx";
import { Sparkles, Users, LineChart, ChartBar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Features = () => {
  const caseStudies = [
    {
      id: 1,
      data: {
        company: "Discover Influencers Who Make a Difference",
        description:
          "Cut through the noise with our Impact Leaderboard. We rank Crypto Twitter accounts based on their prediction accuracy and profitability over 1d, 1w, 1M, and 1y intervals, helping you focus only on proven, high-impact voices.",
        video: "/videos/impact.mp4",
        icon: Users,
        path: "/impact-leaderboard",
      },
    },
    {
      id: 2,
      data: {
        company: "Track Emerging Trends with Heartbeat Leaderboard",
        description:
          "Stay ahead of the market with real-time insights. Our Heartbeat Leaderboard highlights the most impactful crypto trends by combining influencer predictions and market movements, giving you the pulse of the market at a glance.",
        video: "/videos/heartbeat.mp4",
        icon: LineChart,
        path: "/heartbeat-leaderboard",
      },
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-8 first:pt-6 md:px-6 md:py-12 lg:py-16 relative my-[3rem]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oMZxsJPnBwohrkRcto1AHA3Hl6n8hR.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(100px)",
        }}
      />

      {/* Content */}
      <div className="relative">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-400" />
          <h2 className="Heading max-w-2xl text-balance bg-gradient-to-r from-white to-blue-400 bg-clip-text text-center text-3xl font-medium text-transparent md:text-5xl">
            Agent Features
          </h2>
        </div>

        <div className="mx-auto mt-6 max-w-3xl text-balance text-center">
          <p className="text-slate-300/90 backdrop-blur-sm">
            Explore the powerful capabilities of our AI agent, including the
            Impact Leaderboard and Heartbeat Dashboard, designed to deliver
            actionable insights and streamline your crypto trading experience.
          </p>
        </div>
      <div className="relative mt-20 grid gap-32">
        {caseStudies.map((caseStudy, index) => {
          const Icon = caseStudy.data.icon;
          return (
            <div
              key={caseStudy.id}
              className="group relative grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
            >
              {/* Content Side */}
              <div className="col-span-1 flex flex-col justify-center gap-4 rounded-2xl p-2 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center rounded-xl bg-blue-500/10 p-2 backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-xl font-bold text-transparent">
                    {caseStudy.data.company}
                  </h3>
                </div>
                <div className="max-w-md text-[15.5px] font-normal text-white/80">
                  {caseStudy.data.description}
                </div>
                {/* Learn more as an anchor */}
                <a
                  href={caseStudy.data.path}
                  className="group relative inline-flex h-fit w-fit items-center gap-2 rounded-full border border-blue-100/20 bg-gradient-to-r from-blue-500/10 to-blue-500/10 px-6 py-3 text-blue-200 outline-none ring-blue-400 transition-all duration-300 hover:border-blue-400/40 hover:text-blue-300 focus:ring-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                  <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 opacity-0 hover:opacity-20" />
                </a>
              </div>

              {/* Video Side */}
              <div
                className={clsx(
                  "relative lg:col-span-2",
                  index % 2 && "md:-order-1"
                )}
              >
                <div className="absolute inset-[0.75rem] rounded-xl bg-gradient-to-r from-blue-800 to-white opacity-75 blur-2xl transition-all duration-300 group-hover:opacity-100" />
                <video
                  src={caseStudy.data.video}
                  autoPlay
                  loop
                  muted
                  className={clsx(
                    "relative h-auto w-full rounded-xl border-[3px] border-white/20 shadow-xl transition-transform duration-300 group-hover:scale-[1.01] group-hover:border-white/40 group-hover:shadow-2xl"
                  )}
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
                  <ChartBar className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-medium text-white">
                    Live Analytics
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Features;
