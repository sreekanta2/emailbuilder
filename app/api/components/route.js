import { componentData } from "@/components/componentlistLibrary";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Extracting only the necessary part of the component data
    const mainComponents = componentData.map((component) => ({
      id: component.id,
      componentInfo: component.componentInfo,
    }));

    // Returning the response with the mainComponents directly
    return NextResponse.json({
      data: mainComponents, // Ensure that the response contains the 'data' key
      statusCode: 200,
      message: "Success",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error fetching components",
      statusCode: 500,
    });
  }
}
