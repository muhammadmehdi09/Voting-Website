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
            <div class="card bg-white 2xl:w-80 w-72 py-6 rounded-xl hover:scale-125 hover:rounded-2xl duration-500 h-[22rem] mb-16 m-auto">
            <div class="w-52 mx-auto">
            <div class="w-32 mx-auto mb-3 max-h-60">${item.image}</div>
            <button class="p-1 flex" onclick="nameChanger(${index})">${item.name}<img src="./Images/edit.png" class="w-5 ml-2"/></button>
            </div>
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

function nameChanger(index) {
    name2  = prompt("Enter the new name")
    
    if (name2.length < 3) {
        alert("The length of the name should be greater then 2 charachters")
    }
    
    else if (people.some(data => data.name === name2)) {
        alert("Can not add the same name twice.")
    }
    
    else {
        people[index].name = name2
        dataExpresser()
    }
}

function deleter(index) {
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



    if (name.value.length < 3) {
        alert("The length of the name should be greater then 2 charachters")
    }

    else if (people.some(data => data.name === name.value)) {
        alert("Can not add the same name twice.")
    }

    else {
        people.push(data)
        dataExpresser()
    }
}

