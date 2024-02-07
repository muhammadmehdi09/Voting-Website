const memberInput = document.querySelector("#member")
const img1 = document.getElementById("img")
const container = document.querySelector("#container")

const images = []

// for (const iterator of object) {
    
//     img1.addEventListener("change", () => {
//         let reader = new FileReader();
//         reader.readAsDataURL(img1.files[0]);
//         reader.addEventListener("load", () => {
//           img2 = `<img src=${reader.result} alt=''/>`;
//         });
//       });
// }

img1.addEventListener("change", () => {
    let reader = new FileReader();
    reader.readAsDataURL(img1.files[0]);
    reader.addEventListener("load", () => {
      img2 = `<img src=${reader.result} alt=''/>`;
    });
  });

const membersData = []




const loopHandler = () => {
    container.innerHTML = ""
    let i = 0
    for (let item of membersData) {
        container.innerHTML +=
            `
            <div class="card bg-white 2xl:w-80 w-72 py-10 rounded-xl hover:scale-125 hover:rounded-2xl duration-500 h-[22rem] mb-16 m-auto">
            <div class="w-32 mx-auto mb-3" id="image">${item.image}</div>
            <p class="text-center">${item.name}</p>
            <div class="my-3 text-center">
                <span>${item.vote}</span>
                <span>VOTES</span>
            </div>
            <button onclick="voteHandler(${i})" class="bg-green-800 px-10 py-3 text-white font-semibold text-2xl hover:text-green-700 hover:bg-black duration-200 rounded-xl 2xl:ml-[97px] ml-[81px]">Vote</button>
            </br></br>
            </div>
             `
        i = i + 1
    }
}

const voteHandler = (index) => {
    console.log(index);
    console.log(membersData[index]);
    membersData[index].vote += 1
    loopHandler()
}


const submitHandler = () => {
    const member = {
        name: memberInput.value,
        image: img2,
        vote: 0
    }
    membersData.push(member)

    console.log(memberInput.value);
    console.log(membersData);
    memberInput.value = ""
    loopHandler()
}

loopHandler()

