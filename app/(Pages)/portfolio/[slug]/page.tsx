import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe, Calendar, User, Layout } from "lucide-react";
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
      {/* Navigation */}
      <div className="pt-10 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-l border-zinc-100 pl-12 hidden lg:grid">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Client</p>
                    <p className="text-zinc-900 font-medium">{project.client}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Year</p>
                    <p className="text-zinc-900 font-medium">{project.year}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Services</p>
                    <p className="text-zinc-900 font-medium">{project.services.join(", ")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Tech Stack</p>
                    <p className="text-zinc-900 font-medium">{project.technologies.join(", ")}</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Image */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-black mb-8">The Challenge</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-12 whitespace-pre-line">
                {project.longDescription}
              </p>

              <h2 className="text-3xl font-bold text-black mb-8">The Result</h2>
              <div className="bg-zinc-50 rounded-3xl p-8 mb-12 border border-zinc-100">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                  <p className="text-2xl font-medium text-black">
                    {project.result}
                  </p>
                </div>
              </div>

              {project.testimonial && (
                <div className="border-t border-zinc-100 pt-12">
                   <p className="text-2xl italic text-zinc-800 mb-6 font-light">
                    "{project.testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-200 rounded-full" />
                    <div>
                        <p className="font-bold text-black">{project.testimonial.author}</p>
                        <p className="text-sm text-zinc-500">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                <div className="bg-black text-white rounded-3xl p-8">
                   <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map(tech => (
                       <span key={tech} className="bg-zinc-800 px-4 py-2 rounded-xl text-sm font-medium">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                <div className="border border-zinc-200 rounded-3xl p-8">
                   <h3 className="text-xl font-bold text-black mb-4">Interested in something similar?</h3>
                   <p className="text-zinc-500 mb-8">
                     Let's talk about how we can help you achieve similar results.
                   </p>
                   <Link 
                    href="/contact"
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-center block hover:bg-primary/90 transition-colors"
                   >
                     Get in Touch
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
