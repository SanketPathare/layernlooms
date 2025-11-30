import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
          Weaving Digital Experiences with Precision, Depth & AI
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-textColor mb-12 max-w-3xl mx-auto leading-relaxed">
          Web • Mobile • AI • Custom Software — Built exclusively for brands
          that want excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/start-project"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary  shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
          >
            Start Your Project
          </Link>
          <Link
            href="/our-work"
            className="border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg  w-full sm:w-auto text-center"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
