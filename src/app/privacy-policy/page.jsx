"use client";

import React, { useRef, useEffect } from "react";
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
  Eye,
  UserCheck,
  Globe,
  MessageCircle,
  Settings,
  BookOpen,
  Check,
  Cookie,
  Server,
  Smartphone,
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

const PrivacyPolicy = () => {
  const container = useRef(null);
  const sectionRefs = useRef([]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Add refs to sections
  useEffect(() => {
    sectionRefs.current = document.querySelectorAll(".privacy-section");
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero section animations
      tl.fromTo(
        ".privacy__heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      );

      tl.fromTo(
        ".privacy__subtitle",
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
                  Privacy Protection
                </span>
              </div>

              <h1 className="privacy__heading mb-6 text-4xl md:text-5xl lg:text-6xl font-bold relative opacity-0">
                <span className="gradient-text-animation">
                  Privacy Policy
                </span>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 md:w-32 rounded-full gradient-background"></div>
              </h1>

              <div className="max-w-3xl mx-auto pt-6">
                <p className="privacy__subtitle mb-4 text-lg md:text-xl text-slate-200/90 opacity-0">
                  Your privacy is important to us. This Privacy Policy explains how we collect, 
                  use, and protect your information when you use the Maxxit platform.
                </p>
                <p className="privacy__subtitle text-lg md:text-xl text-slate-200/90 opacity-0">
                  We are committed to maintaining the confidentiality and security of your personal data.
                </p>
              </div>
            </div>
          </div>

          {/* Main content with enhanced styling */}
          <div className="space-y-14 mt-10">
            {/* Section 1: Information We Collect */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Database className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  1. Information We Collect
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    1.1 Personal Information
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We may collect personal information such as your name, email address, and account 
                    credentials when you register for our services or contact us for support.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    1.2 Usage Data
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We automatically collect information about how you interact with our platform, 
                    including pages visited, features used, and time spent on the platform.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    1.3 Technical Information
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We collect technical data including IP addresses, browser types, device information, 
                    and operating system details to improve our services and ensure security.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Settings className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  2. How We Use Your Information
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="mb-6 text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  We use the collected information for the following purposes:
                </p>
                <ul className="space-y-5 text-slate-200/90">
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      To provide and maintain our services and platform functionality
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      To improve and optimize our platform based on user behavior and feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      To communicate with you about updates, support, and service announcements
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1 transition-all duration-300 group-hover/item:bg-green-500/20">
                      <Check className="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" />
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-slate-200 mt-[10px]">
                      To ensure security and prevent fraud or unauthorized access
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Data Sharing and Disclosure */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#6ff2f2]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Users className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  3. Data Sharing and Disclosure
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    3.1 Third-Party Services
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We may share data with trusted third-party service providers who assist us in 
                    operating our platform, conducting business, or serving our users, provided they 
                    agree to keep this information confidential.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    3.2 Legal Requirements
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We may disclose your information when required by law, regulation, legal process, 
                    or governmental request, or to protect our rights, property, or safety.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    3.3 No Sale of Personal Data
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We do not sell, trade, or otherwise transfer your personal information to third 
                    parties for their marketing purposes without your explicit consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Data Security */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#6ff2f2]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Lock className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  4. Data Security
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    4.1 Security Measures
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    4.2 Data Encryption
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    Sensitive data is encrypted both in transit and at rest using industry-standard 
                    encryption protocols to ensure maximum protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Cookies and Tracking */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Cookie className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  5. Cookies and Tracking Technologies
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    5.1 Use of Cookies
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We use cookies and similar tracking technologies to enhance your experience, 
                    analyze usage patterns, and improve our services. You can control cookie settings 
                    through your browser preferences.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    5.2 Analytics
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    We may use third-party analytics services to understand how our platform is used 
                    and to improve user experience. These services may collect and process data according 
                    to their own privacy policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Your Rights and Choices */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4185F3]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <UserCheck className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4185F3]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#4185F3] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  6. Your Rights and Choices
                </h2>
              </div>

              <div className="space-y-6">
                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    6.1 Access and Control
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    You have the right to access, update, or delete your personal information. 
                    You can also request a copy of the data we hold about you or ask us to correct 
                    any inaccuracies.
                  </p>
                </div>

                <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                  <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300 text-xl">
                    6.2 Communication Preferences
                  </h3>
                  <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                    You can opt out of receiving promotional communications from us at any time by 
                    following the unsubscribe links in our emails or contacting us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7: Data Retention */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <Server className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  7. Data Retention
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  We retain your personal information only for as long as necessary to fulfill the 
                  purposes outlined in this privacy policy, comply with legal obligations, resolve 
                  disputes, and enforce our agreements. When data is no longer needed, we securely 
                  delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Section 8: Changes to Privacy Policy */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6ff2f2]/5 via-transparent to-[#63A7FA]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <FileText className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#6ff2f2]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#6ff2f2] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  8. Changes to This Privacy Policy
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  We may update this Privacy Policy from time to time to reflect changes in our 
                  practices or for legal, operational, or regulatory reasons. We will notify you 
                  of any material changes by posting the new policy on our platform and updating 
                  the "last updated" date.
                </p>
              </div>
            </div>

            {/* Section 9: Contact Us */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/5 via-transparent to-[#4185F3]/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full">
                  <MessageCircle className="h-8 w-8 text-[#76CAE4] transition-all duration-500 group-hover:scale-110 group-hover:text-[#63A7FA]" />
                </div>
                <h2 className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent text-3xl font-bold transition-all duration-500">
                  9. Contact Us
                </h2>
              </div>

              <div className="section-content-item transform rounded-xl bg-blue-500/5 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md border border-blue-500/10 hover:border-blue-500/30">
                <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us through our official support channels. We are committed to 
                  addressing your concerns and protecting your privacy rights.
                </p>
              </div>
            </div>

            {/* Final acknowledgment section */}
            <div className="privacy-section group relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/5 to-blue-500/10 p-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/10 via-[#6ff2f2]/5 to-[#4185F3]/10 rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"></div>

              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div className="flex transform flex-col items-center gap-6 transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-400/30">
                    <Eye className="h-8 w-8 text-[#76CAE4]" />
                  </div>
                  <p className="text-xl md:text-2xl text-slate-200/90 max-w-2xl mx-auto">
                    Your privacy matters to us. By using our platform, you acknowledge that you 
                    have read and understood this Privacy Policy.
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

export default PrivacyPolicy; 