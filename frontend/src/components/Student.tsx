import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Heart, Share2, MoreHorizontal, Smile, Image, Link } from "lucide-react";

type Post = {
  id: string;
  author: string;
  avatar: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  timestamp: string;
  liked: boolean;
};

const StudentWall: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: "Alex Chen",
      avatar: "AC",
      content: "Just completed Day 10 of my DSA challenge! Implemented Dijkstra's algorithm from scratch 💪 #DSA #Algorithms",
      tags: ["#DSA", "#Algorithms"],
      likes: 24,
      comments: 5,
      timestamp: "2h ago",
      liked: false
    },
    {
      id: "2",
      author: "Priya Patel",
      avatar: "PP",
      content: "Got my first internship offer from Google! 🎉 All those late night study sessions paid off #PlacementPrep #Success",
      tags: ["#PlacementPrep", "#Success"],
      likes: 56,
      comments: 12,
      timestamp: "5h ago",
      liked: true
    },
    {
      id: "3",
      author: "Jordan Smith",
      avatar: "JS",
      content: "Struggling with React hooks. Any good resources for understanding useEffect dependencies? #WebDev #React",
      tags: ["#WebDev", "#React"],
      likes: 8,
      comments: 14,
      timestamp: "1d ago",
      liked: false
    }
  ]);

  const [newPost, setNewPost] = useState("");
  const [newTags, setNewTags] = useState("");

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newPostObj: Post = {
      id: Date.now().toString(),
      author: "You",
      avatar: "YO",
      content: newPost,
      tags: newTags.split(",").map(tag => tag.trim()).filter(Boolean),
      likes: 0,
      comments: 0,
      timestamp: "Just now",
      liked: false
    };

    setPosts([newPostObj, ...posts]);
    setNewPost("");
    setNewTags("");
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
            Student Wall
          </h1>
          <p className="text-gray-400">
            Share your progress, ask questions, and celebrate wins with your peers
          </p>
        </motion.div>

        {/* Create Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-md border border-gray-700/30 rounded-xl shadow-lg mb-8 overflow-hidden"
        >
          <form onSubmit={handleSubmit}>
            <div className="p-5">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What did you learn today? Share your progress..."
                className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none min-h-[100px]"
                rows={3}
              />
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="#tags (comma separated)"
                  className="flex-1 bg-gray-800/50 text-sm text-white px-3 py-1.5 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex items-center gap-2">
                  <button type="button" className="p-2 text-gray-400 hover:text-blue-400 rounded-full hover:bg-gray-800">
                    <Image size={18} />
                  </button>
                  <button type="button" className="p-2 text-gray-400 hover:text-blue-400 rounded-full hover:bg-gray-800">
                    <Link size={18} />
                  </button>
                  <button type="button" className="p-2 text-gray-400 hover:text-blue-400 rounded-full hover:bg-gray-800">
                    <Smile size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 px-5 py-3 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!newPost.trim()}
                className={`px-4 py-2 rounded-lg font-medium ${newPost.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 cursor-not-allowed'}`}
              >
                Post Update
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Posts Feed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <AnimatePresence>
            {posts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-700/30 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-5">
                  {/* Post Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-medium">
                      {post.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium">{post.author}</h3>
                      <p className="text-xs text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="whitespace-pre-line">{post.content}</p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1 ${post.liked ? 'text-red-500' : 'text-gray-400'}`}
                    >
                      <Heart size={18} fill={post.liked ? 'currentColor' : 'none'} />
                      <span>{post.likes}</span>
                    </motion.button>
                    
                    <button className="flex items-center gap-1 text-gray-400">
                      <MessageSquare size={18} />
                      <span>{post.comments}</span>
                    </button>
                    
                    <button className="text-gray-400">
                      <Share2 size={18} />
                    </button>
                    
                    <button className="text-gray-400">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default StudentWall;