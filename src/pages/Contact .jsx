import React from 'react'


const Contact = () => (
<section className="pt-28 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 inline-block">
      Contact Me
    </h2>
    <p className="text-lg mb-6">
      Interested in collaborating or hiring? Feel free to reach out!
    </p>
    <div className="space-y-4">
      <p>Email: <a href="mailto:chandrucyril@gmail.com" className="text-blue-600 hover:underline">chandrucyril@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/cyrilchandru3012" className="text-blue-600 hover:underline" target="_blank">linkedin.com/in/cyrilchandru3012</a></p>
      <p>GitHub: <a href="https://github.com/Cyril3012" className="text-blue-600 hover:underline" target="_blank">github.com/Cyril3012</a></p>
    </div>
  </div>
</section>
)
export default Contact