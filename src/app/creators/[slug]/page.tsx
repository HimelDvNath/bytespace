import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CatalogExplorer } from "@/components/catalog/CatalogExplorer";
import { CatalogView } from "@/components/catalog/CatalogView";
import { Container } from "@/components/common/Container";
import { CreatorStats } from "@/components/creator/CreatorStats";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { ALL } from "@/lib/catalog";
import { creators, getCreator } from "@/lib/creators";
import { courseCategoryRows, courses, FEATURED_CATEGORY } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return {};
  return { title: `${creator.name} · Creator`, description: creator.bio[0] };
}

const categoryOptions = courseCategoryRows.flat().map((category) => ({
  value: category,
  label: category === FEATURED_CATEGORY ? "All categories" : category,
}));

export default async function CreatorPage({ params }: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const creatorCourses = courses.filter((course) => course.creatorSlug === creator.slug);

  return (
    <>
      <Navbar />
      <main>
        <section aria-labelledby="creator-heading" className="bg-grid text-neutral-50">
          <Container className="flex flex-col gap-10 pt-28 pb-14 lg:pt-43 lg:pb-20.5">
            <div className="flex flex-col gap-8 lg:gap-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Image
                  src={creator.avatar}
                  alt={`Portrait of ${creator.name}`}
                  width={96}
                  height={96}
                  sizes="96px"
                  preload
                  className="size-24 rounded-3xl object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1
                      id="creator-heading"
                      className="font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-s"
                    >
                      {creator.name}
                    </h1>
                    <span className="rounded-3xl bg-secondary-400 px-6 py-2 text-label-m font-medium text-neutral-950">
                      Creator
                    </span>
                  </div>
                  <p className="text-body-l">{creator.headline}</p>
                </div>
              </div>
              <div className="text-body-m sm:text-body-l">
                {creator.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <CreatorStats
              creatorName={creator.name}
              products={creator.products}
              followers={creator.followers}
            />
          </Container>
        </section>

        <section aria-label={`Courses by ${creator.name}`} className="pt-12 pb-16 lg:pt-15.5 lg:pb-15.25">
          <Container>
            <Suspense
              fallback={
                <CatalogView
                  state={{
                    query: "",
                    category: FEATURED_CATEGORY,
                    level: ALL,
                    rating: ALL,
                    sort: "relevant",
                    page: 1,
                  }}
                  courses={creatorCourses}
                  totalResults={creatorCourses.length}
                  totalPages={1}
                  featuredCategory={FEATURED_CATEGORY}
                  categoryOptions={categoryOptions}
                  showPagination={false}
                />
              }
            >
              <CatalogExplorer
                courses={creatorCourses}
                featuredCategory={FEATURED_CATEGORY}
                categoryOptions={categoryOptions}
                showPagination={false}
              />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
