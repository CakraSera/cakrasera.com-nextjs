import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for opportunities, collaborations, or just to say hello.",
};

export default function Contact() {
  return (
    <div className="">
      {/* Contact Hero */}
      <section className="container space-y-8 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            I'm currently looking for new opportunities to grow as a developer.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container pb-16 md:pb-24">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 space-y-8 md:order-1">
            <div className="space-y-6">
              <h2 className="text-center text-2xl font-bold md:text-left">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-center md:text-left">
                Feel free to reach out through any of the following channels.
                I'm always open to discussing new projects, opportunities, or
                just chatting about web development.
              </p>
            </div>

            <div className="mx-auto max-w-md space-y-4 md:mx-0">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a
                    href="mailto:rakelsera2001@gmail.com"
                    className="hover:text-primary font-medium transition-colors">
                    rakelsera2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium">Tangerang Selatan, Indonesia </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Linkedin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/rakhelcakrakusumadinatasera/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary font-medium transition-colors">
                    linkedin.com/in/rakhelcakrakusumadinatasera/
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Github className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">GitHub</p>
                  <a
                    href="https://github.com/CakraSera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary font-medium transition-colors">
                    github.com/CakraSera
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background order-1 rounded-lg border p-4 shadow-sm sm:p-6 md:order-2">
            <form className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-center text-2xl font-bold md:text-left">
                  Send Me a Message
                </h2>
                <p className="text-muted-foreground text-center md:text-left">
                  Have a question or want to work together? Fill out the form
                  below.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
