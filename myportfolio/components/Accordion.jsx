'use client000'
import React from 'react';
import { useState } from 'react';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null)

  const items = [
    {
      question: 'Gentlemen',
      answer: 'Short Fade: R35',
      answer1: 'High Top Fade: R40',
      answer2: 'Short Fade with Dye: R70'

    },
    {
      question: 'Ladies',
      answer: 'Trimming: R35',
      answer1:'Fade Dye: From R40',
      answer2: 'Beard Dye: R20'
    },
    {
      question: 'Kids',
      answer: 'Trimming: R35',
      answer1:'Fade Dye: From R40',
      answer2: 'Beard Dye: R20'
    },
    {
      question: 'Color and Trimming',
      answer: 'Trimming: R35',
      answer1:'Fade Dye: From R40',
      answer2: 'Beard Dye: R20'

    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-xl mx-auto pt-[64px] pb-[84px] px-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Services Catalogue</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className=" border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              className={`w-full flex justify-between items-center p-4 text-left transition-colors ${activeIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="font-bold text-gray-900">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="p-4 pt-0 text-gray-600">
                  <div>
                    <ul>
                        <li className=''>{item.answer}</li>
                        <li className=''>{item.answer1}</li>
                        <li className=''>{item.answer2}</li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordion