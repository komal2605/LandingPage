import { NextResponse } from "next/server";

const getDataByID = async (id) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const response = data.json();
  return response;
};

export const GET = async (request, { params }) => {
  const { productId } = params;
  try {
    const product = await getDataByID(productId);
    return NextResponse.json(product);
  } catch (error) {
    console.log("failed to getuser", error.message);
  }
};
