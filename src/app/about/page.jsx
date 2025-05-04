"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
          className="relative pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent mb-6"
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
              className="max-w-3xl mx-auto text-gray-300 text-lg mb-12"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#050A20] to-[#0A1232] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex justify-center mb-8">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
                      <div className="absolute inset-2 rounded-full border-2 border-blue-500/50"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="/img/maxxit_logo.svg"
                          alt="Maxxit"
                          className="h-16 w-16"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-300 font-medium text-xl mb-4">
                    Platform demo video coming soon
                  </p>
                  <p className="text-gray-400">
                    Experience the transparency and power of verified crypto
                    signals
                  </p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4">
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
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4">
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
          className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-sm font-medium">
                For Users
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Maxxit Works
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-12"></div>
          </motion.div>

          <div className="relative mb-16">
            {/* Connected line */}
            <div className="absolute left-[39px] top-12 bottom-12 w-1 bg-gradient-to-b from-blue-500/80 via-blue-400/50 to-blue-500/30 hidden md:block"></div>

            <motion.div variants={containerVariants} className="space-y-12">
              {/* Step 1 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">1</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Login with X (Twitter)
                  </h3>
                  <p className="text-gray-300">
                    Start by connecting your Twitter account to personalize your
                    experience on Maxxit.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">2</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Link your Telegram
                  </h3>
                  <p className="text-gray-300">
                    Connect your Telegram account to receive real-time trading
                    signals directly.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">3</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Claim Free Credits
                  </h3>
                  <p className="text-gray-300">
                    Get your free credits to explore and try out subscriptions
                    to different influencers.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">4</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Browse Verified Accounts
                  </h3>
                  <p className="text-gray-300">
                    Find verified X accounts with backtested and ranked
                    performance metrics.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">5</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Subscribe to Trusted Accounts
                  </h3>
                  <p className="text-gray-300">
                    Use your credits to subscribe to influencers you trust and
                    receive their valuable signals.
                  </p>
                </div>
              </motion.div>

              {/* Step 6 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">6</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Get Real-Time Signals
                  </h3>
                  <p className="text-gray-300">
                    Receive clean, actionable signals directly in your Telegram
                    account.
                  </p>
                </div>
              </motion.div>

              {/* Step 7 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30 z-10">
                    <span className="text-2xl font-bold text-blue-400">7</span>
                  </div>
                </div>
                <div className="bg-[#040A20]/80 p-6 rounded-2xl border border-blue-900/30 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Track Performance
                  </h3>
                  <p className="text-gray-300">
                    Monitor signal performance in your Maxxit dashboard with
                    full visibility and transparency.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Key Guidelines */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-900/30 rounded-2xl p-8 shadow-xl"
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
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-sm font-medium">
                For Influencers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Verified Signal Provider
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-12"></div>
          </motion.div>

          {/* Why Join Maxxit */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Join Maxxit?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Influencer Onboarding Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-900/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">1</span>
                </div>
                <p className="text-gray-200">Connect your X account</p>
              </div>

              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-900/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">2</span>
                </div>
                <p className="text-gray-200">
                  Submit signal format preferences and strategy (optional)
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-900/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-400">3</span>
                </div>
                <p className="text-gray-200">
                  Enable Telegram delivery via Maxxit bot
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-[#040A20]/60 p-5 rounded-xl border border-blue-900/20">
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
            className="bg-gradient-to-b from-[#050A25] to-[#030819] border border-blue-900/30 rounded-2xl p-8 shadow-xl"
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A1232] to-[#050A20] border border-blue-500/20 p-8 md:p-12 shadow-2xl">
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
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Get Started <ChevronRight size={18} className="ml-1" />
                  </a>
                  <a
                    href="#"
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
      <Footer />
    </>
  );
};

export default AboutPage;
