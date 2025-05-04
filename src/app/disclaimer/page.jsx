"use client";

import React, { useRef } from "react";
import StarGrid from "../components/Hero/StarGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
} from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../../../public/img/maxxit_black_bg.png";

const TermsAndConditions = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".terms__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      tl.fromTo(
        ".terms__subtitle",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6"
      );

      tl.fromTo(
        ".terms__content",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3"
      );
    },
    { scope: container }
  );

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen px-4 py-14 text-center text-[#76CAE4] first:pt-10 md:px-6 md:py-20 lg:py-24"
        ref={container}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-12">
          <StarGrid />
          <div className="relative">
            <div className="relative">
              <div className="mb-16 flex flex-col items-center text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-[#76CAE4]" />
                  <span className="text-sm font-medium text-[#76CAE4]">
                    Legal Documentation
                  </span>
                </div>
                <h1 className="terms__heading mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-[#76CAE4] opacity-0 md:text-6xl">
                  Maxxit Terms of Use
                </h1>
                <p className="terms__subtitle max-w-3xl text-xl text-slate-200/90 opacity-0">
                  Welcome to the Maxxit Platform, developed and operated by the
                  Maxxit team (“we,” “us,” or “our”). By accessing or using the
                  Platform or engaging with our tools, analyses, or services
                  (collectively, the “Services”), you agree to these Terms of
                  Use (the “Terms”). If you do not agree to these Terms, you are
                  not authorized to use the Services.
                </p>
                <p className="terms__subtitle mt-4 max-w-3xl text-xl text-slate-200/90 opacity-0">
                  These Terms apply to all users of the Platform, including
                  those interacting with features such as the Twitter analysis
                  tools, the Impact Factor metric, and the Heartbeat parameter.
                </p>
              </div>

              <div className="max-h-[520px]">
                <Image
                  src={img} // Replace with the correct image path
                  alt="Description of the image"
                  className="w-full"
                />
              </div>

              <div className="terms__content mt-12 space-y-8 opacity-0">
                {/* Section 1: Eligibility and Access */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <Users className="group- h-8 w-8 text-[#76CAE4] transition-transform duration-300 group-hover:scale-110" />
                    <h2 className="group- bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4] transition-colors duration-300">
                      1. Eligibility and Access
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300">
                        1.1 Purpose of the Platform
                      </h3>
                      <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                        The Platform is designed to analyze Twitter accounts,
                        assess the impact of their tweets on trading markets,
                        and evaluate their alignment with current trends using
                        proprietary metrics such as Heartbeat and Impact Factor.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300">
                        1.2 Access Requirements
                      </h3>
                      <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                        Access to certain features or premium services may
                        require account registration, compliance with
                        eligibility criteria, or other conditions we establish.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4] transition-colors duration-300">
                        1.3 User Responsibility
                      </h3>
                      <p className="text-slate-200/90 transition-colors duration-300 hover:text-slate-200">
                        You are responsible for ensuring that your use of the
                        Platform complies with all applicable laws and
                        regulations in your jurisdiction. Unauthorized use of
                        the Platform is prohibited.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Nature of the Content */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <FileText className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      2. Nature of the Content
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        2.1 Informational Use Only
                      </h3>
                      <p className="text-slate-200/90">
                        All analyses, metrics, and insights provided by the
                        Platform are for informational purposes only. They are
                        not investment advice or recommendations to trade, buy,
                        sell, or hold any financial instrument. Always conduct
                        your own research and consult qualified professionals
                        before making financial or investment decisions.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        2.2 Data and Outputs
                      </h3>
                      <p className="text-slate-200/90">
                        The results and metrics generated by the Platform,
                        including Heartbeat and Impact Factor, are based on
                        proprietary algorithms and publicly available data.
                        While we strive for accuracy, the insights provided may
                        contain errors, omissions, or misinterpretations. Use
                        the Content at your own discretion.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        2.3 Dynamic and Unpredictable Data
                      </h3>
                      <p className="text-slate-200/90">
                        Our analyses rely on dynamic, real-time data. The
                        performance of metrics or tools may vary, and the
                        insights provided are inherently unpredictable. Past
                        performance is not indicative of future results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Prohibited Conduct */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      3. Prohibited Conduct
                    </h2>
                  </div>

                  <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                    <p className="mb-4 text-slate-200/90">
                      When using the Platform, you agree not to:
                    </p>
                    <ul className="list-inside space-y-3 text-slate-200/90">
                      <li className="flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#76CAE4]" />
                        <span>
                          Use the Platform for any unlawful purpose or to
                          violate any laws or regulations.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#76CAE4]" />
                        <span>
                          Misrepresent, distort, or misuse the analyses,
                          metrics, or insights provided by the Platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#76CAE4]" />
                        <span>
                          Attempt to manipulate the Platform's systems, metrics,
                          or data sources.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#76CAE4]" />
                        <span>
                          Upload or transmit malicious content, such as viruses,
                          intended to disrupt the Platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#76CAE4]" />
                        <span>
                          Share false or misleading information about the
                          Platform's capabilities or results.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Intellectual Property */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <Lock className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      4. Intellectual Property
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        4.1 Ownership
                      </h3>
                      <p className="text-slate-200/90">
                        The intellectual property rights, including algorithms,
                        methodologies, and tools used within the Platform,
                        belong exclusively to us. You may not reproduce,
                        distribute, modify, or create derivative works from our
                        Content without prior written consent.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        4.2 User Contributions
                      </h3>
                      <p className="text-slate-200/90">
                        By submitting feedback, suggestions, or other content to
                        the Platform, you grant us a non-exclusive, worldwide,
                        royalty-free license to use, reproduce, and incorporate
                        such input into our Services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 5: Privacy and Data Usage */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <Database className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      5. Privacy and Data Usage
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        5.1 Data Collection
                      </h3>
                      <p className="text-slate-200/90">
                        The Platform may collect data related to your usage
                        patterns, queries, and other inputs for analytics,
                        performance improvement, and error tracking.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        5.2 Privacy Protection
                      </h3>
                      <p className="text-slate-200/90">
                        We prioritize your privacy. Refer to our Privacy Policy
                        for detailed information on how your data is collected,
                        stored, and used.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 6: Disclaimer of Warranties */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <AlertOctagon className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      6. Disclaimer of Warranties
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        6.1 No Guarantees
                      </h3>
                      <p className="text-slate-200/90">
                        The Platform and its features, including analyses,
                        metrics, and insights, are provided on an "as is" and
                        "as available" basis without warranties of any kind. We
                        disclaim any warranties, express or implied, including
                        but not limited to fitness for a particular purpose,
                        accuracy, or reliability.
                      </p>
                    </div>

                    <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                      <h3 className="mb-3 font-semibold text-[#76CAE4]">
                        6.2 Risk Acknowledgment
                      </h3>
                      <p className="text-slate-200/90">
                        You acknowledge that any reliance on the Platform's
                        insights or metrics is at your own risk. We do not
                        guarantee specific outcomes or results based on the use
                        of the Platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7: Limitation of Liability */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <Scale className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      7. Limitation of Liability
                    </h2>
                  </div>

                  <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                    <p className="text-slate-200/90">
                      To the fullest extent permitted by law, we are not liable
                      for any direct, indirect, incidental, consequential, or
                      punitive damages resulting from your use of the Platform,
                      including but not limited to losses in trading or
                      investments.
                    </p>
                  </div>
                </div>

                {/* Section 8: Modifications to the Terms */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <Edit className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      8. Modifications to the Terms
                    </h2>
                  </div>

                  <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                    <p className="text-slate-200/90">
                      We may modify these Terms at any time. Updates will be
                      effective upon posting on our website or Platform.
                      Continued use of the Services after changes constitutes
                      your acceptance of the revised Terms.
                    </p>
                  </div>
                </div>

                {/* Section 9: Governing Law */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <Globe className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      9. Governing Law
                    </h2>
                  </div>

                  <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                    <p className="text-slate-200/90">
                      These Terms are governed by and construed in accordance
                      with the laws of the jurisdiction in which we operate.
                      Disputes shall be resolved exclusively by the courts in
                      that jurisdiction.
                    </p>
                  </div>
                </div>

                {/* Section 10: Contact Us */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="mb-6 flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-[#76CAE4]" />
                    <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-bold text-[#76CAE4]">
                      10. Contact Us
                    </h2>
                  </div>

                  <div className="transform rounded-lg bg-blue-500/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/10 hover:shadow-md">
                    <p className="text-slate-200/90">
                      For questions or support, please reach out via our
                      official channels.
                    </p>
                  </div>
                </div>

                {/* Footer Accept Terms */}
                <div className="group relative rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-md">
                  <div className="flex items-center justify-center text-center">
                    <div className="flex transform flex-col items-center gap-4 rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                      <BookOpen className="h-8 w-8 text-[#76CAE4]" />
                      <p className="text-slate-200/90">
                        By using the Maxxit Platform, you confirm that you have
                        read, understood, and agree to these Terms of Use.
                      </p>
                    </div>
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
