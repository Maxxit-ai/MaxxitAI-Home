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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

const TermsOfUse = () => {
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
          {/* Hero section with enhanced styling */}
          <div className="relative z-10">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="hero-badge mb-8 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 backdrop-blur-sm border border-blue-400/20 transform transition-all hover:border-blue-400/40 hover:scale-105 duration-300">
                <Shield className="h-5 w-5 text-[#76CAE4]" />
                <span className="text-sm font-medium text-[#76CAE4]">
                  Legal Documentation
                </span>
              </div>

              <h1 className="terms__heading mb-6 text-4xl md:text-5xl lg:text-6xl font-bold relative opacity-0">
                <span className="gradient-text-animation">
                  Terms of Use
                </span>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 md:w-32 rounded-full gradient-background"></div>
              </h1>

              <div className="max-w-3xl mx-auto pt-6">
                <p className="terms__subtitle mb-4 text-lg md:text-xl text-slate-200/90 opacity-0">
                  Welcome to the Maxxit Platform. By accessing or using our services, 
                  you agree to comply with and be bound by these Terms of Use. Please 
                  read them carefully.
                </p>
                <p className="terms__subtitle text-lg md:text-xl text-slate-200/90 opacity-0">
                  These terms govern your use of our platform, including all features, 
                  tools, and services provided by Maxxit AI.
                </p>
              </div>
            </div>
          </div>

          {/* Main content with enhanced styling */}
          <div className="space-y-14 mt-10">
            {/* Section 1: Acceptance of Terms */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  1. Acceptance of Terms
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  By accessing and using the Maxxit platform, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Use and our Privacy Policy. 
                  If you do not agree to these terms, you may not use our services.
                </p>
              </div>
            </div>

            {/* Section 2: Description of Service */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Globe className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  2. Description of Service
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    2.1 Platform Overview
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    Maxxit provides AI-powered analysis of social media trends, particularly 
                    Twitter data, to generate insights related to cryptocurrency markets. Our 
                    platform offers tools for trend analysis, signal generation, and market intelligence.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    2.2 Information Only
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    All content, analysis, and insights provided are for informational purposes 
                    only and should not be construed as financial advice, investment recommendations, 
                    or trading signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: User Obligations */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#6ff2f2]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Users className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  3. User Obligations
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="mb-6 text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  As a user of our platform, you agree to:
                </p>
                <ul className="space-y-5 text-slate-200/90">
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Use the platform only for lawful purposes and in accordance with these terms
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Provide accurate information when creating accounts or using services
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Respect intellectual property rights and not attempt to reverse engineer our platform
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      Not interfere with or disrupt the platform's operation or security
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
                    4.1 Platform Ownership
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    All content, features, and functionality on the Maxxit platform, including 
                    but not limited to text, graphics, logos, algorithms, and software, are the 
                    exclusive property of Maxxit and are protected by copyright, trademark, and 
                    other intellectual property laws.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    4.2 Limited License
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We grant you a limited, non-exclusive, non-transferable license to access 
                    and use the platform for its intended purpose, subject to these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Disclaimers and Limitation of Liability */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <AlertOctagon className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  5. Disclaimers and Limitation of Liability
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    5.1 No Warranties
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    The platform is provided "as is" without warranties of any kind. We disclaim 
                    all warranties, express or implied, including but not limited to warranties 
                    of merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    5.2 Limitation of Liability
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    To the maximum extent permitted by law, Maxxit shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages, including 
                    but not limited to trading losses or lost profits.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Modifications and Termination */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Edit className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  6. Modifications and Termination
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    6.1 Terms Updates
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We reserve the right to modify these terms at any time. We will notify users 
                    of significant changes, and continued use of the platform constitutes acceptance 
                    of the modified terms.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    6.2 Termination Rights
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We may terminate or suspend access to our service immediately, without prior 
                    notice, for any reason, including breach of these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Contact Information */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <MessageCircle className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  7. Contact Information
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  If you have any questions about these Terms of Use, please contact us through 
                  our official channels or via our support system.
                </p>
              </div>
            </div>

            {/* Final acceptance section */}
            <div className="terms-section group relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/5 to-blue-500/10 p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/10 via-[#6ff2f2]/5 to-[#4185F3]/10 rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"></div>

              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div className="flex transform flex-col items-center gap-6 transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-400/30">
                    <Scale className="h-8 w-8 text-[#76CAE4]" />
                  </div>
                  <p className="text-xl md:text-2xl text-slate-200/90 max-w-2xl mx-auto">
                    By using the Maxxit platform, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms of Use.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2 p-3 border border-green-400/20 rounded-lg bg-green-500/10 text-green-300">
                    <Check className="h-5 w-5" />
                    <span>Last updated: June 2025</span>
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

export default TermsOfUse; 