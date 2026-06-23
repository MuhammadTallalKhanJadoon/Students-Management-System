import React from 'react'
import { SunMedium,Moon } from 'lucide-react';

const Mode = () => {
  return (
    <div className="flex justify-around border-[0.1cqw] rounded-[5cqw] gap-[1cqw] p-[1.5cqw] w-[25cqw]">
      <SunMedium className="h-[6.3cqw]" />
      <Moon className="h-[6.3cqw]" />
    </div>
  )
}

export default Mode
