"use server";

import getAuthorizationHeader from "./get-authorization-header";

export async function addImage(data: FormData | undefined) {
  console.log("data", data);
  if (!data) {
    console.log("NO cover uploaded");
    return;
  }

  try {
    const res = await fetch(
      "https://e-commerce.thelanerealestate.com/v1/upload/single",
      {
        method: "POST",
        headers: {
          ...(await getAuthorizationHeader()),
        },
        body: data,
      },
    );

    if (!res.ok) {
      console.log("res", res);
      throw new Error("Something went wrong during image upload");
    }

    const payload = await res.json();
    console.log("payload", payload);
    return payload;
  } catch (error) {
    console.error("Error during image upload", error);
    throw error;
  }
}
