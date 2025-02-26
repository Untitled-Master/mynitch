import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Sparkles, Search } from 'lucide-react';
import Nav from '../components/Nav'; // Import the Nav component

const Topics = () => {
  const topics = [
    {
      id: 1,
      title: "Existentialism",
      description: "Explore the nature of existence, freedom, and the search for meaning in life.",
      icon: <Sparkles className="h-8 w-8 text-[#FAFAFA]" />,
    },
    {
      id: 2,
      title: "Ethics",
      description: "Dive into moral philosophy and the principles of right and wrong behavior.",
      icon: <BookOpen className="h-8 w-8 text-[#FAFAFA]" />,
    },
    {
      id: 3,
      title: "Metaphysics",
      description: "Investigate the fundamental nature of reality, existence, and the universe.",
      icon: <Sparkles className="h-8 w-8 text-[#FAFAFA]" />,
    },
    {
      id: 4,
      title: "Epistemology",
      description: "Examine the nature, sources, and limits of human knowledge.",
      icon: <BookOpen className="h-8 w-8 text-[#FAFAFA]" />,
    },
    {
      id: 5,
      title: "Political Philosophy",
      description: "Analyze the concepts of justice, rights, and the role of government.",
      icon: <Sparkles className="h-8 w-8 text-[#FAFAFA]" />,
    },
    {
      id: 6,
      title: "Aesthetics",
      description: "Explore the nature of beauty, art, and taste in human experience.",
      icon: <BookOpen className="h-8 w-8 text-[#FAFAFA]" />,
    },
  ];

  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
      {/* Background image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B]/90 z-10" /> {/* Gradient overlay */}
        <img 
          src="https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg" 
          alt="Philosophy Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAFAFA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAFAFA]/5 rounded-full blur-3xl"></div>
      
      {/* Navigation bar */}
      <Nav /> {/* Use the Nav component here */}
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="px-4 py-1 bg-[#FAFAFA]/10 rounded-full backdrop-blur-sm text-xs font-medium tracking-wider uppercase">
              Featured Topics
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">Explore Our</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Philosophical Topics
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            Dive into a curated selection of philosophical topics that explore the depths of human thought, from ancient wisdom to modern existentialism.
          </p>
        </div>
      </div>
      
      {/* Search bar */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center bg-[#FAFAFA]/10 backdrop-blur-sm rounded-full px-6 py-4">
          <Search className="h-5 w-5 text-[#FAFAFA]/60" />
          <input
            type="text"
            placeholder="Search topics..."
            className="flex-1 bg-transparent border-none outline-none text-[#FAFAFA] placeholder:text-[#FAFAFA]/60 ml-4"
          />
        </div>
      </div>
      
      {/* Topics list */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="group relative bg-[#09090B]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border border-transparent hover:border-[#FAFAFA]/10"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#FAFAFA]/10 via-[#FAFAFA]/5 to-[#FAFAFA]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Topic icon */}
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA]/10 flex items-center justify-center mb-6">
                {topic.icon}
              </div>
              
              {/* Topic title and description */}
              <h2 className="text-2xl font-serif font-bold mb-4">{topic.title}</h2>
              <p className="text-[#FAFAFA]/70 mb-6">{topic.description}</p>
              
              {/* Explore Topic button */}
              <Button className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-6 py-4 text-lg shadow-lg font-medium w-full">
                Explore Topic
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;