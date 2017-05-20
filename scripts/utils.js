var placeholder_json = [
  {
    text: "Renovated Homes",
    img: "./assets/images/img1.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 2",
    img: "./assets/images/img2.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 3",
    img: "./assets/images/img3.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 4",
    img: "./assets/images/img4.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 5",
    img: "./assets/images/img2.jpg",
    url: "#"
  }
]

var unique_id = function (context) {
  var str = Math.random().toString(36).substring(7) + Math.random().toString().replace(/\./g, '')
  if (context) {
    context.unique_id = str
  } else {
    return str
  }
}