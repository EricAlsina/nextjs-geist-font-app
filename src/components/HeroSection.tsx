"use client"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-800">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Wave Decorations */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-30 transform translate-y-2"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 79.875C1248 88.75 1344 71 1392 62.125L1440 53.25V120H0V0Z"
              fill="white"
            />
          </svg>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto absolute bottom-0 left-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 79.875C1248 88.75 1344 71 1392 62.125L1440 53.25V120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl"></div>
          <img
            src="/tide-keepers-logo.png"
            alt="Tide Keeper's Logo"
            className="w-32 h-32 object-contain relative z-10"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Tide Keeper's
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          Dedicated to ocean cleanup and protecting Florida's coastal areas and wildlife.
        </p>
        <p className="text-lg text-white/80 max-w-2xl mb-12 italic">
          Founded and run by a high school athlete passionate about making a difference.
        </p>
        <a
          href="/volunteer"
          className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Join a Cleanup
        </a>
      </div>
    </section>
  )
}
