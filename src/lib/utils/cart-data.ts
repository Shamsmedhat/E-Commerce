import { getCartAction } from "../actions/cart-actions";

export async function getCartData() {
  try {
    // Call the action function to get the response from the server
    const { data, status } = await getCartAction();

    // validation of the data
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data received");
    }
    // Return the validated data
    return data;

    // handle error
  } catch (error) {
    console.error("Error in getCartData:", error);
    throw new Error(`Data retrieval error: ${error}`);
  }
}
