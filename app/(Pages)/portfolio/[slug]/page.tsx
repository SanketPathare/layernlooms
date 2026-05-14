import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { projects, getProjectBySlug } from "../../../data/portfolio";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching ServiceHero Style */}
      <section className="relative  pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,white)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-950 mb-6">
                Featured Case Study
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-xl text-gray-900 font-medium">
                {project.category} — {project.year}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {project.description}
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-950 transition-colors"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed mb-12">
                  {project.longDescription}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Result</h2>
                <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-xl text-gray-900 font-medium italic">
                    "{project.result}"
                  </p>
                </div>
              </div>

              {/* Testimonial if exists */}
              {project.testimonial && (
                <div className="mt-16 pt-16 border-t border-gray-100">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Client Feedback</h3>
                  <p className="text-2xl font-light text-gray-900 italic mb-8">
                    "{project.testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-bold text-gray-900">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-500">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Meta Info */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Client</p>
                      <p className="text-gray-900 font-medium">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Year</p>
                      <p className="text-gray-900 font-medium">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Tech Stack</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-medium text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gray-900 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Want results like this?</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Let's discuss how we can apply these strategies to your business.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Projects CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore More Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we've helped other clients achieve their digital goals.
          </p>
          <div className="mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-950 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
