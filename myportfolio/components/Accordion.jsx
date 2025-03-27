'use client000'
import { assets, short_fade } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null)

  const items = [
    {
      question: 'Gentlemen',
      answer: 'Short Fade: R35',
      answerUrl: '/work-1.png',
      answer1: 'High Top Fade: R40',
      answerUrl1: '/work-1.png',
      answer2: 'Short Fade with Dye: R70',
      answerUrl2: '/work-1.png'

    },
    {
      question: 'Ladies',
      answer: 'Trimming: R35',
      answerUrl: '/work-2.png',
      answer1:'Fade Dye: From R40',
      answerUrl1: '/work-2.png',
      answer2: 'Beard Dye: R20',
      answerUrl2: '/work-2.png',
    },
    {
      question: 'Kids',
      answer: 'Trimming: R35',
      answerUrl: '/work-3.png',
      answer1:'Fade Dye: From R40',
      answerUrl1: '/work-3.png',
      answer2: 'Beard Dye: R20',
      answerUrl2: '/work-3.png',
    },
    {
      question: 'Color and Trimming',
      answer: 'Trimming: R35',
      answerUrl: '/work-4.png',
      answer1:'Fade Dye: From R40',
      answerUrl1: '/work-4.png',
      answer2: 'Beard Dye: R20',
      answerUrl2: '/work-4.png',

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
                <div className="p-4 pt-0 text-darkTheme ">
                  <div>
                    <ul>
                        <li className=''>
                            <p>{item.answer}</p>
                            <Image alt='first image' src={item.answerUrl} width="320" height="320" className='w-80 h-80'/>
                        </li>
                        <li className=''>
                            <p>{item.answer1}</p>
                            <Image alt='second image' src={item.answerUrl1} width="320" height="320" className='w-80 h-80'/>
                        </li>
                        <li className=''>
                            <p>{item.answer2}</p>
                            <Image alt='third image' src={item.answerUrl2} width="320" height="320" className='w-80 h-80'/>
                        </li>
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