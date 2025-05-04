"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
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

const AboutPage = () => {
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
      <div className="relative overflow-hidden bg-[#020617] min-h-screen">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/5 -top-[300px] -left-[300px] blur-3xl"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/5 -bottom-[300px] -right-[300px] blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/5 top-[20%] -right-[150px] blur-2xl"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/5 bottom-[20%] -left-[150px] blur-2xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] bg-center opacity-[0.02]"></div>

          {/* Animated gradient lines */}
          <div className="absolute h-px w-full top-1/4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow"></div>
          <div className="absolute h-px w-full top-2/4 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse-slow delay-700"></div>
          <div className="absolute h-px w-full top-3/4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow delay-1000"></div>
        </div>

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <span className="text-blue-400 text-sm font-medium">
                Transparent. Verified. Valuable.
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent mb-6"
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Maxxit
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl mb-12"
            >
              A performance-driven platform bringing credibility and clarity to
              crypto signals from Twitter (X). Enabling users to subscribe to
              top-performing crypto influencers, receive market-tested signals
              on Telegram, and track verified performance, all with on-chain
              transparency.
            </motion.p>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/5"
            >
              <div>
                <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
                <video
                  className="rounded-lg w-full max-w-full h-auto"
                  src="/videos/Maxxit_intro.mp4"
                  autoPlay
                  controls
                  loop
                  playsInline
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What is Maxxit section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What is <span className="text-blue-400">Maxxit</span>?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl">
              Maxxit is designed for crypto users seeking reliable, clear, and
              data-backed trade signals, and for influencers (signal providers)
              who want to build trust and earn revenue based on actual market
              value delivered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-[#040A20] border border-blue-900/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                  <Users size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  For Crypto Users
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Get access to reliable, backtested signals from verified
                influencers, delivered directly to your Telegram.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-blue-400 font-medium">Learn more</span>
                <ArrowRight size={16} className="ml-2 text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#040A20] border border-blue-900/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                  <BarChart3 size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  For Influencers
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Build credibility with transparent performance metrics and earn
                revenue based on the value you deliver.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-blue-400 font-medium">Learn more</span>
                <ArrowRight size={16} className="ml-2 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* For Users Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-8 px-4 sm:px-6 max-w-7xl mx-auto relative"
        >
          <motion.div variants={itemVariants}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-xl sm:text-2xl font-semibold">
                  For Users
                </span>
              </div>
              <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
                Discover Reliable Signals
              </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-3 mx-auto"></div>
              <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                Access verified crypto signals and make informed trading decisions
              </p>
            </div>
            <OnboardingCarousel />
          </motion.div>

          {/* Key Guidelines */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-900/30 rounded-2xl p-6 sm:p-8 shadow-xl mt-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Guidelines for Users
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Only Follow What Works
                  </h4>
                  <p className="text-gray-300">
                    Performance metrics are transparently displayed so you can
                    make informed decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Pay Only for Value
                  </h4>
                  <p className="text-gray-300">
                    Credits are deducted only when a signal qualifies as
                    valuable based on performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Respect Platform Use
                  </h4>
                  <p className="text-gray-300">
                    Misuse of the system or bot will lead to restrictions to
                    maintain quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Join the Community
                  </h4>
                  <p className="text-gray-300">
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
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-xl sm:text-2xl font-semibold">
                For Influencers
              </span>
            </div>
            <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
              Become a Verified Signal Provider
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-12 mx-auto"></div>
          </motion.div>

          {/* Why Join Maxxit */}
          <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-900/30 rounded-2xl p-6 sm:p-8 shadow-xl my-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Join Maxxit?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Star size={24} className="text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Get Rewarded Fairly
                </h4>
                <p className="text-gray-300">
                  Earn up to 100% of the revenue generated from your subscribers
                  based on the value you deliver.
                </p>
              </div>

              <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield size={24} className="text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Build Real Credibility
                </h4>
                <p className="text-gray-300">
                  Transparent performance ranking builds trust with your
                  audience and helps you stand out.
                </p>
              </div>

              <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap size={24} className="text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  No More Noise
                </h4>
                <p className="text-gray-300">
                  Focus on quality signals and let Maxxit handle delivery,
                  attribution, and trust building.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Onboarding Process */}
          <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-900/30 rounded-2xl p-6 sm:p-8 shadow-xl my-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Influencer Onboarding Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-solid border-blue-600/90">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">1</span>
                </div>
                <p className="text-gray-200">Connect your X account</p>
              </div>

              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-600/90">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">2</span>
                </div>
                <p className="text-gray-200">
                  Submit signal format preferences and strategy (optional)
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-800/90">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">3</span>
                </div>
                <p className="text-gray-200">
                  Enable Telegram delivery via Maxxit bot
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-060/90">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">4</span>
                </div>
                <p className="text-gray-200">
                  Earn revenue based on how well your signals perform
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Guidelines */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-900/30 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Guidelines for Influencers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Performance Matters
                  </h4>
                  <p className="text-gray-300">
                    Your earnings are based on real-world value delivered
                    through your signals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    No Manipulative Signals
                  </h4>
                  <p className="text-gray-300">
                    All signals are tracked with time-stamped on-chain
                    validation for transparency.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Maintain Quality
                  </h4>
                  <p className="text-gray-300">
                    Spammy or overly vague calls may be excluded from
                    credit-based payout.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-blue-400 mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Transparency is Rewarded
                  </h4>
                  <p className="text-gray-300">
                    Clear reasoning, charts, or follow-ups boost engagement and
                    retention.
                  </p>
                </div>
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
          className="py-20 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A1232] to-[#050A20] border border-blue-500/20 p-6 sm:p-8 md:p-12 shadow-2xl">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mt-20 -mr-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-20 -ml-20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to experience the future of crypto signals?
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Join Maxxit today and gain access to verified, transparent,
                  and performance-backed signals that can transform your crypto
                  trading experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://app.maxxit.ai"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Get Started <ChevronRight size={18} className="ml-1" />
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-blue-900/30 text-blue-400 border border-blue-500/40 font-medium rounded-lg transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 relative">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-blue-500/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/img/maxxit_logo.svg"
                    alt="Maxxit"
                    className="h-20 w-20 md:h-28 md:w-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Move Features and Synapse components outside the main container */}
      <div className="relative z-0 bg-[#020617]">
        <Features />
        <Synapse />
      </div>
      
      <Footer />
    </>
  );
};

export default AboutPage;
