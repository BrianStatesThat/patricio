'use client000'
import { assets, short_fade } from '@/assets/assets';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null)

  const items = [
    {
      question: 'Gentlemen',
      answer: 'Short Fade: R35',
      answerUrl: '/man1.jpg',
      answer1: 'High Top Fade: R40',
      answerUrl1: '/man2.jpg',
      answer2: 'Short Fade with Dye: R70',
      answerUrl2: '/man.jpg'

    },
    {
      question: 'Ladies',
      answer: 'Trimming: R35',
      answerUrl: '/ladies.jpg',
      answer1:'Fade Dye: From R40',
      answerUrl1: '/ladies.jpg',
      answer2: 'Beard Dye: R20',
      answerUrl2: '/ladies.jpg',
    },
    {
      question: 'Kids',
      answer: 'Short Fade: R35',
      answerUrl: '/boy2.jpg',
      answer1:'Short Fade with Dye: R70',
      answerUrl1: '/boy1.jpg',
      answer1: 'High Top Fade: R40',
      answerUrl2: '/kids.jpg',
    },
    {
      question: 'Color and Trimming',
      answer: 'Trimming: R35',
      answerUrl: '/color.jpg',
      answer1:'Fade Dye: From R40',
      answerUrl1: '/color.jpg',
      answer2: 'Beard Dye: R20',
      answerUrl2: '/man4.jpg',

    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col mx-auto justify-center items-center w-full scroll-mt-20 px-[12%] overflow-x-hidden pt-[64px] pb-[84px]">
      <BookOpen className='text-darkTheme dark:text-white mx-auto justify-center items-center w-12 h-12'/>
      <h2 className="text-center text-4xl font-bold mb-6 text-darkTheme dark:text-white">Services Catalogue</h2>
      <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-regular'>
      Need a fresh cut, a clean trim or bold colour? We do sharp fades, neat beard lineups and stylish dye jobs. Walk in, leave looking your best. Good vibes, great cuts.
      </p>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className=" border dark:border-darkTheme rounded-md overflow-hidden shadow-sm">
            <button
              className={`w-full flex justify-between items-center p-4 text-left transition-colors ${activeIndex === index ? 'bg-gray-50 text-darkTheme' : 'bg-gray-50 text-darkTheme'}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span className={`font-semibold text-2xl ${activeIndex === index ? 'text-darkTheme dark:text-darkTheme':'dark:text-darkTheme text-darkTheme'}`}>{item.question}</span>
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
                <div className="font-regular text-xl p-4 pt-0 text-darkTheme dark:text-white">
                  <div>
                    <ul>
                        <li className=''>
                            <p>{item.answer}</p>
                            <Image alt='first image' src={item.answerUrl} width="250" height="250" className='w-80 h-80'/>
                        </li>
                        <li className=''>
                            <p>{item.answer1}</p>
                            <Image alt='second image' src={item.answerUrl1} width="250" height="250" className='w-80 h-80'/>
                        </li>
                        <li className=''>
                            <p>{item.answer2}</p>
                            <Image alt='third image' src={item.answerUrl2} width="250" height="250" className='w-80 h-80'/>
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