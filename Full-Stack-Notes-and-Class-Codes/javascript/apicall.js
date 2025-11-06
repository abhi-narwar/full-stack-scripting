//api call using async and await



async function getData() {
  console.log("Start")

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json()

    console.log("data:", data)
  } catch (error) {
    console.error("Error", error)
  }

  console.log("Req Complete");
}

getData()


 

