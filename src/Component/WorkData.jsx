import React from 'react'

function WorkData() {

const workData = [
     {
        image: "https://via.placeholder.com/400",
        demo: "https://example.com/demo",
        github: "https://github.com/example",
     },
     {
        image: "https://via.placeholder.com/400",
        demo: "https://example.com/demo2",
        github: "https://github.com/example2",
        },
        {
        image: "https://via.placeholder.com/400",
        demo: "https://example.com/demo2",
        github: "https://github.com/example2",
      },
          {
            image: "https://via.placeholder.com/400",
            demo: "https://example.com/demo2",
            github: "https://github.com/example2",
          }
      ];
    
      
        
  return (
    <CustomCarousel works={workData} />
  )
}

export default WorkData

