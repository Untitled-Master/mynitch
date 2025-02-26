import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Users, Sparkles, ArrowRight, Search, Calendar } from 'lucide-react';
import Nav from '../components/Nav';

const Article = () => {
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
      <Nav />
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">The Nature of</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Human Existence
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            In this article, we delve into the philosophical inquiry of what it means to exist as a human being. We explore the historical perspectives, contemporary debates, and the existential questions that have puzzled thinkers for centuries.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm mb-10">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-[#FAFAFA]/60" />
              <span className="text-[#FAFAFA]/60">February 26, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FAFAFA]/20 flex items-center justify-center overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4" alt="Author" className="w-full h-full object-cover" />
              </div>
              <span className="text-[#FAFAFA]/60">By axmed.</span>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Article content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert prose-lg text-[#FAFAFA]/80 font-serif">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p className="mb-6">
            The question of human existence has been a central theme in philosophy since its inception. From the ancient Greeks to modern existentialists, thinkers have sought to understand the nature of being, the purpose of life, and the essence of what it means to be human.
          </p>
          <p className="mb-6">
            In this article, we will explore the various philosophical perspectives on human existence, examining the contributions of key thinkers such as Socrates, Descartes, Nietzsche, and Sartre. We will also consider the implications of these ideas for our understanding of ourselves and our place in the world.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Historical Perspectives</h2>
          <p className="mb-6">
            The ancient Greeks were among the first to systematically explore the nature of human existence. Socrates, for example, famously declared that "the unexamined life is not worth living," emphasizing the importance of self-reflection and philosophical inquiry.
          </p>
          <p className="mb-6">
            Descartes, in the 17th century, introduced the concept of dualism, which posits that the mind and body are distinct substances. This idea has had a profound impact on Western philosophy and continues to influence contemporary debates about the nature of consciousness and the self.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Contemporary Debates</h2>
          <p className="mb-6">
            In the 20th century, existentialist philosophers such as Jean-Paul Sartre and Albert Camus grappled with the absurdity of human existence. Sartre argued that "existence precedes essence," meaning that humans first exist and then define themselves through their actions and choices.
          </p>
          <p className="mb-6">
            More recently, thinkers in the fields of cognitive science and artificial intelligence have begun to explore the nature of human consciousness and the possibility of creating machines that can think and feel. These developments raise profound questions about what it means to be human and the future of our species.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="mb-6">
            The nature of human existence remains one of the most profound and enduring questions in philosophy. As we continue to explore this question, we are reminded of the importance of self-reflection, critical thinking, and the pursuit of knowledge. By engaging with these ideas, we can gain a deeper understanding of ourselves and our place in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;