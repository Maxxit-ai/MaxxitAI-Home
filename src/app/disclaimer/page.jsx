"use client";

import React, { useRef, useEffect } from "react";
import StarGrid from "../components/Hero/StarGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Users,
  FileText,
  AlertTriangle,
  Database,
  Lock,
  AlertOctagon,
  Scale,
  Edit,
  Globe,
  MessageCircle,
  XCircle,
  BookOpen,
  Check,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../../../public/img/maxxit_black_bg.png";
import Link from "next/link";

// Decorative background element component
const BackgroundBlob = ({ className, color, size, delay, duration }) => {
  const blobRef = useRef(null);

  useEffect(() => {
    if (blobRef.current) {
      // Random rotation
      const rotation = Math.random() * 360;

      // Animation with GSAP
      gsap.set(blobRef.current, {
        rotation: rotation,
        scale: 0.8,
        opacity: 0,
      });

      gsap.to(blobRef.current, {
        opacity: 1,
        scale: 1,
        duration: duration || 1.5,
        delay: delay || 0,
        ease: "power2.inOut",
      });

      // Gentle floating animation
      gsap.to(blobRef.current, {
        y: "20px",
        rotation: rotation + 5,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [delay, duration]);

  return (
    <div
      ref={blobRef}
      className={`absolute rounded-full blur-3xl opacity-0 ${className}`}
      style={{
        width: size || "400px",
        height: size || "400px",
        background: color || "rgba(118, 202, 228, 0.03)",
        willChange: "transform, opacity",
      }}
    />
  );
};

const TermsAndConditions = () => {
  const container = useRef(null);
  const sectionRefs = useRef([]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Add refs to sections
  useEffect(() => {
    sectionRefs.current = document.querySelectorAll(".terms-section");
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero section animations
      tl.fromTo(
        ".terms__heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      );

      tl.fromTo(
        ".terms__subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".hero-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        "-=1.5"
      );

      // Create scroll animations for each section
      sectionRefs.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate the content items within each section
        const contentItems = section.querySelectorAll(".section-content-item");
        gsap.fromTo(
          contentItems,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 45%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen bg-[#000612] text-white">
      <Navbar />
      <div
        className="min-h-screen pb-20 text-center text-[#76CAE4] overflow-hidden"
        ref={container}
      >
        {/* Background decorative elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top left blob */}
          <BackgroundBlob
            className="left-[-100px] top-[10%]"
            color="rgba(175, 133, 227, 0.04)"
            size="500px"
            delay={0.2}
          />

          {/* Top right blob */}
          <BackgroundBlob
            className="right-[-120px] top-[5%]"
            color="rgba(111, 242, 242, 0.04)"
            size="600px"
            delay={0.5}
          />

          {/* Middle left blob */}
          <BackgroundBlob
            className="left-[10%] top-[40%]"
            color="rgba(104, 224, 153, 0.03)"
            size="400px"
            delay={0.8}
            duration={0.6}
          />

          {/* Bottom right blob */}
          <BackgroundBlob
            className="right-[5%] bottom-[15%]"
            color="rgba(175, 133, 227, 0.04)"
            size="450px"
            delay={1}
          />

          {/* Bottom center blob */}
          <BackgroundBlob
            className="left-[40%] bottom-[5%]"
            color="rgba(111, 242, 242, 0.03)"
            size="550px"
            delay={1.5}
            duration={0.7}
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-12 z-10">
          {/* <StarGrid /> */}

          {/* Hero section with enhanced styling */}
          <div className="relative z-10">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="hero-badge mb-8 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 backdrop-blur-sm border border-blue-400/20 transform transition-all hover:border-blue-400/40 hover:scale-105 duration-300">
                <Shield className="h-5 w-5 text-[#76CAE4]" />
                <span className="text-sm font-medium text-[#76CAE4]">
                  Legal Documentation
                </span>
              </div>

              <h1 className="terms__heading mb-6 text-5xl md:text-6xl lg:text-7xl font-bold relative opacity-0">
                <span className="gradient-text-animation">
                  Maxxit Terms of Use
                </span>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 md:w-32 rounded-full gradient-background"></div>
              </h1>

              <div className="max-w-3xl mx-auto pt-6">
                <p className="terms__subtitle mb-4 text-lg md:text-xl text-slate-200/90 opacity-0">
                  Welcome to the Maxxit Platform, developed and operated by the
                  Maxxit team ("we," "us," or "our"). By accessing or using the
                  Platform or engaging with our tools, analyses, or services
                  (collectively, the "Services"), you agree to these Terms of
                  Use (the "Terms").
                </p>
                <p className="terms__subtitle text-lg md:text-xl text-slate-200/90 opacity-0">
                  These Terms apply to all users of the Platform, including
                  those interacting with features such as the Twitter analysis
                  tools, the Impact Factor metric, and the Heartbeat parameter.
                </p>

                {/* <div className="mt-8 flex items-center justify-center gap-5">
                  <Link href="/">
                    <button className="text-[#000612] font-semibold gradient-background rounded-xl px-6 py-3 flex items-center justify-center gap-2 group transition-all duration-300 transform hover:scale-105">
                      <span>Back to Home</span>
                      <ChevronRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Styled image container */}
            {/* <div className="relative w-full max-w-5xl mx-auto mb-20 transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#63A7FA]/20 via-[#6ff2f2]/20 to-[#4185F3]/20 rounded-3xl blur-xl -z-10"></div>
              <div className="rounded-3xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10">
                <Image
                  src={img}
                  alt="Maxxit Platform"
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div> */}
          </div>

          {/* Main content with enhanced styling */}
          <div className="space-y-14 mt-10">
            {/* Section 1: Eligibility and Access */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Users className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  1. Eligibility and Access
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    1.1 Purpose of the Platform
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    The Platform is designed to analyze Twitter accounts, assess
                    the impact of their tweets on trading markets, and evaluate
                    their alignment with current trends using proprietary
                    metrics such as Heartbeat and Impact Factor.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    1.2 Access Requirements
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    Access to certain features or premium services may require
                    account registration, compliance with eligibility criteria,
                    or other conditions we establish.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    1.3 User Responsibility
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    You are responsible for ensuring that your use of the
                    Platform complies with all applicable laws and regulations
                    in your jurisdiction. Unauthorized use of the Platform is
                    prohibited.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Nature of the Content */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <FileText className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  2. Nature of the Content
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    2.1 Informational Use Only
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    All analyses, metrics, and insights provided by the Platform
                    are for informational purposes only. They are not investment
                    advice or recommendations to trade, buy, sell, or hold any
                    financial instrument. Always conduct your own research and
                    consult qualified professionals before making financial or
                    investment decisions.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    2.2 Data and Outputs
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    The results and metrics generated by the Platform, including
                    Heartbeat and Impact Factor, are based on proprietary
                    algorithms and publicly available data. While we strive for
                    accuracy, the insights provided may contain errors,
                    omissions, or misinterpretations. Use the Content at your
                    own discretion.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    2.3 Dynamic and Unpredictable Data
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    Our analyses rely on dynamic, real-time data. The
                    performance of metrics or tools may vary, and the insights
                    provided are inherently unpredictable. Past performance is
                    not indicative of future results.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Prohibited Conduct */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#6ff2f2]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  3. Prohibited Conduct
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="mb-6 text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  When using the Platform, you agree not to:
                </p>
                <ul className="space-y-5 text-slate-200/90">
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-red-500/20">
                      <XCircle className="h-5 w-5 text-red-400 group-hover/item:text-red-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Use the Platform for any unlawful purpose or to violate
                      any laws or regulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-red-500/20">
                      <XCircle className="h-5 w-5 text-red-400 group-hover/item:text-red-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Misrepresent, distort, or misuse the analyses, metrics, or
                      insights provided by the Platform.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-red-500/20">
                      <XCircle className="h-5 w-5 text-red-400 group-hover/item:text-red-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Attempt to manipulate the Platform's systems, metrics, or
                      data sources.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-red-500/20">
                      <XCircle className="h-5 w-5 text-red-400 group-hover/item:text-red-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Upload or transmit malicious content, such as viruses,
                      intended to disrupt the Platform.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-red-500/20">
                      <XCircle className="h-5 w-5 text-red-400 group-hover/item:text-red-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Share false or misleading information about the Platform's
                      capabilities or results.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4: Intellectual Property */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#6ff2f2]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Lock className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  4. Intellectual Property
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    4.1 Ownership
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    The intellectual property rights, including algorithms,
                    methodologies, and tools used within the Platform, belong
                    exclusively to us. You may not reproduce, distribute,
                    modify, or create derivative works from our Content without
                    prior written consent.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    4.2 User Contributions
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    By submitting feedback, suggestions, or other content to the
                    Platform, you grant us a non-exclusive, worldwide,
                    royalty-free license to use, reproduce, and incorporate such
                    input into our Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Privacy and Data Usage */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Database className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  5. Privacy and Data Usage
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    5.1 Data Collection
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    The Platform may collect data related to your usage
                    patterns, queries, and other inputs for analytics,
                    performance improvement, and error tracking.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    5.2 Privacy Protection
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We prioritize your privacy. Refer to our Privacy Policy for
                    detailed information on how your data is collected, stored,
                    and used.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Disclaimer of Warranties */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <AlertOctagon className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  6. Disclaimer of Warranties
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    6.1 No Guarantees
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    The Platform and its features, including analyses, metrics,
                    and insights, are provided on an "as is" and "as available"
                    basis without warranties of any kind. We disclaim any
                    warranties, express or implied, including but not limited to
                    fitness for a particular purpose, accuracy, or reliability.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    6.2 Risk Acknowledgment
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    You acknowledge that any reliance on the Platform's insights
                    or metrics is at your own risk. We do not guarantee specific
                    outcomes or results based on the use of the Platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Limitation of Liability */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Scale className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  7. Limitation of Liability
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  To the fullest extent permitted by law, we are not liable for
                  any direct, indirect, incidental, consequential, or punitive
                  damages resulting from your use of the Platform, including but
                  not limited to losses in trading or investments.
                </p>
              </div>
            </div>

            {/* Remaining sections with enhanced styling */}
            {/* Section 8: Modifications to the Terms */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Edit className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  8. Modifications to the Terms
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  We may modify these Terms at any time. Updates will be
                  effective upon posting on our website or Platform. Continued
                  use of the Services after changes constitutes your acceptance
                  of the revised Terms.
                </p>
              </div>
            </div>

            {/* Section 9: Governing Law */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#6ff2f2]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Globe className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  9. Governing Law
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  These Terms are governed by and construed in accordance with
                  the laws of the jurisdiction in which we operate. Disputes
                  shall be resolved exclusively by the courts in that
                  jurisdiction.
                </p>
              </div>
            </div>

            {/* Section 10: Contact Us */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <MessageCircle className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  10. Contact Us
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  For questions or support, please reach out via our official
                  channels.
                </p>
              </div>
            </div>

            {/* Final acceptance section with enhanced styling */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/5 to-blue-500/10 p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/10 via-[#6ff2f2]/5 to-[#4185F3]/10 rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"></div>

              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div className="flex transform flex-col items-center gap-6 transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-400/30">
                    <BookOpen className="h-8 w-8 text-[#76CAE4]" />
                  </div>
                  <p className="text-xl md:text-2xl text-slate-200/90 max-w-2xl mx-auto">
                    By using the Maxxit Platform, you confirm that you have
                    read, understood, and agree to these Terms of Use.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2 p-3 border border-green-400/20 rounded-lg bg-green-500/10 text-green-300">
                    <Check className="h-5 w-5" />
                    <span>I acknowledge and accept the terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
