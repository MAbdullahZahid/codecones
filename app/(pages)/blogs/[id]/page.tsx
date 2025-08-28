import formatDate from "@/app/helper/dateFormatter";

interface Blog {
  _id: string;
  title: string;
  description: string;
  pic: string;
  timeToRead: string;
  authorPic: string;
  authorName: string;
  publishDate: string;
  content: string;
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`, {
    cache: "no-store" // SSR: always fresh data
  });

  const blog: Blog = await res.json();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mt-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-medium text-[#003462] leading-tight">
          {blog.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 whitespace-nowrap">
          {blog.timeToRead} to read
        </p>
      </div>
      
      {/* Author Info */}
     
     
      {/* Featured Image */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-8 overflow-hidden rounded-lg">
        <img 
          src={blog.pic} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
      </div>

       <div className="flex items-center gap-3 mb-6">
        <img 
          src={blog.authorPic} 
          alt={blog.authorName} 
          className="w-10 h-10 rounded-full object-cover" 
        />
        <div>
          <p className="font-medium text-gray-500">by <span className="text-[#FBAD18]">{blog.authorName}</span></p>
          <p className="text-sm text-gray-500">Published Date: <span className="text-black">{formatDate(blog.publishDate)}</span></p>
        </div>
      </div>
      
      {/* Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    </article>
  );
}