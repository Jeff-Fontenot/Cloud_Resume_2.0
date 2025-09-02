// src/app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostsWithPreviews } from "@/lib/notion";




export const revalidate = 300;

function BlogHero() {
  return (
    <section className="relative min-h-[42vh] md:min-h-[50vh] overflow-hidden bg-slate-950 pt-28">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Odyssey <span className="gradient-text">Blog</span>
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Insights from an endless journey of growth and discovery.
        </p>
      </div>
    </section>
  );
}

export default async function BlogIndexPage() {
  const posts = await getPostsWithPreviews();

  return (
    <>
      <Header />
      <BlogHero />

      <main className="bg-slate-950">
        <section className="mx-auto max-w-6xl px-4 pb-16 -mt-10">
          {posts.length === 0 ? (
            <div className="glass-container rounded-3xl p-6 text-slate-300">
              No posts yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group relative overflow-hidden rounded-2xl glass-container glass-container-before
           transition-transform duration-300 hover:scale-[1.06] min-h-[400px] flex flex-col"
                >
                  {/* ring / glow on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition
                               group-hover:ring-yellow-400"
                  />
                  {p.cover && (
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        width={1200}
                        height={630}
                        unoptimized={true}
                        className="h-fit w-fit object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  <div className="p-3 relative">
                   {/* {p.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide">
                        {p.tags.map((t: string) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-500 px-2.5 py-0.5 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )} */}

                    <h2 className="mt-5 text-lg font-semibold text-yellow-400 group-hover:underline">
                      {p.title}
                    </h2>

                    {p.preview && (
                      <p className="mt-2.5 line-clamp-4 text-sm text-slate-300">
                        {p.preview}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
