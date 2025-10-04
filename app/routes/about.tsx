import { Button } from "~/components/ui/button";
import { BookOpen, GraduationCap, Briefcase, Code } from "lucide-react";
import { skillIcons } from "~/data/projects";
import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Fullstack Web Developer Portfolio" },
    {
      name: "description",
      content:
        "Learn more about my background, skills, and journey as a junior fullstack web developer.",
    },
  ];
}

export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <section className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center md:text-left">
              About Me
            </h1>
            <p className="text-muted-foreground text-lg text-center md:text-left">
              A passionate technology and software developer
            </p>
            <div className="space-y-4 text-base sm:text-lg">
              <p>
                Hi, I'm Rakhel Cakra Kusumadinata Sera, a passionate technology
                with a strong foundation in fullstack web development. I've
                always been driven by the power of technology to solve
                real-world problems—whether it's building intuitive user
                interfaces or collaborating on innovative projects that make a
                difference.
              </p>
              <p>
                I'm particularly interested in building accessible,
                user-friendly applications that solve real-world problems. When
                I'm not coding, you can find me exploring tech blogs,
                participating in coding challenges, or contributing to developer
                communities.
              </p>
            </div>
            <div className="pt-4 flex justify-center md:justify-start">
              <Button variant="outline" asChild>
                <a href="/resume.pdf" target="_blank">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg border order-1 md:order-2">
            <img
              src="/assets/images/about-me.jpeg"
              alt="Developer portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="bg-muted/50 py-16 md:py-24 ">
        <div className="space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey in the tech industry so far.
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                role: "Junior Frontend Developer",
                company: "TechStart Solutions",
                period: "June 2023 - Present",
                type: "Full-time",
                description: [
                  "Develop and maintain responsive web applications using React and Next.js",
                  "Collaborate with senior developers to implement new features and fix bugs",
                  "Participate in code reviews and team meetings to improve development processes",
                  "Optimize website performance and ensure cross-browser compatibility",
                ],
                technologies: ["React", "Next.js", "Tailwind CSS", "Git"],
              },
              {
                role: "Web Development Intern",
                company: "Digital Innovations Agency",
                period: "May 2022 - August 2022",
                type: "Internship",
                description: [
                  "Assisted in the development of client websites using HTML, CSS, and JavaScript",
                  "Created responsive layouts and implemented design mockups",
                  "Learned version control workflows and collaborated with the development team",
                  "Participated in client meetings and gathered requirements for projects",
                ],
                technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
              },
              {
                role: "Freelance Web Developer",
                company: "Self-employed",
                period: "January 2022 - Present",
                type: "Part-time",
                description: [
                  "Design and develop websites for small businesses and individuals",
                  "Create custom solutions based on client requirements and feedback",
                  "Manage projects from initial concept through deployment and maintenance",
                  "Implement SEO best practices and analytics tracking",
                ],
                technologies: ["React", "WordPress", "CSS", "Figma"],
              },
              {
                role: "IT Support Specialist",
                company: "University Tech Department",
                period: "September 2021 - May 2022",
                type: "Part-time",
                description: [
                  "Provided technical support to students and faculty members",
                  "Troubleshot hardware and software issues across various platforms",
                  "Maintained and updated university computer labs and equipment",
                  "Created documentation and guides for common technical issues",
                ],
                technologies: [
                  "Windows",
                  "macOS",
                  "Networking",
                  "Troubleshooting",
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-xl">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.type}</p>
                  </div>
                  <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className=" py-16 md:py-24">
        <div className="container space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Skills I Use</h2>
            <p className="text-muted-foreground text-lg">
              A snapshot of the tools and technologies I've learned.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "HTML & CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Git",
              "Responsive Design",
              "Tailwind CSS",
              "Next.js",
              "TypeScript",
              "API Integration",
            ].map((skill) => {
              const Icon = skillIcons[skill] || Code;
              return (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-md border bg-background p-3"
                  aria-label={skill}>
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Education
            </h2>
            <p className="text-muted-foreground text-lg text-center">
              My academic background and certifications.
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                degree: "B.S. in Computer Science",
                institution: "State University",
                period: "2018 - 2022",
                description:
                  "Focused on software development fundamentals, data structures, algorithms, and web technologies. Graduated with a 3.7 GPA.",
                courses: [
                  "Data Structures and Algorithms",
                  "Web Development Fundamentals",
                  "Database Systems",
                  "Software Engineering Principles",
                ],
              },
              {
                degree: "Full Stack Web Development Bootcamp",
                institution: "Tech Academy",
                period: "2023",
                description:
                  "Intensive 12-week program covering modern web development technologies including JavaScript, React, Node.js, and database management.",
                courses: [
                  "Frontend Development with React",
                  "Backend Development with Node.js",
                  "Database Design and Implementation",
                  "Full Stack Project Development",
                ],
              },
              {
                degree: "Online Certifications",
                institution: "Various Platforms",
                period: "2022 - Present",
                description:
                  "Completed certifications in JavaScript, React, and responsive web design through platforms like freeCodeCamp, Udemy, and Coursera.",
                courses: [
                  "JavaScript Algorithms and Data Structures",
                  "Responsive Web Design",
                  "React - The Complete Guide",
                  "Modern JavaScript from the Beginning",
                ],
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-4">{edu.description}</p>
                <div className="mt-4">
                  <p className="font-medium mb-2">Key Courses:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fact or Interests */}
      <section className="container py-12 md:py-16">
        <div className="rounded-lg border bg-background p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Fun Fact</h2>
          <p className="text-muted-foreground">
            I keep a weekly log of “one new thing” I learned in web dev.
            Offline, you’ll usually find me hiking local trails or brewing a
            better cup of coffee.
          </p>
        </div>
      </section>
    </>
  );
}
