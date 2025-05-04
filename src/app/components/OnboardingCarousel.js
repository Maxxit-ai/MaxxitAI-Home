"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function OnboardingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      headline: "Track real crypto signals. Earn your edge.",
      subheading: "Let's guide you through how Maxxit works in under a minute.",
      cta: "Let's Begin",
      icon: "🚀"
    },
    {
      id: 2,
      headline: "Start with your X account",
      subheading: "We use your Twitter (X) identity to personalize your experience and link with verified signal providers.",
      cta: "Login with X",
      icon: "🔑"
    },
    {
      id: 3,
      headline: "Get signals straight to Telegram",
      subheading: "Clean, real-time signals delivered where you're already active.",
      cta: "Link Telegram",
      icon: "📲"
    },
    {
      id: 4,
      headline: "Test Maxxit, on us",
      subheading: "Get free credits to explore and subscribe. Top up when you're ready.",
      cta: "Claim Free Credits",
      altCta: "View Plans",
      icon: "🎁"
    },
    {
      id: 5,
      headline: "Follow performance, not noise",
      subheading: "Discover top crypto X accounts ranked by verified, backtested results.",
      cta: "Explore Creators",
      icon: "📊"
    },
    {
      id: 6,
      headline: "Subscribe and receive market-tested calls",
      subheading: "Your credits are only used when real value is delivered. No fluff.",
      cta: "Start Receiving Signals",
      icon: "📈"
    },
    {
      id: 7,
      headline: "Proof you can trust",
      subheading: "Your profile shows how subscribed accounts performed over time, backed by on-chain credibility.",
      cta: "View My Dashboard",
      icon: "✅"
    },
    {
      id: 8,
      headline: "Influencers get rewarded for real performance",
      subheading: "If you're a signal provider, you can earn up to 100% of the revenue from your subscribers — based on how well your signals perform.",
      cta: "Become a Creator",
      altCta: "Apply Now",
      icon: "💰"
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-[#020617]">
      {/* <div className="container mx-auto px-4 mb-8 flex flex-col gap-[0.5rem] items-center justify-center">
        <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">How Maxxit Works</h2>
        <p className="text-white/60 text-lg mt-[4px] my-6 text-[9px] xs:text-xs sm:text-sm bw:text-base w-[70%] xl:w-full mx-auto font-light tracking-wide text-center">Your guide to verified crypto signals in under a minute</p>
      </div> */}

      {/* Swiper Carousel */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-pagination-bullet"></span>`;
            },
          }}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper py-4 mt-[2rem]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center px-4 sm:px-8 py-12 sm:py-16 bg-gradient-to-br from-[#0a101f] to-[#020617] rounded-xl border border-[#1a2035] shadow-lg overflow-hidden">
                <div className="text-center mb-10">
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#1a2035] to-[#0a101f] rounded-full border border-[#1a2035]/50 shadow-lg">
                    <span className="text-4xl">{slide.icon}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{slide.headline}</h3>
                  <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">{slide.subheading}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg flex items-center justify-center transition-all">
                    {slide.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  
                  {slide.altCta && (
                    <button className="px-8 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all">
                      {slide.altCta}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom CSS for Swiper styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .custom-pagination-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 100%;
          background: #1a2035;
          opacity: 0.6;
          margin: 0 5px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          width: 24px;
          border-radius: 4px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6;
          background: rgba(10, 16, 31, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          --swiper-navigation-size: 20px;
        }
        
        .swiper-button-disabled {
          opacity: 0.35;
        }
      `}</style>
    </div>
  )
} 