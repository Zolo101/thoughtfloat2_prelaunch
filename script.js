const root = document.querySelector(":root");
const size = 200;
const gridX = 10;
const gridY = 10;
const text = "2022? 😭😭"
const otherText = Array(1000000).fill(".").join("")
const faces = ["front", "back", "right", "left", "top", "bottom"];
root.style.setProperty("--size", size + "px");

const createCubeRow = (amount) => {
    const container = document.createElement("div");
    for (let i = 0; i < amount; i++) {
        container.appendChild(createCube(text))
    }

    return container;
}

const createCube = (text) => {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    // cube.style.setProperty("--size", size + "px");

    for (const face of faces) {
        const faceElement = document.createElement("div");
        faceElement.classList.add("face");
        faceElement.classList.add(face);
        if (face === "front") {
            faceElement.innerHTML = text;
        }
        if (face === "bottom") {
            const spanElement = document.createElement("span");
            spanElement.innerHTML = otherText;
            faceElement.appendChild(spanElement);
        }
        cube.appendChild(faceElement);
    }

    return cube;
}

// for (let i = 0; i < gridY; i++) {
//     document.querySelector(".grid").appendChild(createCubeRow(gridX));
// }

document.querySelector(".grid").appendChild(createCube(text));

window.addEventListener("mousemove", (e) => {
    root.style.setProperty("--positionX", `${e.x - (size / 2)}px`);
    root.style.setProperty("--positionY", `${e.y - (size / 2)}px`);
})