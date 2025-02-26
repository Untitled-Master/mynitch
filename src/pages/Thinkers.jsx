import { Button } from '@/components/ui/button';
import { User, BookOpen, Building } from 'lucide-react';
import Nav from '../components/Nav'; // Import the Nav component

const Thinkers = () => {
  const thinkers = [
    {
      id: 1,
      name: "axmed",
      bio: "A passionate philosopher exploring the depths of human existence and the meaning of life.",
      image: "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4",
      articlesCount: 12,
      institution: "Higher School of Computer Science and Digital Technologies - ESTIN",
    }
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
              Featured Thinkers
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">Meet Our</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Brilliant Thinkers
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            Discover the minds behind the ideas. Our thinkers are passionate about exploring the fundamental questions of existence, ethics, and human thought.
          </p>
        </div>
      </div>
      
      {/* Thinkers list */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {thinkers.map((thinker) => (
            <div key={thinker.id} className="bg-[#09090B]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6">
              {/* Thinker image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src={thinker.image} 
                  alt={thinker.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thinker name and bio */}
              <h2 className="text-2xl font-serif font-bold text-center mb-4">{thinker.name}</h2>
              <p className="text-[#FAFAFA]/70 text-center mb-6">{thinker.bio}</p>
              
              {/* Metadata (articles count and institution) */}
              <div className="flex flex-col items-center space-y-4 text-sm text-[#FAFAFA]/60 mb-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{thinker.articlesCount} Articles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>{thinker.institution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thinkers;