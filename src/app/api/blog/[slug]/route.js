import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    const posts = await Post.findOne({ slug });
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("Failed to fetch posts!");
  }
};
