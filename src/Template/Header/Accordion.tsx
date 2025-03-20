import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItem {
  title: string;
  items: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="border-b border-color">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-primary font-semibold transition"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <FaChevronDown
                className={`text-secondary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="px-6 py-2 space-y-2">
                {item.items.map((subItem, i) => (
                  <li key={i} className="text-sm cursor-pointer anchor-text">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
