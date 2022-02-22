export const post = async (request) => {
  //get this using prefill link
  
  
  const name = request.body.get("name");
  const email = request.body.get("email");

  const res =
    await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSd_oyNa67MD50ZVKBtvzc8CBw2TgWqBzQiv6EJdRk-iFyU4aQ/formResponse?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&submit=Submit`);

  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: "success",
      },
    };
  } else {
    return {
      status: 404,
      body: {
        message: "failed",
      },
    };
  }
};