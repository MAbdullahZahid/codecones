import Image from "next/image";

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
  category?: string;
}

export default async function BlogPage() {
  let blogs: Blog[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });
    blogs = await res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  // Get the first blog as the featured post
  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  // Get the remaining blogs for the grid
  const remainingBlogs = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div className="min-h-screen bg-white">
    
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Codecones Blogs</h1>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-16 border-b pb-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Blog Image */}
              <div className="md:w-1/2">
                <Image
                  src={featuredBlog.pic && featuredBlog.pic.startsWith("/")
                    ? featuredBlog.pic
                    : `/uploads/${featuredBlog.pic}`}
                  alt={featuredBlog.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Right Column - Blog Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                {/* First Row - Category and Read Time */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-[#003462] rounded-full text-sm font-medium">
                    {featuredBlog.title}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">{featuredBlog.timeToRead} to read</span>
                </div>
                
                {/* Second Row - Title and Description */}
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredBlog.description}
                  </h2>
                  
               
                </div>
                
                {/* Third Row - Author Information */}
                <div className="flex items-center">
                  <Image
                    src={featuredBlog.authorPic && featuredBlog.authorPic.startsWith("/") 
                      ? featuredBlog.authorPic 
                      : `/uploads/${featuredBlog.authorPic}`}
                    alt={featuredBlog.authorName}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">by {featuredBlog.authorName}</p>
                    <p className="text-gray-500 text-sm">Published Date: {featuredBlog.publishDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-12">
        
          
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {remainingBlogs.map((blog) => {
              const blogPicPath = blog.pic && blog.pic.startsWith("/")
                ? blog.pic
                : `/uploads/${blog.pic}`;

              const authorPicPath = blog.authorPic && blog.authorPic.startsWith("/")
                ? blog.authorPic
                : blog.authorPic
                ? `/uploads/${blog.authorPic}`
                : "/uploads/default-author.png";

              return (
                <div
                  key={blog._id}
                  className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
                >
                  {blogPicPath && (
                    <Image
                      src={blogPicPath}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {blog.category || "UIUX"}
                      </span>
                      <span className="text-gray-500 text-sm">{blog.timeToRead}</span>
                    </div>
                    
                    <h2 className="font-bold text-xl mb-3 text-gray-900">{blog.title}</h2>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{blog.description}</p>

                    <div className="flex items-center mt-4">
                      <Image
                        src={authorPicPath}
                        alt={blog.authorName}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{blog.authorName}</p>
                        <p className="text-xs text-gray-500">{blog.publishDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}