const usersPage1 = [
  { id: 1, first_name: "John", last_name: "Doe", email: "john.doe@mail.com", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, first_name: "Alice", last_name: "Smith", email: "alice.smith@mail.com", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, first_name: "Bob", last_name: "Johnson", email: "bob.johnson@mail.com", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, first_name: "Mary", last_name: "Brown", email: "mary.brown@mail.com", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, first_name: "David", last_name: "Wilson", email: "david.wilson@mail.com", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, first_name: "Linda", last_name: "Taylor", email: "linda.taylor@mail.com", avatar: "https://i.pravatar.cc/150?img=6" }
];

const usersPage2 = [
  { id: 7, first_name: "James", last_name: "Anderson", email: "james.anderson@mail.com", avatar: "https://i.pravatar.cc/150?img=7" },
  { id: 8, first_name: "Patricia", last_name: "Thomas", email: "patricia.thomas@mail.com", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 9, first_name: "Robert", last_name: "Jackson", email: "robert.jackson@mail.com", avatar: "https://i.pravatar.cc/150?img=9" },
  { id: 10, first_name: "Jennifer", last_name: "White", email: "jennifer.white@mail.com", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 11, first_name: "Michael", last_name: "Harris", email: "michael.harris@mail.com", avatar: "https://i.pravatar.cc/150?img=11" },
  { id: 12, first_name: "Elizabeth", last_name: "Martin", email: "elizabeth.martin@mail.com", avatar: "https://i.pravatar.cc/150?img=12" }
];

let currentPage = 1;

function loadUsers(page = 1, sortBy = "first_name") {
  currentPage = page;
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  const users = (page === 1 ? [...usersPage1] : [...usersPage2])
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  users.forEach(user => {
    const li = document.createElement("li");
    li.dataset.id = user.id;

    li.innerHTML = `
      <span>
        <span class="name">${user.first_name}</span> 
        <span class="surname">${user.last_name}</span>
      </span>
      <button class="deleteBtn">Delete</button>
    `;

    userList.appendChild(li);
  });
}

function showUserDetails(userId) {
  const allUsers = [...usersPage1, ...usersPage2];
  const user = allUsers.find(u => u.id == userId);
  const detailsDiv = document.getElementById("userDetails");

  if (user) {
    detailsDiv.innerHTML = `
      <img src="${user.avatar}" width="100" height="100" alt="${user.first_name}">
      <p><strong>Name:</strong> ${user.first_name}</p>
      <p><strong>Surname:</strong> ${user.last_name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
  }
}

function setup() {
  const userList = document.getElementById("userList");

  document.getElementById("page1").addEventListener("click", () => {
    const sortBy = document.getElementById("sortSelect").value;
    loadUsers(1, sortBy);
  });
  document.getElementById("page2").addEventListener("click", () => {
    const sortBy = document.getElementById("sortSelect").value;
    loadUsers(2, sortBy);
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    loadUsers(currentPage, e.target.value);
  });

  userList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const userId = li.dataset.id;

    if (e.target.classList.contains("deleteBtn")) {
      li.remove();
      return;
    }

    showUserDetails(userId);
  });

  loadUsers(1); 
}

document.addEventListener("DOMContentLoaded", setup);






