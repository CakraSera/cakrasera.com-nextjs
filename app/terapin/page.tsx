// app/actiongap/ringkasan/page.tsx
import Link from "next/link";
import { ringkasanData } from "@/data/ringkasan";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ringkasan Buku Self-Improvement | Terapin",
  description:
    "Ringkasan buku non-fiksi terbaik beserta rencana aksi 30 hari. Bukan sekadar rangkuman — tapi panduan untuk benar-benar menerapkan apa yang kamu baca.",
};

export default function RingkasanIndex() {
  return (
    <div className="container py-16 md:py-24">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center mb-16">
        <Badge variant="outline" className="px-3 py-1">
          Terapin — Dari Baca ke Aksi
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Ringkasan Buku + Rencana Aksi 30 Hari
        </h1>
        <p className="text-muted-foreground text-lg">
          Bukan sekadar ringkasan. Setiap buku dikonversi jadi rencana aksi
          harian selama 30 hari — supaya kamu benar-benar menerapkan apa yang
          kamu baca, bukan cuma tahu teorinya.
        </p>
      </div>

      {/* Grid buku */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ringkasanData.map((buku) => (
          <Link
            key={buku.slug}
            href={`/terapin/ringkasan/${buku.slug}`}
            className="group rounded-xl border bg-background p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/50"
          >
            <div className="space-y-3">
              {/* Icon buku */}
              <div className="bg-primary/10 w-fit rounded-full p-3">
                <BookOpen className="text-primary h-5 w-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {buku.judul}
                </h2>
                <p className="text-muted-foreground text-sm">
                  oleh {buku.penulis}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {buku.deskripsiSingkat}
              </p>

              <div className="flex items-center text-primary text-sm font-medium">
                Lihat Ringkasan & 30-Day Plan
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA ke Actiongap */}
      <div className="mt-16 text-center rounded-xl border bg-muted/50 p-8 space-y-4">
        <h2 className="text-2xl font-bold">
          Siap mengubah buku jadi kebiasaan nyata?
        </h2>
        <p className="text-muted-foreground">
          Terapin mengubah buku non-fiksi jadi rencana aksi 30 hari dengan
          langkah harian 5-15 menit. Gratis untuk memulai Terapin.
        </p>
        <Button size="lg" asChild>
          {/* Ganti href ini ke URL Actiongap-mu nanti */}
          <a
            href="terapin.cakrasera.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coba Terapin Gratis
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
