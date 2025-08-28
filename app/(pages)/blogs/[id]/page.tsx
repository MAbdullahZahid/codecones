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
      
     
      {/* Featured Image */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-8 overflow-hidden rounded-lg">
        <img 
          src={blog.pic} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
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