import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="m-4 rounded-lg border-2 border-solid border-black bg-white shadow dark:border-yellow-600 dark:bg-gray-800">
      <div className="text-text_2 container px-4 py-6 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p>&copy; {date} Євгеній Грем. Усі права захищено.</p>
        </div>
        <div className="mt-4 flex justify-center md:mt-0">
          <a
            href="https://t.me/GremYevhenii"
            target="_blank"
            rel="noopener noreferrer"
            className="darck:hover:text-white transition-colors">
            Зв`язатися з розробником
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
