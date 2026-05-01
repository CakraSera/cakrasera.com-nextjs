// app/actiongap/ringkasan/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ringkasanData, getRingkasanBySlug } from "@/data/ringkasan";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Zap } from "lucide-react";
import type { Metadata } from "next";

// Ini memberitahu Next.js untuk pre-render semua slug saat build time
// — sama persis dengan pattern yang kamu pakai di /projects/[slug]
export async function generateStaticParams() {
  return ringkasanData.map((buku) => ({
    slug: buku.slug,
  }));
}

// Metadata dinamis — setiap buku punya title dan description sendiri
// Ini SANGAT penting untuk SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const buku = getRingkasanBySlug(slug);

  if (!buku) return {};

  return {
    title: `Ringkasan ${buku.judul} - ${buku.penulis} | Rencana Aksi 30 Hari`,
    description: `${buku.deskripsiSingkat} Termasuk rencana aksi 30 hari dengan langkah harian 5-15 menit yang bisa langsung diterapkan.`,
    // Ini penting: memberitahu Google bahwa halaman ini berbahasa Indonesia
    openGraph: {
      title: `Ringkasan ${buku.judul} + Rencana Aksi 30 Hari`,
      description: buku.deskripsiSingkat,
      locale: "id_ID",
    },
  };
}

export default async function RingkasanDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const buku = getRingkasanBySlug(slug);

  // Kalau slug tidak ditemukan, tampilkan 404
  if (!buku) notFound();

  return (
    <div className="container py-12 md:py-20 max-w-4xl">
      {/* Breadcrumb navigation */}
      <div className="mb-8">
        <Link
          href="/actiongap/ringkasan"
          className="text-muted-foreground hover:text-primary text-sm flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          Semua Ringkasan Buku
        </Link>
      </div>

      {/* Hero section */}
      <div className="space-y-4 mb-12">
        <Badge variant="outline">Ringkasan Buku</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Ringkasan {buku.judul}
        </h1>
        <p className="text-muted-foreground text-lg">
          oleh <span className="font-medium">{buku.penulis}</span>
        </p>
        <p className="text-xl leading-relaxed">{buku.deskripsiSingkat}</p>
      </div>

      {/* 5 Poin Utama */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5 Poin Utama {buku.judul}</h2>
        <div className="space-y-4">
          {buku.poinUtama.map((poin, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {index + 1}
              </div>
              <p className="text-muted-foreground leading-relaxed">{poin}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Wawasan Mendalam */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Wawasan Mendalam dari {buku.judul}
        </h2>
        <div className="space-y-6">
          {buku.wawasan.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border bg-muted/30 p-6 space-y-2"
            >
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                {item.judul}
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {item.penjelasan}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview 30-Day Plan — INI adalah hook utama untuk konversi */}
      <section className="mb-12">
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-8 space-y-6">
          <div className="space-y-2">
            <Badge className="mb-2">Preview Eksklusif</Badge>
            <h2 className="text-2xl font-bold">
              3 Hari Pertama: Protokol {buku.judul} 30 Hari
            </h2>
            <p className="text-muted-foreground">
              Ini adalah cuplikan dari protokol lengkap di Actiongap. Setiap
              aksi dirancang untuk diselesaikan dalam 5-15 menit — ada juga
              versi 2-menit kalau hari itu kamu sibuk.
            </p>
          </div>

          <div className="space-y-4">
            {buku.preview30Hari.map((day) => (
              <div
                key={day.day}
                className="bg-background rounded-lg border p-5 space-y-3"
              >
                {/* Header hari */}
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {day.day}
                  </div>
                  <span className="font-semibold">Hari ke-{day.day}</span>
                </div>

                {/* Aksi utama */}
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">
                    Aksi Utama (5-15 menit):
                  </p>
                  <p className="leading-relaxed">{day.action}</p>
                </div>

                {/* Micro-action */}
                <div className="bg-muted/50 rounded-md p-3">
                  <p className="text-sm text-muted-foreground mb-1 font-medium flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    Micro-action (2 menit, kalau hari ini sibuk):
                  </p>
                  <p className="text-sm leading-relaxed">{day.micro}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA — titik konversi utama */}
          <div className="text-center pt-4 space-y-3">
            <p className="text-muted-foreground text-sm">
              Akses 30 hari penuh + reflection prompts mingguan + sinkronisasi
              antar device
            </p>
            <Button size="lg" asChild className="w-full sm:w-auto">
              {/* Ganti href ke URL Actiongap-mu */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                {buku.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Gratis untuk memulai. Tidak perlu kartu kredit.
            </p>
          </div>
        </div>
      </section>

      {/* Link ke ringkasan lain */}
      <div className="border-t pt-8">
        <h3 className="font-semibold mb-4">
          Buku lain yang mungkin kamu suka:
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {ringkasanData
            .filter((b) => b.slug !== buku.slug)
            .slice(0, 4)
            .map((b) => (
              <Link
                key={b.slug}
                href={`/terapin/ringkasan/${b.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg border hover:border-primary/30"
              >
                <ArrowRight className="h-4 w-4 shrink-0" />
                <span>
                  {b.judul} — {b.penulis}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
