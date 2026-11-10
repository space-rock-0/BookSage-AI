import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer bg-white border-t border-border pt-16 pb-10 px-4 relative z-10">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-12">
                    <div>
                        <h5 className="text-[0.95rem] font-bold mb-5 text-text-primary">Developer</h5>
                        <div className="developer-card">
                            <p className="font-bold text-text-primary mb-0.5">Sagi Siddhartha</p>
                            <p className="text-text-secondary text-[0.82rem] mb-4">AI/ML Engineer | Generative AI | Agentic AI</p>
                            <div className="flex flex-wrap gap-2.5">
                                <a href="https://github.com/space-rock-0/BookSage-AI" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-md text-text-secondary hover:bg-bg-hover hover:text-accent hover:border-accent transition-all text-xs font-medium decoration-0">
                                    <Github size={14} /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/siddhartha-sagi/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-md text-text-secondary hover:bg-bg-hover hover:text-accent hover:border-accent transition-all text-xs font-medium decoration-0">
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-6 border-t border-border text-text-muted text-[0.82rem]">
                    <p>&copy; 2025 BookSage-AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
