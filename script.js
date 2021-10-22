// Object social media users name
const linksSocialMedia = {
  youtube: "UCmNxFPYFJxUVZNsfVg-SRVg",
  instagram: "oeduardoaguiar",
  facebook: "maykbrito",
  twitter: "maykbrito",
  github: "eduardoaguiars"
};

// Change social media links
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    if (social === "youtube") {
      li.children[0].href = `https://${social}.com/channel/${linksSocialMedia[social]}`;
    } else {
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
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
