import{j as e,m as a,c as r,x as n}from"./index-DjS6VI1M.js";const l=[{title:"100 Days of Python Bootcamp",platform:"Udemy",instructor:"Dr. Angela Yu",description:"Comprehensive Python programming course covering fundamentals to advanced concepts, including web development, data science, and automation.",completed:!0,skills:["Python","Flask","SQLite","API Development","Web Scraping"]},{title:"MERN Stack Development",platform:"Connect Shiksha",instructor:"Industry Experts",description:"Full-stack web development course focusing on MongoDB, Express.js, React, and Node.js with real-world project implementations.",completed:!0,skills:["React","Node.js","MongoDB","Express.js","REST APIs"]},{title:"100 Days of Code",platform:"Code with Harry",instructor:"Harry",description:"Intensive coding challenge covering various programming concepts and project development across different technologies.",completed:!0,skills:["JavaScript","Python","Web Development","Problem Solving"]}],d=()=>e.jsx("section",{id:"courses",className:"py-20  backdrop-blur-0",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsxs(a.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Courses & Certifications"}),e.jsx("p",{className:"text-gray-400 text-lg max-w-3xl mx-auto",children:"Continuous learning through structured courses and hands-on practice to stay updated with the latest technologies."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map((t,s)=>e.jsxs(a.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.2},className:" bg-gray-800/50 transition-colors duration-300 rounded-lg p-6 shadow-lg transform hover:scale-105",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[e.jsx(r,{className:"text-gradient-to-r from-purple-500 to-blue-500 text-3xl flex-shrink-0 mt-1"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white",children:t.title}),e.jsx("p",{className:"text-gray-400",children:t.platform}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Instructor: ",t.instructor]})]})]}),e.jsx("p",{className:"text-gray-300 mb-4",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.skills.map((i,o)=>e.jsx("span",{className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-sm",children:i},o))}),t.completed&&e.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-medium",children:[e.jsx(n,{}),e.jsx("span",{children:"Completed"})]})]},s))})]})});export{d as default};
