"use client";

import React, { useRef } from "react";
import StarGrid from "../components/Hero/StarGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

const HeartbeatLeaderboard = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6"
      );

      tl.fromTo(
        ".hero__content",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3"
      );
    },
    { scope: container }
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white" ref={container}>
        <div className="container relative mx-auto px-4 py-12">
          <div className="relative p-10">
            <StarGrid />
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
              <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            </div>

            <div className="relative">
              <div className="mb-16 flex flex-col items-center text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  <span className="text-sm font-medium text-blue-400">
                    Heartbeat Leaderboard
                  </span>
                </div>
                <h1 className="hero__heading mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent opacity-0 md:text-6xl">
                  The Pulse of Crypto Trends
                </h1>
                <p className="hero__body max-w-2xl text-xl text-slate-300/90 opacity-0">
                  Stay ahead of the market with real-time insights, combining
                  influencer predictions and market movements.
                </p>
              </div>

              <div className="hero__content mt-20 grid gap-12 opacity-0 md:grid-cols-2">
                <div className="rounded-xl border border-blue-500/20 bg-blue-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <h2 className="mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
                    How It Works
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4 mt-1 h-6 w-6 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-white">
                          Real-Time Trend Detection
                        </h3>
                        <p className="text-slate-300/90">
                          Monitors Crypto Twitter and other platforms to
                          identify trending topics and sentiment shifts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4 mt-1 h-6 w-6 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-white">
                          Dynamic Insights
                        </h3>
                        <p className="text-slate-300/90">
                          Merges trend data with influencer rankings to offer
                          clear, actionable insights.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4 mt-1 h-6 w-6 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-white">
                          Data Transparency with AI
                        </h3>
                        <p className="text-slate-300/90">
                          Every insight is driven through AI-powered analytics
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-blue-500/20 bg-blue-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <h2 className="mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
                    Why Use the Heartbeat Leaderboard?
                  </h2>
                  <ul className="space-y-4 text-slate-300/90">
                    <li>
                      • Stay ahead of trends and quickly identify market
                      movements
                    </li>
                    <li>
                      • Combine real-time data with trusted influencer insights
                    </li>
                    <li>
                      • Simplify your trading strategy with curated,
                      easy-to-understand insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeartbeatLeaderboard;
