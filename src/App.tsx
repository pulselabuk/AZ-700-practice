import React, { useState } from 'react';
import { Moon, Sun, Palette, Image as ImageIcon, Youtube, Instagram, Twitter, Facebook } from 'lucide-react';

type Section = 'palette' | 'paintings' | 'videos';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('palette');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-lg bg-white/10 dark:bg-gray-900/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Art Time Studio
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80"
          alt="Art Studio Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <div className="text-center text-white mb-12">
            <h2 className="text-5xl font-bold mb-4">Welcome to Art Time</h2>
            <p className="text-xl">Discover the beauty of modern art</p>
          </div>
          
          {/* Section Toggle Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveSection('palette')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeSection === 'palette'
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Palette className="w-5 h-5" />
              Palette Art
            </button>
            <button
              onClick={() => setActiveSection('paintings')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeSection === 'paintings'
                  ? 'bg-pink-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Paintings
            </button>
            <button
              onClick={() => setActiveSection('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeSection === 'videos'
                  ? 'bg-red-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Youtube className="w-5 h-5" />
              Videos
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Palette Art Section */}
        {activeSection === 'palette' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              <Palette className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold dark:text-white">Palette Art</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80'
              ].map((src, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl transform transition-transform hover:scale-105"
                >
                  <img src={src} alt={`Palette Art ${index + 1}`} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium">Palette Art #{index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Paintings Section */}
        {activeSection === 'paintings' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              <ImageIcon className="w-8 h-8 text-pink-500" />
              <h2 className="text-3xl font-bold dark:text-white">Paintings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80'
              ].map((src, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl transform transition-transform hover:scale-105"
                >
                  <img src={src} alt={`Painting ${index + 1}`} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium">Painting #{index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* YouTube Videos Section */}
        {activeSection === 'videos' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              <Youtube className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold dark:text-white">YouTube Videos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-xl overflow-hidden transform transition-transform hover:scale-105"
                >
                  <div className="aspect-video bg-gray-700 animate-pulse"></div>
                  <div className="p-4">
                    <h3 className="text-white font-medium">Art Tutorial #{index}</h3>
                    <p className="text-gray-400 text-sm mt-2">Learn the techniques of modern art in this tutorial series</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Art Time Studio
              </h3>
              <p className="text-gray-400">
                Discover and explore the world of modern art through our curated collections and tutorials.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Palette Art</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paintings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-4">
                <h5 className="text-white font-semibold mb-2">Subscribe to our newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
                  />
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Art Time Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;