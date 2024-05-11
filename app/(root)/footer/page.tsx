import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white select-none">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Ensure items are centered in the grid on all sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                    <div>
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                            <li><a href="https://niharikasodhi.substack.com/" className="text-gray-400 hover:text-white transition-colors duration-300">NewsLetters</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Social Media</h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="https://www.linkedin.com/in/nsodhi4696/" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a></li>
                            <li><a href="https://www.youtube.com/@niharikaasodhi" className="text-gray-400 hover:text-white transition-colors duration-300">Youtube</a></li>
                            <li><a href="https://twitter.com/NiharikaSodhi" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a></li>
                            <li><a href="https://medium.com/about-me-stories/about-me-niharika-sodhi-e0370220d8d6" className="text-gray-400 hover:text-white transition-colors duration-300">Medium</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <p className="mt-4 text-gray-400">
                            Email: info@example.com<br/>
                          
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer copyright text centered */}
            <div className="text-center py-4 text-gray-600">
                © {new Date().getFullYear()} Niharikaa. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
