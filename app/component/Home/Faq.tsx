"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQS: FAQ[] = [
  {
    question: "How often should I have my HVAC system serviced?",
    answer:
      "We recommend servicing your system twice a year: once in the spring for your AC, and once in the fall for your heating system. This preventive maintenance extends equipment life and maintains energy efficiency.",
  },
  {
    question: "Do you offer 24/7 emergency repair services?",
    answer:
      "Yes, we have dispatchers and technicians available 24 hours a day, 7 days a week, 365 days a year to handle critical heating and cooling emergencies.",
  },
  {
    question: "What brands of HVAC equipment do you repair and install?",
    answer:
      "Our certified technicians are trained to repair all major brands and models. For new installations, we partner with industry-leading manufacturers to provide the most reliable and efficient systems available.",
  },
  {
    question: "Are financing options available for new installations?",
    answer:
      "Absolutely. We offer flexible financing plans with approved credit, including zero-down options and low monthly payments, to make your comfort upgrades affordable.",
  },
];

type SectionTagProps = {
  text: string;
  color?: "blue" | "orange";
};

const SectionTag: React.FC<SectionTagProps> = ({ text, color = "blue" }) => {
  const colorClass =
    color === "blue"
      ? "text-[#00AEEF] bg-cyan-50"
      : "text-[#F26522] bg-orange-50";

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-6 ${colorClass}`}
    >
      {text}
    </span>
  );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 px-8 py-4 text-sm md:text-base";

  const variants = {
    primary:
      "bg-[#F26522] text-white hover:bg-[#d9561a] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5",
    outline:
      "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span
          className={`text-lg font-bold pr-4 transition-colors ${
            isOpen ? "text-[#00AEEF]" : "text-gray-900 group-hover:text-[#F26522]"
          }`}
        >
          {question}
        </span>

        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          {isOpen ? (
            <Minus size={18} className="text-[#F26522]" />
          ) : (
            <Plus size={18} className="text-[#00AEEF]" />
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <SectionTag text="Got Questions?" color="blue" />

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in total transparency. Here are some of the most common
              questions we get from our customers regarding HVAC service and
              installation.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">
                Still have a question?
              </h4>

              <p className="text-sm text-gray-500 mb-4">
                Our team is ready to help you out.
              </p>

              <Button
                variant="outline"
                className="w-full bg-white text-sm py-3"
                onClick={() => {
                  const contactSection =
                    document.getElementById("contact-section");
                  if (contactSection)
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Support
              </Button>
            </div>
          </div>

          <div className="lg:w-2/3 border-t border-gray-200">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}