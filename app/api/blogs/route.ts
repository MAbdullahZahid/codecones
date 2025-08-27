
import { connectDB } from "../../db";
import Blog from "../../blog/blog.schema";

import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Ensure MongoDB is connected
connectDB();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Handle uploaded file
    const file = formData.get('pic');
    let picUrl = '';

    if (file && file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());

      // Ensure uploads folder exists
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.mkdir(uploadsDir, { recursive: true });

      // Save file
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadsDir, fileName);
      await fs.writeFile(filePath, buffer);

      picUrl = `/uploads/${fileName}`;
    }

    // Build blog object
    const data = {
      pic: picUrl,
      title: formData.get('title')?.toString() || '',
      timeToRead: formData.get('timeToRead')?.toString() || '',
      description: formData.get('description')?.toString() || '',
      authorPic: formData.get('authorPic')?.toString() || '',
      authorName: formData.get('authorName')?.toString() || '',
      content: formData.get('content')?.toString() || '',
    };

    const newBlog = new Blog(data);
    const savedBlog = await newBlog.save();

    return NextResponse.json(savedBlog, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error creating blog', details: err }, { status: 500 });
  }
}

// GET all blogs
export async function GET() {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Error fetching blogs', details: err }, { status: 500 });
  }
}
