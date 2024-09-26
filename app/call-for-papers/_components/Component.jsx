import React from 'react'
import { Square } from 'lucide-react'

function TimelineItem({ icon, title, date, description, strikeoff, content, isFirst, isLast }) {
  return (
    <div className={`relative flex items-start space-x-4 ${isLast ? '' : 'mb-8'}`}>
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full ">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between space-x-4 text-sm">
          <h3 className="font-medium text-white">{title}</h3>
          <div className="text-right text-gray-400">
            {isFirst ? (
              <div className="flex flex-col items-end">
                <span className="font-semibold text-white">{content}</span>
                <span className="line-through text-xs">{strikeoff}</span>
              </div>
            ) : (
              date
            )}
          </div>
        </div>
        {description && (
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        )}
      </div>
    </div>
  )
}

export default function Component() {
  const timelineItems = [
    {
      icon: <Square className="h-4 w-4 text-yellow-500" />,
      title: "Last date for Paper Submission",
      date: "2024, AoE",
      strikeoff: "September 27",
      content: "September 30",
    },
    {
      icon: <Square className="h-4 w-4 text-gray-400" />,
      title: "Last date for Revision of Submission by Author(s)",
      date: "October 2, 2024, 6 pm IST",
    },
    {
      icon: <Square className="h-4 w-4 text-gray-400" />,
      title: "Notification of Acceptance",
      date: "November 12, 2024, AoE",
    },
    {
      icon: <Square className="h-4 w-4 text-gray-400" />,
      title: "Camera-ready Version",
      date: "November 22, 2024, AoE",
    },
  ]

  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-700" />
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isFirst={index === 0}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  )
}