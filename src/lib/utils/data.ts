import { getCategoriesAction } from "../actions/categories-actions";

export async function getCategoriesData() {
  try {
    // Call the action function to get the response from the server
    const { data, status } = await getCategoriesAction();

    // validation of the data
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data received");
    }
    // Return the validated data
    return data;

    // handle error
  } catch (error) {
    console.error("Error in getCategoriesData:", error);
    throw new Error(`Data retrieval error: ${error}`);
  }
}
