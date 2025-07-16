"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react";
import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function TopTweetsCarousel() {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        // Check if we have cached data in localStorage and it's not expired
        const cachedData = localStorage.getItem('cryptoTweetsCarousel')
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData)
          const now = new Date().getTime()
          const cacheTime = new Date(timestamp).getTime()
          const daysDiff = (now - cacheTime) / (1000 * 60 * 60 * 24)
          
          // If cache is less than 7 days old, use it
          if (daysDiff < 7) {
            setTweets(data)
            setLoading(false)
            return
          } else {
            // Remove expired cache
            localStorage.removeItem('cryptoTweetsCarousel')
          }
        }

        // Fetch fresh data if no cache or cache expired
        const response = await fetch('/api/top-crypto-tweets')
        if (!response.ok) {
          throw new Error('Failed to fetch tweets')
        }
        const data = await response.json()
        
        // Save to localStorage with timestamp
        localStorage.setItem('cryptoTweetsCarousel', JSON.stringify({
          data: data.tweets,
          timestamp: new Date().toISOString()
        }))
        
        setTweets(data.tweets)
      } catch (error) {
        console.error('Error fetching tweets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTweets()
  }, [])

  // Duplicate the tweets to create a seamless loop
  const duplicatedTweets = [...tweets, ...tweets, ...tweets]

  // Format PnL value
  const formatPnL = (pnl) => {
    // Handle null, undefined, or invalid values
    if (pnl === null || pnl === undefined || isNaN(pnl)) {
      return "0.00"
    }
    
    // Handle Infinity values
    if (!isFinite(pnl)) {
      return "∞"
    }
    
    // Handle negative values
    if (pnl < 0) {
      return `-${Math.abs(pnl).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
    
    return pnl.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  // Format date to IST (DD-MM-YYYY)
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString)
      
      // Add 5 hours and 30 minutes to convert to IST
      date.setHours(date.getHours() + 5)
      date.setMinutes(date.getMinutes() + 30)
      
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      
      return `${day}-${month}-${year}`
    } catch (error) {
      console.error('Error formatting date:', error)
      return dateString
    }
  }

  if (loading) {
    return (
      <div className="bg-transparent rounded-xl border border-gray-800/30 shadow-lg p-8 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-14 h-14 mb-4 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
          <Loader2 className="w-14 h-14 text-blue-500/70 animate-spin absolute inset-0" />
        </div>
        <h3 className="text-xl font-medium text-gray-200 mb-1">
          Loading Data
        </h3>
        <p className="text-gray-400 text-sm">
          Fetching Top Tweets...
        </p>
      </div>
    </div>
    );
  }

  if (tweets.length === 0) {
    return (
      <div className="w-full overflow-hidden bg-[#000612] py-8">
        <div className="container mx-auto px-4 mb-6 flex justify-center">
          <div className="text-white/60 text-lg">No tweets available</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden bg-[#000612] py-16 mt-10">
      <div className="container mx-auto px-4 mb-6 flex flex-col gap-[0.5rem] items-center justify-center">
        <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">Top Weekly Signal Providers</h2>
        <p className="text-white/60 text-lg mt-[4px] my-6 text-[9px] xs:text-xs sm:text-sm bw:text-base w-[70%] xl:w-full mx-auto font-light tracking-wide text-center">Latest insights from leading crypto influencers</p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        speed={8000} // Constant speed for the carousel
        autoplay={{
          delay: 1, // Almost no delay between transitions
          disableOnInteraction: false, // Don't stop on user interaction
          reverseDirection: false, // Keep direction consistent
        }}
        className="mySwiper py-4 mt-[2rem]"
        allowTouchMove={false} // Disable touch events to maintain consistent speed
      >
        {duplicatedTweets.map((tweet, index) => (
          <SwiperSlide 
            key={`${tweet.id}-${index}`} 
            className="w-[380px]" 
            style={{ width: '380px' }}
          >
            <div
              className="flex-shrink-0 w-[380px] bg-gradient-to-br from-[#0a101f] to-[#000612] rounded-xl border border-[#1a2035] shadow-lg overflow-hidden"
            >
              <div className="p-5">
                {/* Header with influencer info */}
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border border-[#1a2035]">
                    <Image
                      src={tweet?.influencer?.avatar || "/placeholder.svg"}
                      alt={tweet?.influencer?.name || "Influencer"}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium truncate max-w-[180px]">{tweet?.influencer?.name || "Unknown"}</p>
                    <p className="text-white/60 text-sm truncate max-w-[180px]">@{tweet?.influencer?.handle || "unknown"}</p>
                  </div>
                  <div className="ml-auto">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </div>

                {/* Coin info and trading data */}
                <div className="flex items-center justify-between bg-[#0a101f]/50 rounded-lg p-3">
                  <div>
                    <div className="flex flex-col space-y-1 mt-1 text-left">
                      <div className="text-sm">
                        <span className="text-purple-400 font-medium">Coin: </span>
                        <span className="text-white/80">{tweet?.coin || "N/A"}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-cyan-300/80 font-medium">Token ID: </span>
                        <span className="text-white/70">{tweet?.tokenId || "N/A"}</span>
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        <span className="text-orange-300/80 font-medium">Signal Date: </span>
                        <span className="bg-[#1a2035] px-2 py-1 rounded-full">{formatDate(tweet?.timestamp || new Date())}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-white">
                      <span className="text-green-400">
                        {formatPnL(tweet?.pnl || 0)}%
                      </span>
                    </div>
                    <div
                      className={`flex items-center font-medium justify-end text-sm ${
                        (tweet?.pnl || 0) >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {(tweet?.pnl || 0) >= 0 ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {(tweet?.pnl || 0) >= 0 ? "Profit" : "Loss"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for Swiper styling */}
      <style jsx global>{`
        .swiper-slide {
          width: auto;
        }
        
        /* Ensure animation is smooth */
        .swiper-wrapper {
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  )
}