"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import OnboardingCarousel from "../components/OnboardingCarousel";
import Features from "../components/Features/Features";
import Synapse from "../components/SynapseAI/Synapse";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  ChevronRight,
  Star,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Hero section animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.2 }
      );

      tl.fromTo(
        ".hero-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.3 }
      );

      tl.fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2 }
      );

      // Add scroll animations for each section
      gsap.utils.toArray(".animate-on-scroll").forEach((section, i) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }
  }, []);

  // Staggered animation for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />
      <div
        className="relative overflow-hidden bg-[#000612] min-h-screen"
        ref={heroRef}
      >
        {/* Background elements with enhanced styling */}

        {/* What is Maxxit section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col items-center"
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#999999] via-white to-[#999999] mb-6">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3]">
                Maxxit
              </span>
              ?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-4xl text-center">
              Maxxit is designed for crypto users seeking reliable, clear, and
              data-backed trade signals, and for influencers (signal providers)
              who want to build trust and earn revenue based on actual market
              value delivered. It is a platform bringing credibility and clarity to
              crypto signals from Twitter (X). Enabling users to subscribe to
              top-performing crypto influencers, receive market-tested signals
              on Telegram, and track verified performance, all with on-chain
              transparency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:from-[#63A7FA]/40 group-hover:to-[#6ff2f2]/40 transition-all duration-500">
                  <Users
                    size={24}
                    className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  For Crypto Users
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Get access to reliable, backtested signals from verified
                influencers, delivered directly to your Telegram.
              </p>
              {/* <div className="flex items-center mt-4">
                <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                  Learn more
                </span>
                <ArrowRight
                  size={16}
                  className="ml-2 text-blue-400 group-hover:ml-3 group-hover:text-blue-300 transition-all duration-300"
                />
              </div> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6ff2f2]/20 to-[#4185F3]/20 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:from-[#6ff2f2]/40 group-hover:to-[#4185F3]/40 transition-all duration-500">
                  <BarChart3
                    size={24}
                    className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  For Influencers
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Build credibility with transparent performance metrics and earn
                revenue based on the value you deliver.
              </p>
              {/* <div className="flex items-center mt-4">
                <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                  Learn more
                </span>
                <ArrowRight
                  size={16}
                  className="ml-2 text-blue-400 group-hover:ml-3 group-hover:text-blue-300 transition-all duration-300"
                />
              </div> */}
            </motion.div>
          </div>

          {/* Maxxit AI Robot Feature */}
          <motion.div
            variants={itemVariants}
            className="w-full rounded-2xl overflow-hidden mb-16 relative border-2 border-blue-500/30 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500"
          >
            <div className="relative bg-[#000000] min-h-[500px]">
              {/* Full width robot image as background */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/img/ai_robot.png"
                  alt="AI Robot"
                  className="object-cover object-left"
                  fill
                  sizes="100vw"
                  priority
                />
                {/* Dark overlay for mobile only */}
                <div className="absolute inset-0 bg-black/70 md:bg-transparent"></div>
              </div>

              {/* Content overlay on right side */}
              <div className="relative z-10 flex flex-col min-h-[500px] w-full">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left side empty space (for robot image) - hidden on mobile */}
                  <div className="hidden md:block md:w-1/2 lg:w-2/5"></div>

                  {/* Right side content - full width on mobile */}
                  <div className="w-full md:w-1/2 lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] mb-6">
                    Why Maxxit is the Go-To Platform for Verified Crypto Insights ?
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      Maxxit is a performance-driven platform that brings
                      credibility and clarity to crypto signals from Twitter
                      (X). It enables users to subscribe to top-performing
                      crypto influencers, receive market-tested signals on
                      Telegram, and track verified performance, all with
                      on-chain transparency.
                    </p>

                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-5">
                      Maxxit designed for :
                    </h3>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-blue-400 text-sm font-bold">
                            •
                          </span>
                        </div>
                        <p className="text-gray-300">
                          Crypto users seeking reliable, clear, and data-backed
                          trade signals
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-blue-400 text-sm font-bold">
                            •
                          </span>
                        </div>
                        <p className="text-gray-300">
                          Influencers (signal providers) who want to build trust
                          and earn revenue based on actual market value
                          delivered
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="hero-badge inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="text-gradient font-medium bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Transparent. Verified. Valuable.
              </span>
            </div>

            <h1 className="hero-title text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3]">
                About Maxxit
              </span>
            </h1>

            <p className="hero-subtitle max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
              A performance-driven platform bringing credibility and clarity to
              crypto signals from Twitter (X). Enabling users to subscribe to
              top-performing crypto influencers, receive market-tested signals
              on Telegram, and track verified performance, all with on-chain
              transparency.
            </p>
          </div>
        </section> */}

        {/* For Users Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-8 px-4 sm:px-6 max-w-7xl mx-auto relative animate-on-scroll"
        >
          <motion.div variants={itemVariants}>
            <div className="text-center mb-10 relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-30 transform scale-y-50"></div>

              <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                  For Users
                </span>
              </div>

              <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
                Discover Reliable Signals
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-3 mx-auto"></div>

              <p className="max-w-2xl mx-auto text-gray-300 text-lg relative z-10">
                Access verified crypto signals and make informed trading
                decisions
              </p>
            </div>

            {/* Enhanced carousel with better styling */}
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/5 via-blue-500/5 to-blue-500/5 blur-3xl rounded-[30%] opacity-30 transform -rotate-3"></div>
              <OnboardingCarousel />
            </div>
          </motion.div>

          {/* Key Guidelines with enhanced styling */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-xl mt-16 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-32 -ml-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 relative z-10">
              Key Guidelines for Users
            </h3>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4 group-hover/item:from-[#63A7FA]/30 group-hover/item:to-[#6ff2f2]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8">
                  Only Follow What Works
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                  Performance metrics are transparently displayed so you can make informed decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#6ff2f2]/20 to-[#4185F3]/20 flex items-center justify-center mr-4 group-hover/item:from-[#6ff2f2]/30 group-hover/item:to-[#4185F3]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8">
                  Respect Platform Use
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                  Misuse of the system or bot will lead to restrictions to maintain quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#4185F3]/20 to-[#63A7FA]/20 flex items-center justify-center mr-4 group-hover/item:from-[#4185F3]/30 group-hover/item:to-[#63A7FA]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8">
                  Join the Community
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                  Your feedback and ideas are welcome to help improve the Maxxit platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>



        {/* CTA Section with enhanced styling */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0A1232] to-[#050A20] border border-blue-500/20 p-6 sm:p-8 md:p-12 shadow-2xl group hover:border-blue-500/30 transition-all duration-500">
            {/* Enhanced Background design elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full -mt-40 -mr-40 blur-3xl group-hover:from-blue-500/15 group-hover:to-blue-500/15 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full -mb-40 -ml-40 blur-3xl group-hover:from-blue-500/15 group-hover:to-blue-500/15 transition-colors duration-700"></div>

            {/* Animated gradient lines */}
            {/* <div className="absolute h-px w-full top-1/4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div> */}
            {/* <div className="absolute h-px w-full top-3/4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow delay-1000 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div> */}

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-4">
                  Ready to experience the future of crypto signals?
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Join Maxxit today and gain access to verified, transparent,
                  and performance-backed signals that can transform your crypto
                  trading experience.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    href="https://app.maxxit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] text-[#000612] font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group/btn"
                  >
                    <span>Get Started</span>
                    <ChevronRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                  <Link
                    href="/analysts"
                    className="inline-flex items-center px-6 py-3 bg-transparent border border-[#63A7FA]/40 hover:border-[#6ff2f2]/60 text-white hover:text-blue-300 font-medium rounded-lg transition-all duration-300 hover:bg-blue-600/10 group/btn"
                  >
                    <span>Become an Analyst</span>
                    <ArrowRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 relative group/logo">
                {/* Rotating border animations */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin-slow"></div>

                {/* Glowing background */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/5 to-blue-500/5 blur-md group-hover/logo:from-blue-500/10 group-hover/logo:to-blue-500/10 transition-colors duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-24 w-24 md:h-32 md:w-32 group-hover/logo:scale-110 transition-transform duration-500">
                    <Image
                      src="/img/maxxit_logo.svg"
                      alt="Maxxit"
                      fill
                      sizes="(min-width: 768px) 128px, 96px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Move Features and Synapse components outside the main container */}
      <div className="relative z-0 bg-[#000612]">
        <Features />
        <Synapse />
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
