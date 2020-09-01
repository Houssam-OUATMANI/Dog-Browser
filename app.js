const API_URI = "https://dog.ceo/api/breeds/image/random/50";
const cardHolder = document.querySelector(".card-holder");
const spinner = document.querySelector(".spinner-border")


async function getDogs() {

  spinner.style.display = ''  
  cardHolder.innerHTML = "";
  const response = await fetch(API_URI);
  const data = await response.json();

  data.message.map(
    (dog) =>
      (cardHolder.innerHTML += `
    <div class="card" style="width: 20%;">
        <img src="${dog}" class="card-img-top" alt="Beautiful Dog">
    </div>
    `)
  );

  spinner.style.display = 'none'
}

getDogs();
