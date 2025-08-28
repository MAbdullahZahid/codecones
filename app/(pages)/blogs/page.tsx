import Navbar from "../../components/navbar";
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
}

export default async function BlogPage() {
  let blogs: Blog[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store", // ensures fresh SSR-like fetch
    });
    blogs = await res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <div>
      <Navbar />
      <section className="p-6 md:p-12 max-w-7xl mx-auto">
        <h1 className="text-[40px] font-bold mb-8">Codecones Blogs</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            // Normalize blog image path
            const blogPicPath = blog.pic && blog.pic.startsWith("/")
              ? blog.pic
              : `/uploads/${blog.pic}`;

            // Normalize author image path with fallback
            const authorPicPath =
              blog.authorPic && blog.authorPic.startsWith("/")
                ? blog.authorPic
                : blog.authorPic
                ? `/uploads/${blog.authorPic}`
                : "/uploads/default-author.png"; // fallback image

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
                    className="w-full object-cover rounded-lg"
                  />
                )}

                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">{blog.title}</h2>
                  <p className="text-gray-700 text-sm">{blog.description}</p>

                  <div className="flex items-center mt-4">
                    <Image
                      src={authorPicPath}
                      alt={blog.authorName}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      {blog.authorName} • {blog.timeToRead} read
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
