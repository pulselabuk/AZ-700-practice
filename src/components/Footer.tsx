import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
      {/* Branding */}
      <p className="text-sm">
        © {new Date().getFullYear()} AZ-700 Practice Exam. All rights reserved.
      </p>

      {/* Links */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/tomsclater"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <Github className="h-5 w-5 mr-1" />
          GitHub
        </a>
        {/* <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <Linkedin className="h-5 w-5 mr-1" />
          LinkedIn
        </a> */}
        <a
          href="mailto:tomsclater@live.com"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <Mail className="h-5 w-5 mr-1" />
          Contact
        </a>
      </div>
    </div>
  </footer>
);
