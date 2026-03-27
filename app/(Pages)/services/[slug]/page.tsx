import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Check } from "lucide-react";
import { getAllServices, getServiceBySlug, Service } from "@/app/data/services";
import ServiceHero from "../../../Components/services/ServiceHero";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Our Services`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <ServiceHero service={service} />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {service.technologies && service.technologies.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-900">Technologies We Use</h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-6 space-y-6">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              {service.pricing && (
                <div className="sticky top-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                    <h3 className="text-xl font-bold text-white">Pricing Plans</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {service.pricing.starter && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">Starter</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {service.pricing.starter}
                        </span>
                      </div>
                    )}
                    {service.pricing.professional && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">Professional</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {service.pricing.professional}
                        </span>
                      </div>
                    )}
                    {service.pricing.enterprise && (
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-900">Enterprise</span>
                        <span className="text-xl font-bold text-blue-600">
                          {service.pricing.enterprise}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      href="/contact"
                      className="block w-full text-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="mt-8 rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Need a Custom Solution?
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Let's discuss your specific requirements and create a tailored solution.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Other Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how we can help you with other business needs
          </p>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}