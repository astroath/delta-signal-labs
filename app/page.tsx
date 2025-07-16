import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Detla Signal Labs</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#bots" className="hover:text-blue-400">
            Bots
          </a>
          <a href="#how-it-works" className="hover:text-blue-400">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-blue-400">
            Pricing
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
        <button className="md:hidden">
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
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-28 px-6 hero-background">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Placeholder for bot trading animation */}
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold">
            Next-Gen AI Bots for Serious Traders
          </h2>
          <p className="text-xl mt-4">
            Built on RSI, Volume, & Machine Learning.
          </p>
          <p className="text-2xl font-semibold mt-8">No emotions. Just data.</p>
          <div className="mt-10">
            <a
              href="#bots"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Get Your First Bot Now
            </a>
            <a
              href="#demo"
              className="ml-4 border border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Try Demo
            </a>
          </div>
        </div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Pricing Plans
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Free Trial</h4>
              <p className="text-4xl font-bold mb-4">$0</p>
              <p>7-day trial of any bot</p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Trial
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center border-2 border-blue-600">
              <h4 className="text-2xl font-bold mb-4">Monthly</h4>
              <p className="text-4xl font-bold mb-4">$99/mo</p>
              <p>Access to all bots</p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Lifetime</h4>
              <p className="text-4xl font-bold mb-4">$999</p>
              <p>One-time payment, lifetime access</p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
            {/* Custom Pricing */}
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Custom Pricing</h4>
              <p className="text-xl font-bold mb-4">Tailored Solutions</p>
              <p>Contact us for enterprise-level features and support.</p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Sales
              </button>
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
