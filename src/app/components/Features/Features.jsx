"use client";
import clsx from "clsx";
import Link from "next/link";
import { Sparkles, Users, LineChart, ChartBar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Animate the features section title
      gsap.fromTo(
        ".features-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".features-heading",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Animate the features section description
      gsap.fromTo(
        ".features-description",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".features-description",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Animate each case study card
      gsap.utils.toArray(".case-study").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * i,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }
  }, []);

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
    <div
      className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 first:pt-12 md:px-6 md:py-20 lg:py-24 relative my-[4rem]"
      ref={featuresRef}
    >
      {/* Enhanced background elements */}
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

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 -top-[300px] -right-[300px] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/5 to-teal-500/5 -bottom-[300px] -left-[300px] blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 features-heading">
          <Sparkles className="h-8 w-8 text-blue-400 animate-pulse" />
          <h2 className="Heading max-w-2xl text-balance bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-center text-3xl font-medium text-transparent md:text-5xl">
            Agent Features
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-balance text-center features-description">
          <p className="text-slate-300/90 backdrop-blur-sm text-lg leading-relaxed">
            Explore the powerful capabilities of our AI agent, including the
            Impact Leaderboard and Heartbeat Dashboard, designed to deliver
            actionable insights and streamline your crypto trading experience.
          </p>
        </div>

        <div className="relative mt-24 grid gap-36">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.data.icon;
            return (
              <div
                key={caseStudy.id}
                className={`case-study group relative grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3`}
              >
                {/* Content Side */}
                <div className="col-span-1 flex flex-col justify-center gap-5 rounded-2xl p-4 transition-all duration-500 relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 p-3 backdrop-blur-sm group-hover:from-[#af85e3]/30 group-hover:to-[#6ff2f2]/30 transition-all duration-500">
                      <Icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                    </div>
                    <h3 className="bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] bg-clip-text text-lg font-bold text-transparent">
                      {caseStudy.data.company}
                    </h3>
                  </div>
                  <div className="max-w-md text-[16px] font-normal text-white/80 leading-relaxed relative z-10">
                    {caseStudy.data.description}
                  </div>
                  {/* Learn more as an anchor with enhanced styling */}
                  <Link
                    href={caseStudy.data.path}
                    className="group/btn relative inline-flex h-fit w-fit items-center gap-2 rounded-full border border-blue-100/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 text-blue-200 outline-none ring-blue-400 transition-all duration-500 hover:border-blue-400/40 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/10 focus:ring-2 relative z-10"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-20"></div>
                  </Link>
                </div>

                {/* Video Side with enhanced styling */}
                <div
                  className={clsx(
                    "relative lg:col-span-2",
                    index % 2 && "md:-order-1"
                  )}
                >
                  {/* Gradient glow effect */}
                  <div className="absolute inset-[0.5rem] rounded-xl bg-gradient-to-r from-[#af85e3]/20 via-[#6ff2f2]/20 to-[#68e099]/20 opacity-75 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:from-[#af85e3]/30 group-hover:via-[#6ff2f2]/30 group-hover:to-[#68e099]/30"></div>

                  {/* Video with enhanced border */}
                  <video
                    src={caseStudy.data.video}
                    autoPlay
                    loop
                    muted
                    className={clsx(
                      "relative h-auto w-full rounded-xl border-[3px] border-white/20 shadow-xl transition-transform duration-300 group-hover:scale-[1.01] group-hover:border-white/40 group-hover:shadow-2xl"
                    )}
                  />

                  {/* Badge with enhanced styling */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-2 backdrop-blur-sm border border-blue-500/30 group-hover:border-blue-500/50 transition-all duration-500">
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
