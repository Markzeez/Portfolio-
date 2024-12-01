import React, { useState } from 'react';

const Experience = () => {
  // Tab data
  const tabs = [
    { label: 'Zidio', content: 'During an internship, the user worked with a six-member team to develop two significant projects: a MERN stack application and a finance budget management system. The MERN stack application enhanced their proficiency in full-stack development, including MongoDB, Express.js, React, and Node.js. The finance budget application involved creating tools for managing expenses and financial planning, emphasizing problem-solving and attention to detail. This experience provided valuable insights into collaborative development, code optimization, and deploying functional.' },
    { label: 'Goufer Plc', content: 'As a frontend developer, the user worked at a company focused on creating applications that deliver seamless services and expert solutions to users. This involved designing and implementing responsive, user-friendly interfaces tailored to meet user needs. Their contributions emphasized delivering efficiency and satisfaction, ensuring a smooth and engaging user experience. This role highlighted their expertise in translating complex requirements into intuitive applications while maintaining high-quality standards for performance and accessibility in service delivery. ' },
    { label: 'Unboxd', content: 'At Unboxed, the user contributed as a frontend developer, collaborating on projects that enhanced the company online platform. They focused on bug fixing, testing, and implementing new features using technologies like Chakra UI, React, TypeScript, and Golang. Their role emphasized delivering user-friendly, efficient solutions tailored to diverse customer needs.' },
  ];

  const [activeTab, setActiveTab] = useState(0); // State for active tab

  return (
    <div name="experience" className="w-full h-screen sm:min-h-[700px]  bg-[#090503] md:pl-[100px]  mx-auto pt-[75px]">
        <h1 className='text-4xl font-bold inline border-b-4 text-yellow-400 border-yellow-600 mt-10 ml-[10px]'>Experience</h1>
      {/* Tab Buttons */}
      <div className="flex border-b border-yellow-400 mt-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-extrabold ${
              activeTab === index
                ? 'text-yellow-200 border-b-2 border-blue-500'
                : 'text-yellow-400 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 bg-[#23201f] rounded-lg mr-4 ml-4 space-y-7 ">
        <p className="text-yellow-400">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Experience;