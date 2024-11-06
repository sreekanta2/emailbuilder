import { componentData } from "@/components/componentlistLibrary";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({
      message: "Main component ID is required",
      statusCode: 400,
    });
  }
  try {
    const mainComponent = componentData.find(
      (component) => component.id === id
    );

    if (!mainComponent) {
      return NextResponse.json({
        message: "Main component not found",
        statusCode: 404,
      });
    }

    // Returning the subcomponents for the selected main component
    return NextResponse.json({
      data: mainComponent.subcomponents,
      statusCode: 200,
      message: "Success",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error fetching subcomponents",
      statusCode: 500,
    });
  }
}
