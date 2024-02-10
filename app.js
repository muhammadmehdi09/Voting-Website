const name = document.getElementById("name1")
const image = document.getElementById("img")
const cards = document.getElementById("cards")

image.addEventListener("change", () => {
    let reader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    reader.addEventListener("load", () => {
        image2 = `<img src=${reader.result} alt=''/>`;
    });
});

const people = []


function dataExpresser() {
    cards.innerHTML = ""
    let index = 0
    for (let item of people) {
        cards.innerHTML +=
            `
            <div class="card bg-white 2xl:w-80 w-72 py-10 rounded-xl hover:scale-125 hover:rounded-2xl duration-500 h-[22rem] mb-16 m-auto">
            <div class="w-32 mx-auto mb-3">${item.image}</div>
            <p class="text-center">${item.name}</p>
            <div class="my-3 text-center">${item.vote} VOTES</div>
            <div class="flex 2xl:px-14 px-10">
            <button onclick="voteIncreaser(${index})"
                class="bg-green-800 px-10 py-3 text-white font-semibold text-2xl hover:text-green-700 hover:bg-black duration-200 rounded-xl">Vote</button>
            <button onclick="deleter(${index})" class="bg-green-800 px-2 py-2 rounded-xl ml-3 w-14 h-14 px-auto"><img src="./Images/delete.png"
                    class="w-9 mx-auto"></button>
        </div>
            </div>
             `
        index = index + 1
    }
}

function deleter(index){
    people.splice(index, 1)
    dataExpresser()
}


function voteIncreaser(index) {
    people[index].vote += 1
    dataExpresser()
}


function formSubmiter() {
    const data = {
        name: name.value,
        image: image2,
        vote: 0
    }

 if (people.some(data => data.name === name.value)) {
        alert("Can't add the same member twice.");
        return;
    }
  else{
    people.push(data)
    dataExpresser()
  }
}
dataExpresser()

