"use client";
import clsx from "clsx";
import { PiRocketLaunch } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Synapse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const synapseRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Synapse section animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: synapseRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".synapse-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      tl.fromTo(
        ".synapse-content",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      tl.fromTo(
        ".synapse-video",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }
  }, [isModalOpen]);

  return (
    <div
      className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-12 first:pt-8 md:px-6 md:py-16 lg:py-20 relative my-[4rem]"
      ref={synapseRef}
    >
      {/* Enhanced background glow */}
      <div className="absolute -z-10 aspect-square w-full max-w-2xl rounded-full bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-blue-400/10 blur-3xl filter" />

      {/* Additional animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse-slow delay-700"></div>
      </div>

      <AnimatedContent>
        <div className="flex items-center justify-center gap-3 synapse-title">
          <PiRocketLaunch className="h-10 w-10 text-blue-400 animate-pulse" />
          <h2 className="text-balance bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-center text-5xl font-medium text-transparent md:text-6xl">
            Maxxit
          </h2>
        </div>
      </AnimatedContent>

      <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="mt-6 bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] bg-clip-text text-3xl font-bold text-transparent">
            Synapse AI Signal Bot
          </div>

          <div className="mt-6 text-[20px] font-normal text-blue-100">
            AI Signal Bot for Smarter Crypto Trades
          </div>

          <div className="prose prose-invert text-[16.4px] mt-4 max-w-xl text-slate-300 leading-relaxed">
            Simplify trading like never before. Subscribe to your favorite
            Crypto Twitter accounts and let our AI analyze tweets to generate
            powerful trading signals, keeping you ahead of the market with
            real-time insights.
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group/btn relative mt-8 inline-flex h-fit w-fit items-center gap-2 rounded-full border border-blue-100/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 text-blue-200 outline-none ring-blue-400 transition-all duration-500 hover:border-blue-400/40 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/10 focus:ring-2"
          >
            <span className="relative z-10">Get Started</span>
            <PiRocketLaunch className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] opacity-0 blur transition-opacity duration-500 group-hover/btn:opacity-20" />
          </button>
        </div>

        <video
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%] relative synapse-video border-2 border-[#000612] rounded-xl overflow-hidden group-hover:shadow-blue-500/10 transition-all duration-500"
          )}
          autoPlay
          loop
          muted
        >
          <source src="videos/trading_bot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Enhanced modal with animations */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-50 w-full max-w-lg overflow-hidden rounded-xl bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-500/30 p-6 shadow-2xl animate-fadeIn">
            {/* Background glow elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mt-32 -mr-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full -mb-32 -ml-32 blur-3xl"></div>

            <div className="mx-auto flex max-w-sm flex-col items-center relative z-10">
              <div className="mt-6 flex items-center gap-2">
                <h3 className="bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] bg-clip-text text-center text-2xl font-semibold text-transparent">
                  Coming Soon!
                </h3>
                <div className="animate-bounce">🚀✨</div>
              </div>
              <p className="mt-4 text-center text-gray-300 leading-relaxed">
                Exciting developments are underway! Our team is working hard to
                bring you cutting-edge AI-powered trading features. Stay tuned
                for updates! 🛠️💡
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-8 rounded-full bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] px-6 py-3 text-sm font-medium text-[#000612] hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Synapse;
