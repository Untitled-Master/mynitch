// src/components/ArticlesList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Nav from '../components/Nav';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://mynitchbackend-production.up.railway.app/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B]/90 z-10" />
          <img 
            src="https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg" 
            alt="Philosophy Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 flex items-center justify-center min-h-screen">
          <p className="text-xl text-[#FAFAFA]/70">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B]/90 z-10" />
          <img 
            src="https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg" 
            alt="Philosophy Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 flex items-center justify-center min-h-screen">
          <p className="text-xl text-[#FAFAFA]/70">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B]/90 z-10" />
        <img 
          src="https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg" 
          alt="Philosophy Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAFAFA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAFAFA]/5 rounded-full blur-3xl"></div>
      
      <Nav />
      
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
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-[#09090B]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold mb-2">{article.title}</h2>
                  <p className="text-[#FAFAFA]/70 mb-4">{article.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-[#FAFAFA]/60">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img 
                        src={article.authorImage || "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4"} 
                        alt={article.author} 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>By {article.author}</span>
                    </div>
                  </div>
                </div>
                
                <Link to={`/articles/${article.id}`}>
                  <Button className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-6 py-4 text-lg shadow-lg font-medium">
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;