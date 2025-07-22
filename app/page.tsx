"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const text = "Next-Gen AI Bots for Serious Traders".split("");
  const text2 = "Built on RSI, Volume, & Machine Learning.".split("");
  const text3 = "No emotions. Just data.".split("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative text-center min-h-screen flex flex-col items-center justify-center px-6 hero-background">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 container mx-auto px-6 py-4 flex justify-between items-center z-20">
          <h1 className="text-2xl font-bold">Delta Signal Labs</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#bots" className="hover:text-blue-400">
              Bots
            </a>
            <a href="#how-it-works" className="hover:text-blue-400">
              How It Works
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact Us
            </a>
            <a href="#testimonials" className="hover:text-blue-400">
              Testimonials
            </a>
            <a href="#support" className="hover:text-blue-400">
              Support
            </a>
            <a href="#blog" className="hover:text-blue-400">
              Blog
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden absolute top-full left-0 right-0 bg-gray-800 py-4 flex flex-col items-center space-y-4 z-30">
              <a
                href="#bots"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bots
              </a>
              <a
                href="#how-it-works"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#support"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </a>
              <a
                href="#blog"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          )}
        </header>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Placeholder for bot trading animation */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-full"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text.map((word, index) => (
              <motion.span key={index} variants={child}>
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg mt-4 max-w-full"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text2.map((word, index) => (
              <motion.span key={index} variants={child}>
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-semibold mt-8 max-w-full"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text3.map((word, index) => (
              <motion.span key={index} variants={child}>
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </motion.p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4">
            <a
              href="#bots"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Get Your First Bot Now
            </a>
            <a
              href="#demo"
              className="border border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Try Demo
            </a>
          </div>
        </div>
        <a
          href="#bots"
          className="absolute bottom-10 text-lg cursor-pointer z-40"
        >
          <motion.p
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Learn More &darr;
          </motion.p>
        </a>
      </section>

      {/* Bots Marketplace Section */}
      <section id="bots" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Our Bots</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* RSI Scalper Bot */}
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h4 className="text-2xl font-bold mb-4">RSI Scalper Bot</h4>
              <p className="mb-4">
                High-frequency trading using RSI indicators.
              </p>
              <p className="font-semibold">Win Rate: 85%</p>
              <p>Customizable parameters</p>
            </div>
            {/* Volume Breakout Bot */}
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Volume Breakout Bot</h4>
              <p className="mb-4">Trades on significant volume changes.</p>
              <p className="font-semibold">Win Rate: 78%</p>
              <p>Adjustable sensitivity</p>
            </div>
            {/* ML Swing Bot */}
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h4 className="text-2xl font-bold mb-4">ML Swing Bot</h4>
              <p className="mb-4">Uses machine learning for swing trades.</p>
              <p className="font-semibold">Win Rate: 92%</p>
              <p>Self-optimizing algorithm</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <p className="mt-4">Choose Your Bot</p>
            </div>
            <div className="text-blue-600 text-4xl">&rarr;</div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <p className="mt-4">Customize Settings</p>
            </div>
            <div className="text-blue-600 text-4xl">&rarr;</div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <p className="mt-4">Deploy on MT5</p>
            </div>
          </div>
          <p className="mt-12 max-w-3xl mx-auto">
            Our bots use a combination of RSI, trading volume, and proprietary
            machine learning predictions to execute trades. Take Profit (TP) and
            Stop Loss (SL) levels are automatically calculated for optimal risk
            management.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Contact Us
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-4">Get in Touch</h4>
              <p className="mb-6">Have questions about our bots or need custom solutions? Reach out to our team and we'll get back to you as soon as possible.</p>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const nameInput = document.getElementById('name') as HTMLInputElement;
                const emailInput = document.getElementById('email') as HTMLInputElement;
                const messageInput = document.getElementById('message') as HTMLTextAreaElement;
                
                const subject = `Contact from ${nameInput.value}`;
                const body = `Message from: ${nameInput.value} (${emailInput.value})\n\n${messageInput.value}`;
                
                window.location.href = `mailto:support@deltasignallabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}>
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" required className="w-full p-2 rounded bg-gray-700 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" required className="w-full p-2 rounded bg-gray-700 text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" rows={4} required className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h3>
          <div className="relative overflow-x-hidden py-8">
            <div className="flex flex-nowrap scrolling-testimonials">
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Turned my signals into profit on autopilot. The ML bot is a
                  game-changer.
                </p>
                <p className="mt-4 font-bold">- Alex T.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Finally, a bot that understands market volume. Consistent
                  profits every week.
                </p>
                <p className="mt-4 font-bold">- Sarah W.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  The RSI Scalper Bot has significantly boosted my daily gains.
                  Highly recommended!
                </p>
                <p className="mt-4 font-bold">- John D.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  I have tried many trading bots, but Delta Signal Labs ML Swing
                  Bot is by far the most accurate.
                </p>
                <p className="mt-4 font-bold">- Emily R.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Their support is fantastic, and the bots are incredibly easy
                  to set up. A must-have for traders.
                </p>
                <p className="mt-4 font-bold">- Michael B.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Consistent performance and great features. The Volume Breakout
                  Bot is a beast!
                </p>
                <p className="mt-4 font-bold">- Jessica L.</p>
              </div>
              {/* Duplicate testimonials for seamless scrolling */}
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Turned my signals into profit on autopilot. The ML bot is a
                  game-changer.
                </p>
                <p className="mt-4 font-bold">- Alex T.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Finally, a bot that understands market volume. Consistent
                  profits every week.
                </p>
                <p className="mt-4 font-bold">- Sarah W.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  The RSI Scalper Bot has significantly boosted my daily gains.
                  Highly recommended!
                </p>
                <p className="mt-4 font-bold">- John D.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  I have tried many trading bots, but Delta Signal Labs ML Swing
                  Bot is by far the most accurate.
                </p>
                <p className="mt-4 font-bold">- Emily R.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Their support is fantastic, and the bots are incredibly easy
                  to set up. A must-have for traders.
                </p>
                <p className="mt-4 font-bold">- Michael B.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex-none w-80 mx-4">
                <p>
                  Consistent performance and great features. The Volume Breakout
                  Bot is a beast!
                </p>
                <p className="mt-4 font-bold">- Jessica L.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Smarter Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">
            Scale Smarter: Custom Bots for MT5 Brokerages & Trading Desks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-2">
                White-label bot solutions
              </h4>
              <p className="text-gray-400">
                Ready-to-deploy bots under your brand.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-2">
                Custom bot dev with your logic or ours
              </h4>
              <p className="text-gray-400">
                Tailored development to meet your specific trading strategies.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-2">
                API integration with MT5
              </h4>
              <p className="text-gray-400">
                Seamless connection to MetaTrader 5 for robust operations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-2">
                License control & delivery system
              </h4>
              <p className="text-gray-400">
                Manage and distribute bot licenses efficiently.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-2">
                Dedicated support & team training
              </h4>
              <p className="text-gray-400">
                Comprehensive assistance and training for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Support & Setup</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Our detailed guide will walk you through installing your bot on
            MetaTrader 5. If you need help, our support team is available via
            live chat or our ticket system.
          </p>
          <a href="#faq" className="text-blue-400 hover:underline">
            Read the FAQ
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6">
        <p>&copy; 2025 Delta Signal Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
