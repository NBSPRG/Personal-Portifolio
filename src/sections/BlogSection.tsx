import React, { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import BlogPost, { BlogPostType } from '../components/BlogPost';
import AnimatedElement from '../components/AnimatedElement';
import { supabase } from '../lib/supabase';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Blog" 
          subtitle="Technical articles and insights from my experience" 
        />
        
        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-400">
            Loading posts...
          </div>
        ) : posts.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            {posts.map((post, index) => (
              <AnimatedElement key={post.id} delay={index * 100}>
                <BlogPost post={post} />
              </AnimatedElement>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No blog posts yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;