import { render } from '@czechitas/render';
import '../global.css';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/dorty/${id}`)
const json = await response.json()
const dorty = json.data

document.querySelector('#root').innerHTML = render(
    <>
      <h1>{dorty.name}</h1>
      <p>Cream: {dorty.cream}</p>
      <p>Price: {dorty.price}</p>
      <p>{dorty.image_url}</p>
    </>
);
