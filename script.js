const linksSocialMedia = {
  youtube: "UCmNxFPYFJxUVZNsfVg-SRVg",
  instagram: "oeduardoaguiar",
  facebook: "maykbrito",
  twitter: "maykbrito",
  github: "eduardoaguiars"
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;

    alert(li.children[0].href);
  }
}

changeSocialMediaLinks();
