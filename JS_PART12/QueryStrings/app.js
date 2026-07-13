let url = "http://universities.hipolabs.com/search?name=";

let ul = document.querySelector("#list");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = inp.value;
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    ul.innerText = "";
    for (col of colArr) {
        let li = document.createElement("li");
        console.log(col.name);
        li.textContent = col.name;
        ul.appendChild(li);
    }
}

async function getColleges(countryName) {
    try {
        let res = await axios.get(url + countryName);
        console.log(res);
        return res.data;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
