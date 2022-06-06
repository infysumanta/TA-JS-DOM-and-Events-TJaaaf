let div = document.querySelector(".familyName");
let ul = document.querySelector("ul");
let search = document.querySelector("#search");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let family = got.houses.map((names) => names.name);
let activeFamily = "";

function createPeople(data = []) {
  ul.innerHTML = "";
  data.forEach((peoples) => {
    let li = document.createElement("li");
    li.classList.add("box");
    let div = document.createElement("div");
    div.classList.add("flex");
    let img = document.createElement("img");
    img.src = peoples.image;
    img.alt = peoples.name;
    let h2 = document.createElement("h2");
    h2.innerText = peoples.name;
    let p = document.createElement("p");
    p.innerText = peoples.description;
    div.append();
    let button = document.createElement("button");
    let a = document.createElement("a");
    a.innerText = "Know More!";
    a.href = peoples.wikiLink;
    button.append(a);
    li.append(img, h2, p, button);
    ul.append(li);
  });
}

function tagsUI(tag = []) {
  div.innerHTML = "";
  tag.forEach((names) => {
    let button = document.createElement("button");
    button.innerText = names;
    if (activeFamily === names) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      activeFamily = names;
      let filteredFamily =
        got.houses.find((house) => house.name === names).people || [];
      createPeople(filteredFamily);
      tagsUI(family);
    });
    div.append(button);
  });
}

function handleSearch(event) {
  let searchText = event.target.value;
  let searchPeople = allPeople.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createPeople(searchPeople);
}

search.addEventListener("keyup", handleSearch);
createPeople(allPeople);
tagsUI(family);
