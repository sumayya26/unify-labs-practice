let posts = [];

function loadPosts() {
  const container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p><strong>${post.category}</strong></p>
      <p>${post.content}</p>
      <button onclick="deletePost(${index})">Delete</button>
    `;

    container.appendChild(card);
  });
}

function createPost() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const content = document.getElementById("content").value;

  if (!title || !category || !content) {
    alert("Please fill all fields!");
    return;
  }

  posts.push({ title, category, content });

  document.getElementById("title").value = "";
  document.getElementById("category").value = "";
  document.getElementById("content").value = "";

  loadPosts();
}

function deletePost(index) {
  posts.splice(index, 1);
  loadPosts();
}