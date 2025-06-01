// import React from "react";
// import Link from "next/link";
// import {
//   ChevronRight,
//   Layout,
//   Calendar,
//   BarChart,
//   ArrowRight,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import CompanyCarousel from "@/components/company-carousel";
// import Image from "next/image";

// const faqs = [
//   {
//     question: "What is ZCRUM?",
//     answer:
//       "ZCRUM is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
//   },
//   {
//     question: "How does ZCRUM compare to other project management tools?",
//     answer:
//       "ZCRUM offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
//   },
//   {
//     question: "Is ZCRUM suitable for small teams?",
//     answer:
//       "Absolutely! ZCRUM is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from ZCRUM's features.",
//   },
//   {
//     question: "What key features does ZCRUM offer?",
//     answer:
//       "ZCRUM provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
//   },
//   {
//     question: "Can ZCRUM handle multiple projects simultaneously?",
//     answer:
//       "Yes, ZCRUM is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes ZCRUM ideal for organizations juggling multiple projects or clients.",
//   },
//   {
//     question: "Is there a learning curve for new users?",
//     answer:
//       "While ZCRUM is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
//   },
// ];

// const features = [
//   {
//     title: "Intuitive Kanban Boards",
//     description:
//       "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
//     icon: Layout,
//   },
//   {
//     title: "Powerful Sprint Planning",
//     description:
//       "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
//     icon: Calendar,
//   },
//   {
//     title: "Comprehensive Reporting",
//     description:
//       "Gain insights into your team's performance with detailed, customizable reports and analytics.",
//     icon: BarChart,
//   },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="container mx-auto py-20 text-center">
//         <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
//           Streamline Your Workflow <br />
//           <span className="flex mx-auto gap-3 sm:gap-4 items-center">
//             with
//             <Image
//               src={"/logo2.png"}
//               alt="Zscrum Logo"
//               width={400}
//               height={80}
//               className="h-14 sm:h-24 w-auto object-contain"
//             />
//           </span>
//         </h1>
//         <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
//           Empower your team with our intuitive project management solution.
//         </p>
//         <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
//         <Link href="/onboarding">
//           <Button size="lg" className="mr-4">
//             Get Started <ChevronRight size={18} className="ml-1" />
//           </Button>
//         </Link>
//         <Link href="#features">
//           <Button size="lg" variant="outline">
//             Learn More
//           </Button>
//         </Link>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="bg-gray-900 py-20 px-5">
//         <div className="container mx-auto">
//           <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card key={index} className="bg-gray-800">
//                 <CardContent className="pt-6">
//                   <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
//                   <h4 className="text-xl font-semibold mb-2">
//                     {feature.title}
//                   </h4>
//                   <p className="text-gray-300">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Companies Carousel */}
//       <section className="py-20">
//         <div className="container mx-auto">
//           <h3 className="text-3xl font-bold mb-12 text-center">
//             Trusted by Industry Leaders
//           </h3>
//           <CompanyCarousel />
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="bg-gray-900 py-20 px-5">
//         <div className="container mx-auto">
//           <h3 className="text-3xl font-bold mb-12 text-center">
//             Frequently Asked Questions
//           </h3>
//           <Accordion type="single" collapsible className="w-full">
//             {faqs.map((faq, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger>{faq.question}</AccordionTrigger>
//                 <AccordionContent>{faq.answer}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 text-center px-5">
//         <div className="container mx-auto">
//           <h3 className="text-3xl font-bold mb-6">
//             Ready to Transform Your Workflow?
//           </h3>
//           <p className="text-xl mb-12">
//             Join thousands of teams already using ZCRUM to streamline their
//             projects and boost productivity.
//           </p>
//           <Link href="/onboarding">
//             <Button size="lg" className="animate-bounce">
//               Start For Free <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


// Updated styles for a PlaySyn-inspired UI
"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is PlaySync?",
    answer:
      "PlaySync is your all-in-one collaboration platform, bringing seamless sync to projects, meetings, schedules, and more — all with a touch of play.",
  },
  {
    question: "Who can benefit from PlaySync?",
    answer:
      "Whether you're a startup, a remote team, or an enterprise, PlaySync is built to scale with you, offering flexible tools to match your rhythm.",
  },
  {
    question: "What makes PlaySync different?",
    answer:
      "We combine rich features with delightful UX. Our design-first approach helps teams move faster, stay in sync, and actually enjoy project management.",
  },
];

const features = [
  {
    title: "Smart Sync Boards",
    description:
      "Visually track progress across tasks and timelines — perfect for creative and technical teams alike.",
    icon: Layout,
  },
  {
    title: "Collaborative Planning",
    description:
      "Co-create sprints and timelines with your team in real time, wherever they are.",
    icon: Calendar,
  },
  {
    title: "Actionable Insights",
    description:
      "Monitor performance with live dashboards and automated insights to stay ahead.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1c] via-[#1c1c2b] to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Work. Sync. Play. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
            With PlaySync
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Revolutionize your team’s productivity with a tool that brings
          structure and spontaneity together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/onboarding">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white">
              Get Started <ChevronRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#1a1a2b] py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Core Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#2a2a3c] shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-indigo-400" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-20 bg-black">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Trusted By Creative Teams</h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1a1a2b] py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">FAQs</h3>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center px-5 bg-black">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">Let’s Get in Sync</h3>
          <p className="text-xl mb-12 text-gray-300 max-w-xl mx-auto">
            PlaySync helps teams around the world collaborate, iterate, and deliver with joy.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-400 animate-pulse">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
