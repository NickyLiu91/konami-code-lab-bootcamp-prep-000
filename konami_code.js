// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// var index = 0

// const body = document.body

// function init() {
//   body.addEventListener('keydown', function(e) {
//     const key = parseInt(e.detail || e.which)

//     if (key === code[index]) {

//       if (index === code.length - 1) {
//         alert("YOU DID IT!")
//         index = 0
//       } else {
//         index++
//       }
//     } else {
//       index = 0
//     }
//   })
// }


const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
 
function init() {
  document.body.addEventListener('keydown', function(e))
}