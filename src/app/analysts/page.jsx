"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  ChevronRight,
  Star,
  BarChart3,
  TrendingUp,
  Brain,
  DollarSign,
  Target,
  Trophy,
  Eye,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Embla Carousel styles will be handled with custom CSS

const AnalystsPage = () => {
  const heroRef = useRef(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: false,
      slidesToScroll: 1,
      skipSnaps: false,
      startIndex: 0,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveStepIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setActiveStepIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Step-by-step process data for Swiper
  const processSteps = [
    {
      step: "1",
      title: "Tweet as usual",
      description:
        "Post trade ideas, setups, or analysis like you normally do on X. You don't need to tag us or change your format.",
      icon: <Users size={32} />,
      gradient: "from-purple-500/20 to-pink-500/20",
      iconGradient: "from-purple-400 to-pink-400",
    },
    {
      step: "2",
      title: "We parse your signals",
      description:
        "Maxxit AI continuously monitors selected accounts and parses tweets into standardized signals — including entry, exit, token, direction, and timeframe.",
      icon: <Brain size={32} />,
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconGradient: "from-teal-400 to-cyan-400",
    },
    {
      step: "3",
      title: "Signals go on-chain",
      description:
        "Parsed signals are stored on IPFS and indexed to an on-chain CID, creating a verifiable public record of your calls.",
      icon: <Shield size={32} />,
      gradient: "from-green-500/20 to-emerald-500/20",
      iconGradient: "from-green-400 to-emerald-400",
    },
    {
      step: "4",
      title: "You get ranked",
      description:
        "Your signals are evaluated in real-time: PnL, risk-adjusted returns, hit rate, and more. You're ranked against other accounts on a live leaderboard.",
      icon: <BarChart3 size={32} />,
      gradient: "from-orange-500/20 to-yellow-500/20",
      iconGradient: "from-orange-400 to-yellow-400",
    },
    {
      step: "5",
      title: "Earn from subscribers",
      description:
        "Users subscribe to analysts they trust. When your signals are used, you earn revenue — based on actual results, not vanity metrics.",
      icon: <DollarSign size={32} />,
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconGradient: "from-indigo-400 to-blue-400",
    },
  ];

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
        {/* Value Proposition Section - Moved to top */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="pt-16 pb-8 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="mb-16 flex flex-col items-center"
          >
            <div className="hero-badge inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <Brain size={20} className="mr-2 text-blue-400" />
              <span className="text-gradient font-medium bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Maxxit for Analysts
              </span>
            </div>

            <h2 className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#999999] via-white to-[#999999] mb-6 text-center">
              Keep Tweeting — We Handle the Rest
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-8"></div>

            <div className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-500/30 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group max-w-4xl mb-12">
              <p className="text-gray-300 text-lg leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                Turn your public research into verified income. Maxxit empowers
                Crypto-Twitter analysts and signal providers to monetize their
                expertise based on measurable performance — not hype or
                followers. By converting your tweets into real, on-chain tracked
                signals, Maxxit gives you the credibility, exposure, and revenue
                you deserve — without changing your workflow.
              </p>
            </div>

            {/* Buttons moved here after Value Proposition */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://app.maxxit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] text-[#000612] font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group/btn"
              >
                <span>Start Earning</span>
                <ChevronRight
                  size={18}
                  className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 bg-transparent border border-[#63A7FA]/40 hover:border-[#6ff2f2]/60 text-white hover:text-blue-300 font-medium rounded-lg transition-all duration-300 hover:bg-blue-600/10 group/btn"
              >
                <span>Learn How</span>
                <ArrowRight
                  size={18}
                  className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* How It Works Section - Enhanced with Swiper */}
        <motion.section
          id="how-it-works"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="text-center relative mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-8">
              Step-by-Step Process
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-8 mx-auto"></div>
          </motion.div>

          {/* Enhanced Embla Carousel */}
          <div className="w-full bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-3xl shadow-2xl shadow-blue-500/10">
            <div className="max-w-7xl mx-auto py-4 px-4">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {processSteps.map((step, index) => (
                    <div key={index} className="embla__slide">
                      <div className="h-full px-3">
                        <div className="group h-full">
                          <div
                            className={`bg-gradient-to-br ${step.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 h-[380px] sm:h-[400px] lg:h-[420px] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between`}
                          >
                            {/* Animated background elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10 flex flex-col h-full">
                              {/* Step number badge */}
                              <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    {step.step}
                                  </span>
                                </div>
                                <div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10`}
                                >
                                  <span
                                    className={`bg-gradient-to-r ${step.iconGradient} bg-clip-text text-transparent`}
                                  >
                                    {step.icon}
                                  </span>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4 group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
                                  {step.title}
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                  {step.description}
                                </p>
                              </div>

                              {/* Progress indicator */}
                              <div className="mt-6 flex items-center">
                                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  Step {step.step}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex sm:flex-row justify-center items-center gap-4 my-8">
                {/* Left navigation button */}
                <button
                  onClick={scrollPrev}
                  className="embla__prev w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-600/10 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 order-1"
                >
                  <ChevronRight
                    size={16}
                    className="text-blue-400 rotate-180"
                  />
                </button>

                {/* Pagination dots */}
                <div className="flex gap-1 sm:gap-2 flex-wrap justify-center order-2">
                  {processSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`step-pagination-bullet transition-all duration-300 ${
                        index === activeStepIndex ? "active" : ""
                      }`}
                    >
                      <span className="step-number">{step.step}</span>
                    </button>
                  ))}
                </div>

                {/* Right navigation button */}
                <button
                  onClick={scrollNext}
                  className="embla__next w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-600/10 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 order-3"
                >
                  <ChevronRight size={16} className="text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Revenue Model Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="text-center relative mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <DollarSign size={20} className="mr-2 text-blue-400" />
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Revenue Model
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-6">
              Maxxit Pays You Based on Real-World Impact
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-8 mx-auto"></div>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              As your accuracy grows, so does your audience and earnings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <DollarSign size={24} />,
                title: "Subscription Payouts",
                description:
                  "You earn a share (up to 100%) of revenue from users who subscribe to your signals.",
              },
              {
                icon: <Trophy size={24} />,
                title: "Performance Leaderboard Boost",
                description:
                  "Analysts ranked highly receive boosted discoverability and bonus incentives.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Verified Signals",
                description:
                  "You gain credibility through a permanent, on-chain signal record — useful for collaborations, job offers, or building an audience.",
              },
              {
                icon: <Users size={24} />,
                title: "Affiliate Bonuses (Optional)",
                description:
                  "Earn extra by bringing users to Maxxit through referral codes.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-[#63A7FA]/40 group-hover:to-[#6ff2f2]/40 transition-all duration-500">
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Real-Time Rankings Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="text-center relative mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <BarChart3 size={20} className="mr-2 text-blue-400" />
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Real-Time Rankings
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-6">
              Transparent Performance Metrics
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-8 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-xl mb-8 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <p className="text-gray-300 text-lg mb-8 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
              We track every signal you post using objective, transparent
              metrics. Rankings are updated daily and visible on the Maxxit
              Analyst Leaderboard. You can filter by token (e.g., BTC-only),
              time window (7D, 30D), and more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  title: "Raw PnL",
                  description:
                    "Profit/loss calculated from real token price moves",
                },
                {
                  title: "Risk-adjusted Score",
                  description:
                    "Volatility-aware returns (e.g., Sharpe-like metrics)",
                },
                {
                  title: "Hit Rate",
                  description: "% of signals that ended profitably",
                },
                {
                  title: "Consistency",
                  description: "Signal regularity, holding time, variance",
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-4 rounded-xl border border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 group/metric"
                >
                  <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 group-hover/metric:from-blue-200 group-hover/metric:to-white transition-all duration-300">
                    {metric.title}
                  </h4>
                  <p className="text-gray-300 text-sm group-hover/metric:text-gray-200 transition-colors duration-300">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* What We Don't Do Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="text-center relative mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-red-500/20 border border-red-500/30 backdrop-blur-sm">
              <Shield size={20} className="mr-2 text-red-400" />
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-red-400 to-red-400 bg-clip-text text-transparent">
                What We Don't Do
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-8">
              Our Commitments to You
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-red-400 to-red-600 rounded-full mb-8 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No Rewriting",
                description:
                  "We never rewrite or reinterpret your signals without traceability.",
              },
              {
                title: "No Gatekeeping",
                description:
                  "We don't gatekeep — if you're accurate, the data shows it.",
              },
              {
                title: "No Paid Boosting",
                description:
                  "Rankings are merit-based only. No paid boosting allowed.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-b from-[#0A0515] to-[#050A20] border border-red-600/30 rounded-2xl p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-red-500/40 group-hover:to-red-600/40 transition-all duration-500">
                    <span className="text-red-400 text-xl font-bold group-hover:text-red-300 transition-colors duration-500">
                      ❌
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ideal Analyst Profile Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div
            variants={itemVariants}
            className="text-center relative mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <UserCheck size={20} className="mr-2 text-blue-400" />
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Ideal Analyst Profile
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-8">
              Are You Ready to Join?
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-8 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {[
                {
                  icon: <Target size={24} />,
                  title: "Experienced finfluencer or trader",
                  description: "Active following with established credibility",
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: "Posts consistent setups",
                  description: "Regular trade ideas or market commentary",
                },
                {
                  icon: <Eye size={24} />,
                  title: "Believes in transparency",
                  description: "Values signal accountability and open metrics",
                },
                {
                  icon: <DollarSign size={24} />,
                  title: "Wants to turn insight into income",
                  description:
                    "Without paywalling everything or changing workflow",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start group/item transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4 group-hover/item:from-[#63A7FA]/30 group-hover/item:to-[#6ff2f2]/30 transition-all duration-300">
                    <span className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* For Influencers Section - Enhanced Creative Design */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div variants={itemVariants} className="text-center relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 blur-3xl rounded-full opacity-30 transform scale-y-50"></div>

            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                For Influencers
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
              Become a Verified Signal Provider
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full mb-12 mx-auto"></div>
          </motion.div>

          {/* Why Join Maxxit - Enhanced UI */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-xl my-16 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -mt-32 -ml-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 relative z-10">
              Why Join Maxxit?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              <div className="bg-gradient-to-b from-[#050A25] to-[#030819] p-6 rounded-2xl border border-blue-600/30 hover:border-blue-600/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mb-4 group-hover/card:from-[#63A7FA]/40 group-hover/card:to-[#6ff2f2]/40 transition-all duration-500">
                  <Star
                    size={24}
                    className="text-blue-400 group-hover/card:text-blue-300 transition-colors duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-3">
                  Get Rewarded Fairly
                </h4>
                <p className="text-gray-300 group-hover/card:text-gray-200 transition-colors duration-300">
                  Earn up to 100% of the revenue generated from your subscribers
                  based on the value you deliver.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#050A25] to-[#030819] p-6 rounded-2xl border border-blue-600/30 hover:border-blue-600/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6ff2f2]/20 to-[#4185F3]/20 rounded-xl flex items-center justify-center mb-4 group-hover/card:from-[#6ff2f2]/40 group-hover/card:to-[#4185F3]/40 transition-all duration-500">
                  <Shield
                    size={24}
                    className="text-blue-400 group-hover/card:text-blue-300 transition-colors duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-3">
                  Build Real Credibility
                </h4>
                <p className="text-gray-300 group-hover/card:text-gray-200 transition-colors duration-300">
                  Transparent performance ranking builds trust with your
                  audience and helps you stand out.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#050A25] to-[#030819] p-6 rounded-2xl border border-blue-600/30 hover:border-blue-600/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4185F3]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mb-4 group-hover/card:from-[#4185F3]/40 group-hover/card:to-[#6ff2f2]/40 transition-all duration-500">
                  <Zap
                    size={24}
                    className="text-blue-400 group-hover/card:text-blue-300 transition-colors duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-3">
                  No More Noise
                </h4>
                <p className="text-gray-300 group-hover/card:text-gray-200 transition-colors duration-300">
                  Focus on quality signals and let Maxxit handle delivery,
                  attribution, and trust building.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Onboarding Process - Enhanced UI */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-xl my-16 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-32 -mr-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 relative z-10">
              Influencer Onboarding Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#63A7FA]/40 group-hover/step:to-[#6ff2f2]/40 transition-all duration-500">
                  <span className="font-bold text-blue-400 group-hover/step:text-blue-300 transition-colors duration-300">
                    1
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Connect your X account
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6ff2f2]/20 to-[#4185F3]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#6ff2f2]/40 group-hover/step:to-[#4185F3]/40 transition-all duration-500">
                  <span className="font-bold text-blue-400 group-hover/step:text-blue-300 transition-colors duration-300">
                    2
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Submit signal format preferences and strategy (optional)
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4185F3]/20 to-[#63A7FA]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#4185F3]/40 group-hover/step:to-[#63A7FA]/40 transition-all duration-500">
                  <span className="font-bold text-blue-400 group-hover/step:text-blue-300 transition-colors duration-300">
                    3
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Enable Telegram delivery via Maxxit bot
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#63A7FA]/40 group-hover/step:to-[#6ff2f2]/40 transition-all duration-500">
                  <span className="font-bold text-blue-400 group-hover/step:text-blue-300 transition-colors duration-300">
                    4
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Earn revenue based on how well your signals perform
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Guidelines - Enhanced UI */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-600/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-32 -ml-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 relative z-10">
              Key Guidelines for Influencers
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
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Performance Matters
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Your earnings are based on real-world value delivered
                    through your signals.
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
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    No Manipulative Signals
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    All signals are tracked with time-stamped on-chain
                    validation for transparency.
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
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Maintain Quality
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Spammy or overly vague calls may be excluded from
                    credit-based payout.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Onboarding Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mt-12">
              Your Journey to Success
            </h3>

            <div className="relative mt-8">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] rounded-full hidden lg:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Connect & Verify",
                    description:
                      "Link your X account and verify your identity to join our verified creators network.",
                    icon: <UserCheck size={24} />,
                    side: "left",
                  },
                  {
                    step: "02",
                    title: "Configure Signals",
                    description:
                      "Set your signal format preferences and strategy to optimize parsing accuracy.",
                    icon: <Brain size={24} />,
                    side: "right",
                  },
                  {
                    step: "03",
                    title: "Start Broadcasting",
                    description:
                      "Enable Telegram delivery and begin earning from your first subscribers.",
                    icon: <Zap size={24} />,
                    side: "left",
                  },
                  {
                    step: "04",
                    title: "Scale & Earn",
                    description:
                      "Grow your subscriber base and maximize earnings with performance-based rewards.",
                    icon: <TrendingUp size={24} />,
                    side: "right",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      step.side === "right" ? "lg:flex-row-reverse" : ""
                    } group`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        step.side === "right"
                          ? "lg:text-right lg:pr-12"
                          : "lg:pl-12"
                      }`}
                    >
                      <div className="bg-gradient-to-br from-[#0A0F1E] to-[#0F1629] border border-[#63A7FA]/20 rounded-2xl p-6 lg:p-8 hover:border-[#63A7FA]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#63A7FA]/10 group-hover:-translate-y-1">
                        <div className="flex items-center mb-4 lg:hidden">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4">
                            <span className="text-[#63A7FA]">{step.icon}</span>
                          </div>
                          <span className="text-3xl font-bold bg-gradient-to-r from-[#63A7FA] to-[#6ff2f2] bg-clip-text text-transparent">
                            {step.step}
                          </span>
                        </div>

                        <h4 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-[#63A7FA] bg-clip-text text-transparent mb-3">
                          {step.title}
                        </h4>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline node - hidden on mobile */}
                    <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#63A7FA] to-[#6ff2f2] items-center justify-center border-4 border-[#000612] relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>

                    {/* Icon side - hidden on mobile */}
                    <div
                      className={`hidden lg:flex flex-1 ${
                        step.side === "left"
                          ? "justify-start pl-12"
                          : "justify-end pr-12"
                      }`}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#63A7FA]/20 to-[#6ff2f2]/20 backdrop-blur-sm border border-[#63A7FA]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-[#63A7FA] text-2xl">
                          {step.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0A1232] to-[#050A20] border border-blue-500/20 p-6 sm:p-8 md:p-12 shadow-2xl group hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full -mt-40 -mr-40 blur-3xl group-hover:from-blue-500/15 group-hover:to-blue-500/15 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full -mb-40 -ml-40 blur-3xl group-hover:from-blue-500/15 group-hover:to-blue-500/15 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-4">
                  Ready to monetize your crypto expertise?
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Join Maxxit today and start earning revenue based on your
                  actual performance. Turn your insights into verified income
                  without changing how you work.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    href="https://app.maxxit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#63A7FA] via-[#6ff2f2] to-[#4185F3] text-[#000612] font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group/btn"
                  >
                    <span>Become an Analyst</span>
                    <ChevronRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-transparent border border-[#63A7FA]/40 hover:border-[#6ff2f2]/60 text-white hover:text-blue-300 font-medium rounded-lg transition-all duration-300 hover:bg-blue-600/10 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 relative group/logo">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin-slow"></div>
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

      <Footer />

      {/* Custom CSS for Embla Carousel and animations */}
      <style jsx global>{`
        .embla {
          overflow: hidden;
        }

        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
        }

        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }

        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }

        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 33.333333%;
          }
        }

        .step-pagination-bullet {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          margin: 0 4px;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          background: rgba(5, 10, 37, 0.3);
          cursor: pointer;
        }

        @media (min-width: 640px) {
          .step-pagination-bullet {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            margin: 0 8px;
          }
        }

        .step-pagination-bullet .step-number {
          color: white;
          font-weight: bold;
          font-size: 14px;
        }

        @media (min-width: 640px) {
          .step-pagination-bullet .step-number {
            font-size: 16px;
          }
        }

        .step-pagination-bullet.active {
          transform: scale(1.1);
          border-color: rgba(99, 167, 250, 0.5);
          box-shadow: 0 8px 32px rgba(99, 167, 250, 0.3);
          background: rgba(99, 167, 250, 0.2);
        }

        .step-pagination-bullet:hover {
          border-color: rgba(99, 167, 250, 0.3);
          background: rgba(99, 167, 250, 0.1);
        }

        .embla__prev,
        .embla__next {
          cursor: pointer;
          outline: none;
        }

        .embla__prev:disabled,
        .embla__next:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </>
  );
};

export default AnalystsPage;
