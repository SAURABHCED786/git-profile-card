function filterData() {
   const searchInp = document.getElementById('searchUser').value;
   gitApiData();
   async function gitApiData() {
      //const gitUser = await fetch('https://api.github.com/users');
      //allUser = await gitUser.json();
      //allUser.forEach(userData => {
         //console.log(userData.login);
        // userData.login == searchInp || searchInp.includes(userData.login)
         if (searchInp) {
            //Show Profile popup
            document.getElementById('profile-card').style.display = 'block';
            singleGitUsers();
            async function singleGitUsers() {                             //userData.login
               const mainUser = await fetch(`https://api.github.com/users/${searchInp}`);
               singleUser = await mainUser.json();
               // Data Fromatting
               proPic = document.getElementById('proPic').src = singleUser.avatar_url;
               userName = document.getElementById('userName').innerHTML = singleUser.login;
               gitFollowers = document.getElementById('gitFollowers').innerHTML = singleUser.followers + ' Followers';
               gitFollowing = document.getElementById('gitFollowing').innerHTML = singleUser.following + ' Following';
               gitRepos = document.getElementById('gitRepos').innerHTML = singleUser.public_repos;
               gitName = singleUser.name;
               gitCompany = singleUser.company;
               gitLoacation = singleUser.location;
               gitMail = singleUser.email;
               gitBlog = singleUser.blog;
               gitTwitter = singleUser.twitter_username;
               showProfile(proPic, gitName, userName, gitFollowers, gitFollowing, gitRepos, gitCompany, gitLoacation, gitMail, gitBlog, gitTwitter);
            }
         }
      //});
   }
}

function showProfile(proPic, gitName, userName, gitFollowers, gitFollowing, gitRepos, gitCompany, gitLoacation, gitMail, gitBlog, gitTwitter) {
   window.localStorage.setItem("profilePic", proPic);
   window.localStorage.setItem("gitName", gitName);
   window.localStorage.setItem("userName", userName);
   window.localStorage.setItem("gitfollowers", gitFollowers);
   window.localStorage.setItem("gitfollowing", gitFollowing);
   window.localStorage.setItem("gitRepos", gitRepos);
   window.localStorage.setItem("gitCompany", gitCompany);
   window.localStorage.setItem("gitLocation", gitLoacation);
   window.localStorage.setItem("gitMail", gitMail);
   window.localStorage.setItem("gitBlog", gitBlog);
   window.localStorage.setItem("gitTwitter",gitTwitter);
};
