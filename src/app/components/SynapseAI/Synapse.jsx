"use client";
import clsx from "clsx";
import { PiRocketLaunch } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";
import { useState, useEffect } from "react";

const Synapse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-8 first:pt-6 md:px-6 md:py-12 lg:py-16 relative my-[3rem]">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <AnimatedContent>
        <div className="flex items-center justify-center gap-3">
          <PiRocketLaunch className="h-8 w-8 animate-pulse text-blue-400" />
          <h2 className="text-balance bg-gradient-to-r from-white to-blue-400 bg-clip-text text-center text-5xl font-medium text-transparent md:text-6xl">
            Maxxit
          </h2>
        </div>
      </AnimatedContent>

      <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="mt-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-3xl font-bold text-transparent">
          Synapse AI Signal Bot
          </div>

          <div className="mt-6 text-[20px] font-normal text-blue-100">
          AI Signal Bot for Smarter Crypto Trades
          </div>

          <div className="prose prose-invert text-[16.4px] mt-4 max-w-xl text-slate-300">
          Simplify trading like never before. Subscribe to your favorite Crypto Twitter accounts and let our AI analyze tweets to generate powerful trading signals, keeping you ahead of the market with real-time insights.
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative mt-6 inline-flex h-fit w-fit items-center gap-2 rounded-full border border-blue-100/20 bg-gradient-to-r from-blue-500/10 to-blue-500/10 px-6 py-3 text-blue-200 outline-none ring-blue-400 transition-all duration-300 hover:border-blue-400/40 hover:text-blue-300 focus:ring-2"
          >
            <span className="relative z-10">Get Started</span>
            <PiRocketLaunch className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-20" />
          </button>
        </div>

        <video
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%]"
          )}
          autoPlay
          loop
          muted
        >
          <source src="videos/trading_bot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-50 w-full max-w-lg overflow-hidden rounded-xl bg-gray-900 p-6 shadow-2xl">
            <div className="mx-auto flex max-w-sm flex-col items-center">
            <div className="mt-6 flex items-center gap-2">
              <h3 className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-center text-2xl font-semibold text-transparent">
                Coming Soon! 
              </h3>
              <div>🚀✨</div>
              </div>
              <p className="mt-2 text-center text-gray-300">
                Exciting developments are underway! Our team is working hard to
                bring you cutting-edge AI-powered trading features. Stay tuned
                for updates! 🛠️💡
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
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
