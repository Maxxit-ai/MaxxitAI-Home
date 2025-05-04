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

      tl.fromTo(
        ".hero-video-container",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
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

        {/* Hero section with enhanced styling */}
        <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="hero-badge inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="text-gradient font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transparent. Verified. Valuable.
              </span>
            </div>

            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              {/* <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#999999] via-white to-[#999999]">
                About{" "}
              </span> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099]">
                About Maxxit
              </span>
            </h1>

            <p className="hero-subtitle max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl mb-12 leading-relaxed">
              A performance-driven platform bringing credibility and clarity to
              crypto signals from Twitter (X). Enabling users to subscribe to
              top-performing crypto influencers, receive market-tested signals
              on Telegram, and track verified performance, all with on-chain
              transparency.
            </p>

            <div className="hero-video-container relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl shadow-blue-500/10">
              <div className="p-[3px] rounded-xl overflow-hidden relative bg-gradient-to-br from-[#af85e3] via-[#6ff2f2] to-[#68e099]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#af85e3]/30 via-[#6ff2f2]/30 to-[#68e099]/30 opacity-50 z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden border-2 border-[#000612]">
                  <video
                    className="rounded-lg w-full max-w-full h-auto"
                    src="/videos/Maxxit_intro.mp4"
                    autoPlay
                    controls
                    loop
                    playsInline
                  />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 opacity-0 hover:opacity-30 blur-3xl transition-opacity duration-700"></div>
            </div>
          </div>
        </section>

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#999999] via-white to-[#999999] mb-6">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099]">
                Maxxit
              </span>
              ?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-4xl text-center">
              Maxxit is designed for crypto users seeking reliable, clear, and
              data-backed trade signals, and for influencers (signal providers)
              who want to build trust and earn revenue based on actual market
              value delivered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:from-[#af85e3]/40 group-hover:to-[#6ff2f2]/40 transition-all duration-500">
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#6ff2f2]/20 to-[#68e099]/20 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:from-[#6ff2f2]/40 group-hover:to-[#68e099]/40 transition-all duration-500">
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
        </motion.section>

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

              <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  For Users
                </span>
              </div>

              <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
                Discover Reliable Signals
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] rounded-full mb-3 mx-auto"></div>

              <p className="max-w-2xl mx-auto text-gray-300 text-lg relative z-10">
                Access verified crypto signals and make informed trading
                decisions
              </p>
            </div>

            {/* Enhanced carousel with better styling */}
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 blur-3xl rounded-[30%] opacity-30 transform -rotate-3"></div>
              <OnboardingCarousel />
            </div>
          </motion.div>

          {/* Key Guidelines with enhanced styling */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-xl mt-16 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mt-32 -mr-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 relative z-10">
              Key Guidelines for Users
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4 group-hover/item:from-[#af85e3]/30 group-hover/item:to-[#6ff2f2]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Only Follow What Works
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Performance metrics are transparently displayed so you can
                    make informed decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#6ff2f2]/20 to-[#68e099]/20 flex items-center justify-center mr-4 group-hover/item:from-[#6ff2f2]/30 group-hover/item:to-[#68e099]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Pay Only for Value
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Credits are deducted only when a signal qualifies as
                    valuable based on performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#68e099]/20 to-[#af85e3]/20 flex items-center justify-center mr-4 group-hover/item:from-[#68e099]/30 group-hover/item:to-[#af85e3]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Respect Platform Use
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Misuse of the system or bot will lead to restrictions to
                    maintain quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4 group-hover/item:from-[#af85e3]/30 group-hover/item:to-[#6ff2f2]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Join the Community
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Your feedback and ideas are welcome to help improve the
                    Maxxit platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* For Influencers Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto animate-on-scroll"
        >
          <motion.div variants={itemVariants} className="text-center relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl rounded-full opacity-30 transform scale-y-50"></div>

            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm">
              <span className="text-gradient text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                For Influencers
              </span>
            </div>

            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
              Become a Verified Signal Provider
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] rounded-full mb-12 mx-auto"></div>
          </motion.div>

          {/* Why Join Maxxit - Enhanced UI */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-purple-600/30 rounded-2xl p-6 sm:p-8 shadow-xl my-16 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full -mt-32 -ml-32 blur-3xl group-hover:bg-purple-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-8 relative z-10">
              Why Join Maxxit?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              <div className="bg-gradient-to-b from-[#050A25] to-[#030819] p-6 rounded-2xl border border-purple-600/30 hover:border-purple-600/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mb-4 group-hover/card:from-[#af85e3]/40 group-hover/card:to-[#6ff2f2]/40 transition-all duration-500">
                  <Star
                    size={24}
                    className="text-purple-400 group-hover/card:text-purple-300 transition-colors duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-3">
                  Get Rewarded Fairly
                </h4>
                <p className="text-gray-300 group-hover/card:text-gray-200 transition-colors duration-300">
                  Earn up to 100% of the revenue generated from your subscribers
                  based on the value you deliver.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#050A25] to-[#030819] p-6 rounded-2xl border border-blue-600/30 hover:border-blue-600/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6ff2f2]/20 to-[#68e099]/20 rounded-xl flex items-center justify-center mb-4 group-hover/card:from-[#6ff2f2]/40 group-hover/card:to-[#68e099]/40 transition-all duration-500">
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

              <div className="bg-gradient-to-b from-[#050A25] to-[#030819] p-6 rounded-2xl border border-teal-600/30 hover:border-teal-600/60 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-[#68e099]/20 to-[#6ff2f2]/20 rounded-xl flex items-center justify-center mb-4 group-hover/card:from-[#68e099]/40 group-hover/card:to-[#6ff2f2]/40 transition-all duration-500">
                  <Zap
                    size={24}
                    className="text-teal-400 group-hover/card:text-teal-300 transition-colors duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200 mb-3">
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-32 -mr-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-8 relative z-10">
              Influencer Onboarding Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#af85e3]/40 group-hover/step:to-[#6ff2f2]/40 transition-all duration-500">
                  <span className="font-bold text-blue-400 group-hover/step:text-blue-300 transition-colors duration-300">
                    1
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Connect your X account
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-purple-600/30 hover:border-purple-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6ff2f2]/20 to-[#68e099]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#6ff2f2]/40 group-hover/step:to-[#68e099]/40 transition-all duration-500">
                  <span className="font-bold text-purple-400 group-hover/step:text-purple-300 transition-colors duration-300">
                    2
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Submit signal format preferences and strategy (optional)
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-teal-600/30 hover:border-teal-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#68e099]/20 to-[#af85e3]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#68e099]/40 group-hover/step:to-[#af85e3]/40 transition-all duration-500">
                  <span className="font-bold text-teal-400 group-hover/step:text-teal-300 transition-colors duration-300">
                    3
                  </span>
                </div>
                <p className="text-gray-200 group-hover/step:text-white transition-colors duration-300">
                  Enable Telegram delivery via Maxxit bot
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-gradient-to-b from-[#040A20]/80 to-[#030819]/80 p-5 rounded-xl border border-solid border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group/step">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 flex items-center justify-center flex-shrink-0 group-hover/step:from-[#af85e3]/40 group-hover/step:to-[#6ff2f2]/40 transition-all duration-500">
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-32 -ml-32 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 relative z-10">
              Key Guidelines for Influencers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4 group-hover/item:from-[#af85e3]/30 group-hover/item:to-[#6ff2f2]/30 transition-all duration-300">
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
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#6ff2f2]/20 to-[#68e099]/20 flex items-center justify-center mr-4 group-hover/item:from-[#6ff2f2]/30 group-hover/item:to-[#68e099]/30 transition-all duration-300">
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
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#68e099]/20 to-[#af85e3]/20 flex items-center justify-center mr-4 group-hover/item:from-[#68e099]/30 group-hover/item:to-[#af85e3]/30 transition-all duration-300">
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

              <div className="flex items-start group/item transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#af85e3]/20 to-[#6ff2f2]/20 flex items-center justify-center mr-4 group-hover/item:from-[#af85e3]/30 group-hover/item:to-[#6ff2f2]/30 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-blue-400 group-hover/item:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-2">
                    Transparency is Rewarded
                  </h4>
                  <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                    Clear reasoning, charts, or follow-ups boost engagement and
                    retention.
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mt-40 -mr-40 blur-3xl group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full -mb-40 -ml-40 blur-3xl group-hover:from-purple-500/15 group-hover:to-blue-500/15 transition-colors duration-700"></div>


            {/* Animated gradient lines */}
            {/* <div className="absolute h-px w-full top-1/4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div> */}
            {/* <div className="absolute h-px w-full top-3/4 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse-slow delay-1000 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div> */}

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent mb-4">
                  Ready to experience the future of crypto signals?
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Join Maxxit today and gain access to verified, transparent,
                  and performance-backed signals that can transform your crypto
                  trading experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://app.maxxit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#af85e3] via-[#6ff2f2] to-[#68e099] text-[#000612] font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group/btn"
                  >
                    <span>Get Started</span>
                    <ChevronRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-transparent border border-[#af85e3]/40 hover:border-[#6ff2f2]/60 text-white hover:text-blue-300 font-medium rounded-lg transition-all duration-300 hover:bg-blue-600/10 group/btn"
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
                {/* Rotating border animations */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin-slow"></div>

                {/* Glowing background */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-md group-hover/logo:from-blue-500/10 group-hover/logo:to-purple-500/10 transition-colors duration-500"></div>

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
