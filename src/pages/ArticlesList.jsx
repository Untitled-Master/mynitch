import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Nav from '../components/Nav'; // Import the Nav component

const ArticlesList = () => {
  const articles = [
    {
      id: 1,
      title: "The Nature of Human Existence",
      description: "Exploring the philosophical inquiry of what it means to exist as a human being.",
      date: "February 26, 2025",
      author: "axmed",
      authorImage: "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4",
      image: "https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg",
    },
    {
      id: 2,
      title: "The Ethics of Artificial Intelligence",
      description: "Examining the moral implications of AI and its impact on society.",
      date: "March 5, 2025",
      author: "axmed",
      authorImage: "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4",
      image: "https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg",
    },
    {
      id: 3,
      title: "The Philosophy of Time",
      description: "Understanding the concept of time from ancient to modern philosophical perspectives.",
      date: "March 12, 2025",
      author: "axmed",
      authorImage: "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4",
      image: "https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg",
    },
    {
      id: 4,
      title: "The Meaning of Life",
      description: "Delving into the age-old question of life's purpose and significance.",
      date: "March 19, 2025",
      author: "axmed",
      authorImage: "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4",
      image: "https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg",
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
              Featured Articles
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">Explore Our</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Collection of Articles
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            Dive into a curated selection of articles that explore the depths of human thought, from ancient philosophy to modern existentialism.
          </p>
        </div>
      </div>
      
      {/* Articles list */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-[#09090B]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Article content (title, description, metadata) */}
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold mb-2">{article.title}</h2>
                  <p className="text-[#FAFAFA]/70 mb-4">{article.description}</p>
                  
                  {/* Metadata (date and author) */}
                  <div className="flex items-center space-x-4 text-sm text-[#FAFAFA]/60">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img 
                        src={article.authorImage} 
                        alt={article.author} 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>By {article.author}</span>
                    </div>
                  </div>
                </div>
                
                {/* Read Article button */}
                <Button className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-6 py-4 text-lg shadow-lg font-medium">
                  Read Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;