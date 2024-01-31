import { NextResponse } from "next/server";

const getData = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const response = data.json();
  return response;
};

export const GET = async (request) => {
  try {
    const products = await getData();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
