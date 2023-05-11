export const APISendEmail = async () => {
  try {
    const fetching = await fetch("https://send2.vercel.app/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "hola",
        name: "Poli",
        email: "polillomurillo@gmail.com",
        subject: "test",
      }),
    });
    const response = await fetching.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
