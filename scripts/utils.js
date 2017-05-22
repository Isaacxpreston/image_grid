var append_indexes = function (arr) {
  var ind = -1
  return arr.map(function(obj) {
    ind++
    return {
      text: obj.text,
      img: obj.img,
      url: obj.url,
      index: ind
    }
  })
}

var unique_id = function (context) {
  var str = Math.random().toString(36).substring(7) + Math.random().toString().replace(/\./g, '')
  if (context) {
    context.unique_id = str
  } else {
    return str
  }
}

var placeholder_json = append_indexes([
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
  },
  {
    text: "Renovated Homes 6",
    img: "./assets/images/img1.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 7",
    img: "./assets/images/img2.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 8",
    img: "./assets/images/img3.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 9",
    img: "./assets/images/img4.jpg",
    url: "#"
  },
  {
    text: "Renovated Homes 10",
    img: "./assets/images/img2.jpg",
    url: "#"
  }
])