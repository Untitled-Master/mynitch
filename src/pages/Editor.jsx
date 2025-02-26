import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Button } from '@/components/ui/button';
import { ArrowRight, Save, Tag, BookOpen } from 'lucide-react';
import Nav from '../components/Nav';
import { db, auth } from '../firebase'; // Import Firebase
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'; // Auth functions

const Editor = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [user, setUser] = useState(null); // Track authenticated user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // User is signed out
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Handle login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please check your email and password.');
    }
  };

  // Handle signup
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signed up successfully!');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up. Please try again.');
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  // Handle publishing
  const handlePublish = async () => {
    if (!user) {
      alert('Please log in to publish a paper.');
      return;
    }

    if (!title || !description || !content) {
      alert('Please fill in all fields before publishing.');
      return;
    }

    try {
      // Save the paper to Firestore
      const docRef = await addDoc(collection(db, 'papers'), {
        title,
        description,
        content,
        tags: tags.split(',').map(tag => tag.trim()), // Convert tags string to array
        author: user.displayName,
        authorImage: user.photoURL, // Save the author's email
        createdAt: new Date(),
      });

      console.log('Paper published with ID:', docRef.id);
      alert('Paper published successfully!');

      // Clear the form
      setTitle('');
      setDescription('');
      setContent('');
      setTags('');
    } catch (error) {
      console.error('Error publishing paper:', error);
      alert('Failed to publish paper. Please try again.');
    }
  };

  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
      {/* Background image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B]/90 z-10" />
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {user ? (
          <div className="bg-[#09090B]/50 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-serif font-bold mb-8">Write and Publish Your Paper</h1>
            
            {/* Title input */}
            <div className="mb-8">
              <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the title of your paper"
                className="w-full bg-[#09090B]/20 backdrop-blur-sm rounded-lg border border-[#FAFAFA]/10 px-4 py-3 text-[#FAFAFA] placeholder:text-[#FAFAFA]/50 focus:outline-none focus:border-[#FAFAFA]/30"
              />
            </div>
            
            {/* Description input */}
            <div className="mb-8">
              <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a brief description of your paper"
                className="w-full bg-[#09090B]/20 backdrop-blur-sm rounded-lg border border-[#FAFAFA]/10 px-4 py-3 text-[#FAFAFA] placeholder:text-[#FAFAFA]/50 focus:outline-none focus:border-[#FAFAFA]/30"
                rows={4}
              />
            </div>
            
            {/* Tags input */}
            <div className="mb-8">
              <label htmlFor="tags" className="block text-lg font-medium mb-2">Tags</label>
              <div className="flex items-center bg-[#09090B]/20 backdrop-blur-sm rounded-lg border border-[#FAFAFA]/10 px-4 py-3">
                <Tag className="h-5 w-5 text-[#FAFAFA]/50" />
                <input
                  type="text"
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Enter tags (comma-separated)"
                  className="flex-1 bg-transparent border-none outline-none text-[#FAFAFA] placeholder:text-[#FAFAFA]/50 ml-4"
                />
              </div>
            </div>
            
            {/* Rich text editor */}
            <div className="mb-8">
              <label htmlFor="content" className="block text-lg font-medium mb-2">Content</label>
              <div className="bg-[#09090B]/20 backdrop-blur-sm rounded-lg border border-[#FAFAFA]/10 p-4">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  placeholder="Write your paper here..."
                  className="text-[#FAFAFA]"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['link', 'image'],
                      ['clean'],
                    ],
                  }}
                />
              </div>
            </div>
            
            {/* Publish button */}
            <div className="flex justify-end">
              <Button
                onClick={handlePublish}
                className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-8 py-6 text-lg shadow-lg font-medium"
              >
                Publish Paper
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-[#09090B]/50 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-serif font-bold mb-8">Login or Signup</h1>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-[#09090B]/20 backdrop-blur-sm rounded-lg border border-[#FAFAFA]/10 px-4 py-3 text-[#FAFAFA] placeholder:text-[#FAFAFA]/50 focus:outline-none focus:border-[#FAFAFA]/30"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#09090B]/20 backdrop-blur-sm rounded-lg border border-[#FAFAFA]/10 px-4 py-3 text-[#FAFAFA] placeholder:text-[#FAFAFA]/50 focus:outline-none focus:border-[#FAFAFA]/30"
              />
              <Button
                onClick={isLogin ? handleLogin : handleSignup}
                className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-8 py-6 text-lg shadow-lg font-medium w-full"
              >
                {isLogin ? 'Login' : 'Signup'}
              </Button>
              <Button
                onClick={() => setIsLogin(!isLogin)}
                className="bg-transparent text-[#FAFAFA] hover:bg-[#FAFAFA]/10 px-8 py-6 text-lg shadow-lg font-medium w-full"
              >
                {isLogin ? 'Switch to Signup' : 'Switch to Login'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;