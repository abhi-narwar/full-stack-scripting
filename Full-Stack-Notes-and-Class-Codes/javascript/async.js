//async and await


console.log("Begin");
async function getData() {
  console.log(1)
  console.log("code in running ststaus")

  await new Promise(resolve => setTimeout(resolve, 5000))
  console.log("waiting here")
  console.log("2")
}

getData()
console.log("End")
