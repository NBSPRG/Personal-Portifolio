import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface BlogPostType {
  id: string;
  title: string;
  content: string;
  created_at: string;
  tags: string[];
}

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h2>
        
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;