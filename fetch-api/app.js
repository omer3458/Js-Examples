const data = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/todos/1/comments")
  .then((response) => response.json())
  .then((responseJson) =>
    responseJson.forEach((element) => {
      let liDom = document.createElement("li");
      liDom.innerHTML = element.name;
      data.appendChild(liDom);
    })
  );
