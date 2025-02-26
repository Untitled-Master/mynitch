// src/pages/ArticlePage.jsx
import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Nav from '../components/Nav';
import DOMPurify from 'dompurify'; // Import DOMPurify

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://mynitchbackend-production.up.railway.app/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(article.content);

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
          <a href="/articles">
          <Button 
            as={Link}
            to="/articles"
            className="mb-6 bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-6 py-4 text-lg shadow-lg font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Articles 
          </Button>
          </a>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-[#FAFAFA]/60 mb-8">
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
          
          {/* Render sanitized HTML content */}
          <div 
            className="text-left text-[#FAFAFA]/70 text-lg leading-relaxed font-serif prose prose-invert"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;