import { connectDB } from "../../../db";
import Blog from "../../../blog/blog.schema";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json(
      { error: "Error fetching blog", details: err },
      { status: 500 }
    );
  }
}
