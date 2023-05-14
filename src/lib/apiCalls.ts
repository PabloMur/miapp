export const APISendEmail = async (email: any) => {
  try {
    const fetching = await fetch("https://send2.vercel.app/api/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
