"use client"

import { useState } from "react"


import { type question ,type FaqitemProps} from "../types/types"

const Faqitem = ({ faq, selected, setSelected, index }: FaqitemProps) => {
  const isOpen = selected === index;

  return (
    <div key={index}>
      <button onClick={() => setSelected(isOpen ? null : index)}>
        {faq.question}
      </button>
      
      {isOpen && <p>{faq.answer}</p>}
    </div>
  );
};


const FaqBox = ({ faqs }: { faqs: question[] }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq: question, index: number) => (
        <Faqitem
          key={index}
          faq={faq}
          selected={selected}
          setSelected={setSelected}
          index={index}
        />
      ))}
    </div>
  );
};

export default FaqBox;