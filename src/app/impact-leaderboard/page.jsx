"use client";

import React, { useRef } from "react";
import StarGrid from "../components/Hero/StarGrid";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";

const ImpactLeaderboard = () => {
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="text-sm font-medium text-blue-400">
                    Impact Leaderboard
                  </span>
                </div>
                <h1 className="hero__heading mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent opacity-0 md:text-6xl">
                  Redefining Influence in Crypto
                </h1>
                <p className="hero__body max-w-2xl text-xl text-slate-300/90 opacity-0">
                  Discover the most impactful voices in crypto, ranked by their
                  measurable influence on the market.
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
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-white">
                          Influencer Analysis
                        </h3>
                        <p className="text-slate-300/90">
                          Tracks Crypto Twitter influencers, analyzing their
                          predictions, sentiment, and engagement metrics.
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
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-white">
                          Performance Metrics
                        </h3>
                        <p className="text-slate-300/90">
                          Calculates accuracy and profitability over multiple
                          timeframes (1 day, 1 week, 1 month, and 1 year).
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div>
                        <h3 className="font-semibold text-white">
                          Dynamic Rankings
                        </h3>
                        <p className="text-slate-300/90">
                          Updates rankings in real-time to reflect the latest
                          data and market impacts.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-blue-500/20 bg-blue-900/20 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <h2 className="mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
                    Why Use the Impact Leaderboard?
                  </h2>
                  <ul className="space-y-4 text-slate-300/90">
                    <li>
                      • Identify credible influencers with proven track records
                    </li>
                    <li>
                      • Make informed decisions based on accurate, data-driven
                      insights
                    </li>
                    <li>
                      • Stay ahead with real-time updates on influencer
                      performance
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

export default ImpactLeaderboard;
