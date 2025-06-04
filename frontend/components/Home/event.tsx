import React from 'react';

interface TimelineItem {
  date: string;
  month: string;
  title: string;
  side: 'left' | 'right';
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    { date: '17', month: 'MAY', title: 'REGISTRATIONS\nBEGINS', side: 'right' },
    { date: '21', month: 'MAY', title: 'PROJECT\nSUBMISSION\nSTARTS', side: 'left' },
    { date: '10', month: 'JUNE', title: 'REGISTRATIONS\nCLOSE', side: 'right' },
    { date: '15', month: 'JULY', title: 'PROJECT\nSUBMISSION\nENDS', side: 'left' },
    { date: '18', month: 'JULY', title: 'SCREENING\nBEGINS', side: 'right' },
    { date: '20', month: 'JULY', title: 'MENTORING\nROUND', side: 'left' },
    { date: '22', month: 'JULY', title: 'ONLINE\nROUND\nRESULTS', side: 'right' },
    { date: '02', month: 'AUG', title: 'OFFLINE\nROUND', side: 'left' }
  ];

  return (
    <div 
      className="min-h-screen py-8 px-4 flex flex-col items-center"
      style={{ backgroundColor: '#2B2B2B' }}
    >
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-12 tracking-widest">
        TIMELINE
      </h1>
      
      <div className="relative w-full max-w-md">
        {/* Vertical line */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2"
          style={{ backgroundColor: '#D2401E' }}
        ></div>
        
        {/* Timeline items */}
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="relative mb-16 flex items-center"
          >
            {/* Timeline dot */}
            <div 
              className="absolute left-1/2 w-4 h-4 border-4 rounded-full transform -translate-x-1/2 z-10"
              style={{ 
                backgroundColor: '#D2401E',
                borderColor: '#2B2B2B'
              }}
            ></div>
            
            {/* Content box */}
            <div
              className={`text-white px-4 py-4 rounded-sm font-bold text-sm leading-tight relative ${
                item.side === 'left' 
                  ? 'mr-auto pr-8' 
                  : 'ml-auto pl-8'
              }`}
              style={{ 
                backgroundColor: '#D2401E',
                width: '180px',
                marginLeft: item.side === 'left' ? '0' : 'calc(50% + 20px)',
                marginRight: item.side === 'right' ? '0' : 'calc(50% + 20px)'
              }}
            >
              {/* Date positioned at the edge closest to timeline */}
              <div 
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  item.side === 'left' ? 'right-2' : 'left-2'
                }`}
              >
                <div className="text-3xl font-bold leading-none">{item.date}</div>
                <div className="text-xs font-normal mt-1">{item.month}</div>
              </div>
              
              {/* Title positioned away from timeline */}
              <div className={`${item.side === 'left' ? 'pr-12' : 'pl-12'}`}>
                {item.title.split('\n').map((line, lineIndex) => (
                  <div key={lineIndex} className="leading-tight">{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;