"use client";
import Accordion from '@/components/Accordion';
import Subscription from '@/components/Subscription';
import React from 'react';

function page({isDarkMode}) {
  return (
    <>
      <Accordion isDarkMode={isDarkMode}/>
      <Subscription isDarkMode={isDarkMode}/>
    </>
    
  )
}

export default page