export const APISendEmail = async (email: any) => {
  try {
    const fetching = await fetch("https://miapp-inky.vercel.app/api/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const response = await fetching.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
