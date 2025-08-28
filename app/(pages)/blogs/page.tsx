import Image from "next/image";
import formatDate from "../../helper/dateFormatter";

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
  feature: boolean;
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
  // Pick the featured blog from DB instead of first item
  const featuredBlog = blogs.find((b) => b.feature) || null;
  const remainingBlogs = featuredBlog
    ? blogs.filter((b) => b._id !== featuredBlog._id)
    : blogs;

  return (
    <div className="min-h-screen bg-white">
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-6 md:py-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Codecones Blogs
          </h1>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-12 md:mb-16 border-b pb-8 md:pb-12">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Left Column - Blog Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-video md:aspect-[3/2] lg:aspect-video">
                  <Image
                    src={
                      featuredBlog.pic && featuredBlog.pic.startsWith("/")
                        ? featuredBlog.pic
                        : `/uploads/${featuredBlog.pic}`
                    }
                    alt={featuredBlog.title}
                    fill
                    className="w-full object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Right Column - Blog Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                {/* First Row - Category and Read Time */}
                <div className="mb-3 md:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                  <span className="inline-block px-3 py-1 text-[#003462] rounded-full text-xs sm:text-sm font-medium">
                    {featuredBlog.title}
                  </span>
                  <span className="sm:ml-3 text-gray-500 text-xs sm:text-sm">
                    {featuredBlog.timeToRead} to read
                  </span>
                </div>

                {/* Second Row - Title and Description */}
                <div className="mb-4 md:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    {featuredBlog.description}
                  </h2>
                </div>

                {/* Third Row - Author Information */}
                <div className="flex items-center">
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                      src={
                        featuredBlog.authorPic &&
                        featuredBlog.authorPic.startsWith("/")
                          ? featuredBlog.authorPic
                          : `/uploads/${featuredBlog.authorPic}`
                      }
                      alt={featuredBlog.authorName}
                      fill
                      className="rounded-full object-cover"
                      sizes="48px"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row ml-3 gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
                    <p className="text-[#A7A7A7] font-medium">
                      by <span className="text-[#FBAD18]">{featuredBlog.authorName}</span>
                    </p>
                    <p className="text-[#6A6A6A] font-medium">
                      Published: <span className="text-black">{formatDate(featuredBlog.publishDate)}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-12">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {remainingBlogs.map((blog) => {
              const blogPicPath =
                blog.pic && blog.pic.startsWith("/")
                  ? blog.pic
                  : `/uploads/${blog.pic}`;

              const authorPicPath =
                blog.authorPic && blog.authorPic.startsWith("/")
                  ? blog.authorPic
                  : blog.authorPic
                  ? `/uploads/${blog.authorPic}`
                  : "/uploads/default-author.png";

              return (
                <div
                  key={blog._id}
                  className="rounded-2xl sm:rounded-[24px] overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col"
                >
                  {blogPicPath && (
                    <div className="relative aspect-video">
                      <Image
                        src={blogPicPath}
                        alt={blog.title}
                        fill
                        className="w-full object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="p-4 sm:p-6 bg-[#F9F9F9] flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                      <span className="inline-block px-2 py-1 text-[#1C1C1C] rounded-full text-xs font-medium">
                        {blog.title}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full inline-block"></span>
                        <span>{blog.timeToRead} to read</span>
                      </div>
                    </div>

                    <h2 className="font-bold text-lg sm:text-xl mb-3 text-gray-900 line-clamp-2">
                      {blog.description}
                    </h2>

                    <div className="flex items-center mt-4">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                        <Image
                          src={authorPicPath}
                          alt={blog.authorName}
                          fill
                          className="rounded-full object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row ml-3 gap-1 sm:gap-3 text-xs">
                        <p className="text-[#A7A7A7] font-medium">
                          by <span className="text-[#FBAD18]">{blog.authorName}</span>
                        </p>
                        <p className="text-black font-medium">{formatDate(blog.publishDate)}</p>
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