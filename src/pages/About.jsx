import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Users, Building, ArrowRight } from 'lucide-react';
import Nav from '../components/Nav'; // Import the Nav component

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "axmed",
      role: "Founder & Lead Philosopher",
      bio: "A passionate thinker exploring the depths of human existence and the meaning of life.",
      image: "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4",
    },
    {
      id: 2,
      name: "Sophia",
      role: "Ethics Specialist",
      bio: "An ethicist specializing in the moral implications of artificial intelligence and technology.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Marcus",
      role: "Historian of Philosophy",
      bio: "A historian of philosophy with a focus on ancient Greek and Roman thought.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Elena",
      role: "Contemporary Philosopher",
      bio: "A contemporary philosopher examining the intersections of culture, identity, and ethics.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
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
              About Us
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">Welcome to</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Philosophia
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            Philosophia is a platform dedicated to exploring the depths of human thought, from ancient wisdom to contemporary discourse. Our mission is to inspire curiosity, foster critical thinking, and provide a space for meaningful dialogue.
          </p>
        </div>
      </div>
      
      {/* Mission section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-[#FAFAFA]/70 max-w-3xl mx-auto leading-relaxed font-serif">
            We aim to make philosophy accessible and engaging for everyone. Through thought-provoking articles, insightful discussions, and a community of passionate thinkers, we strive to illuminate the fundamental questions of existence.
          </p>
        </div>
      </div>
      
      {/* Team section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Meet the Team</h2>
          <p className="text-xl text-[#FAFAFA]/70 max-w-3xl mx-auto leading-relaxed font-serif">
            Our team is composed of passionate individuals dedicated to exploring and sharing the wonders of philosophy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-[#09090B]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6">
              {/* Team member image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Team member name and role */}
              <h3 className="text-2xl font-serif font-bold text-center mb-2">{member.name}</h3>
              <p className="text-[#FAFAFA]/70 text-center mb-4">{member.role}</p>
              
              {/* Team member bio */}
              <p className="text-[#FAFAFA]/70 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Join the Conversation</h2>
        <p className="text-xl text-[#FAFAFA]/70 max-w-3xl mx-auto leading-relaxed font-serif mb-8">
          Dive into the world of philosophy and explore the ideas that shape our understanding of the world.
        </p>
        <Button className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-8 py-6 text-lg shadow-lg font-medium">
          Explore Articles
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default About;