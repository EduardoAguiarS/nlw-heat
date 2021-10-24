const modal = document.querySelector("#modal");
const createBtn = document.querySelector("#create");

createBtn.addEventListener("click", event => {
  event.preventDefault();
  // Object social media users name
  const linksSocialMedia = {
    youtube: `${youtube.value}`,
    instagram: `${instagram.value}`,
    facebook: `${facebook.value}`,
    twitter: `${twitter.value}`,
    github: `${github.value}`
  };

  // Change social media links
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute("class");
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
  }

  changeSocialMediaLinks();

  // Get github profiles infos
  function getGitHubUserInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userAvatar.src = data.avatar_url;
        userLogin.textContent = data.login;
      });
  }

  getGitHubUserInfos();
  modal.classList.remove("active");
});

//Modal OpenClose
function openCloseModal() {
  const modalOpenBtn = document.querySelector("#openModalBtn");
  // Open Modal
  modalOpenBtn.addEventListener("click", event => {
    event.preventDefault();
    modal.classList.add("active");
  });
  // Close Modal
  const cancelar = document.querySelector("#cancelar");
  cancelar.addEventListener("click", event => {
    event.preventDefault();
    modal.classList.remove("active");
  });
}
openCloseModal();
