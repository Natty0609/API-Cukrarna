import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/studenti")
const json = await response.json()
const dorty = json.data

const handleMovie = async () => {
  const dorty = {
    name: "Kokoska",
    cream: "coconut-cream",
    price: "700Kč",
    image_url: "http: //denikmalepozitkarky.cz/wp-content/uploads/IMG_2758-1140x760.jpg"
  }

  await fetch("http://localhost:4000/api/studenti", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dorty)
  })

  window.location.reload()
}

document.querySelector('#root').innerHTML = render(
  <>
    {
      dorty.map((item) => (
        <div key={item.id}><a href={`dorty.html?id=${item.id}`}>{item.name} - {item.cream} - {item.price} - {item.image_url}</a></div>
      ))
    }

    <button id="addMovie">Pridej film</button>
  </>
);

document.querySelector("#addMovie").addEventListener("click", handleMovie)