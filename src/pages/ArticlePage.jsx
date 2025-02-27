// src/pages/ArticlePage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Nav from '../components/Nav';
import DOMPurify from 'dompurify'; // Import DOMPurify
import { db } from '../firebase'; // Import Firebase
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Get document from Firestore instead of API
        const docRef = doc(db, 'papers', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          // Convert Firestore document to article format
          const data = {
            id: docSnap.id,
            ...docSnap.data(),
            // Handle Firestore Timestamp conversion
            createdAt: docSnap.data().createdAt?.toDate?.() || new Date(),
          };
          setArticle(data);
        } else {
          throw new Error('Article not found');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
        <Nav />
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-5xl mx-auto w-full">
            {/* Back button skeleton */}
            <div className="w-40 h-12 bg-[#FAFAFA]/10 rounded-lg mb-6 animate-pulse" />
            
            {/* Title skeleton */}
            <div className="w-3/4 h-12 bg-[#FAFAFA]/10 rounded-lg mb-4 mx-auto animate-pulse" />
            <div className="w-1/2 h-12 bg-[#FAFAFA]/10 rounded-lg mb-8 mx-auto animate-pulse" />
            
            {/* Meta info skeleton */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="w-32 h-6 bg-[#FAFAFA]/10 rounded-lg animate-pulse" />
              <div className="w-32 h-6 bg-[#FAFAFA]/10 rounded-lg animate-pulse" />
            </div>
            
            {/* Content skeleton */}
            <div className="space-y-4">
              <div className="w-full h-4 bg-[#FAFAFA]/10 rounded animate-pulse" />
              <div className="w-full h-4 bg-[#FAFAFA]/10 rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-[#FAFAFA]/10 rounded animate-pulse" />
              <div className="w-full h-4 bg-[#FAFAFA]/10 rounded animate-pulse" />
              <div className="w-5/6 h-4 bg-[#FAFAFA]/10 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
        <Nav />
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Error Loading Article</h2>
              <p className="text-lg">{error}</p>
              <Link to="/articles">
                <Button className="mt-6 bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-6 py-4 text-lg shadow-lg font-medium">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Return to Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
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
        <div className="max-w-5xl mx-auto">
          <Link to="/articles">
            <Button 
              className="mb-6 bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-6 py-4 text-lg shadow-lg font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Articles 
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
              {article.description}
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-[#FAFAFA]/60 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.createdAt instanceof Date ? article.createdAt.toLocaleDateString() : 'Date unavailable'}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <img 
                  src={article.authorImage || "https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4"} 
                  alt={article.authorName || article.authorEmail} 
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>By {article.authorName || article.authorEmail || 'Anonymous'}</span>
              </div>
            </div>
            
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-[#FAFAFA]/10 rounded-full text-sm flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Render sanitized HTML content */}
          <div 
            className="text-[#FAFAFA]/90 text-lg leading-relaxed font-serif prose prose-invert max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;