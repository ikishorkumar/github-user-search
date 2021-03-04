function searchUser() {
  let uname = document.getElementById("username").value;
  uname = uname.toLowerCase();
  const userdatalist = document.getElementById("userdatadiv");

  if (document.querySelector(".useritem")) {
    document.querySelector(".useritem").remove();
  }
  let getdata = fetch(`https://api.github.com/users/${uname}`)
    .then((response) => response.json())
    .then((data) => {
      const userdata = `
      <div class="useritem">
      <img src="${data.avatar_url}" alt="user image"/>
      <div>
          <h1>${data.name}</h1>
          <p> URL:  <a href="${data.html_url}" target="_blank">${data.login}</a></p>
          <p>${data.bio}</p>
          <h3>Followers : ${data.followers}</h3>
          <h4>Public Repositries : ${data.public_repos}</h4>
      </div>
    </div>
      `;

      userdatalist.insertAdjacentHTML("afterbegin", userdata);
    })
    .catch((err) => console.log(err));
}

document
  .getElementById("searchbtn")
  .addEventListener("click", () => searchUser());
