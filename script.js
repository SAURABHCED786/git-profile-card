     
var proPic;
var userName;
var gitFollowers;
var gitFollowing;
var gitRepos;
function filterData(){
   const searchInp = document.getElementById('searchUser').value;
   gitApiData();   
   async function gitApiData(){
    const gitUser = await fetch('https://api.github.com/users');
       allUser =  await gitUser.json();
        allUser.forEach(userData => {
           //console.log(userData.login);
           if(userData.login == searchInp){
                //Show Profile popup
                document.getElementById('profile-card').style.display='block';
                singleGitUsers();
                async function singleGitUsers(){
                    const mainUser = await fetch(`https://api.github.com/users/${userData.login}`);
                    singleUser =  await mainUser.json();
                    // Data Fromatting
                   proPic = document.getElementById('proPic').src = singleUser.avatar_url;
                   userName = document.getElementById('userName').innerHTML = singleUser.login;
                   gitFollowers = document.getElementById('gitFollowers').innerHTML =singleUser.followers+' Followers';
                   gitFollowing = document.getElementById('gitFollowing').innerHTML =singleUser.following+' Following'; 
                   gitRepos = document.getElementById('gitRepos').innerHTML =singleUser.public_repos+' Repos';
                   showProfile(proPic,userName,gitFollowers,gitFollowing,gitRepos);
                }

           }
        });     
   }
}

function showProfile(proPic,userName,gitFollowers,gitFollowing,gitRepos){ 
   console.log(proPic,"mydata");
   document.getElementById('gitproPic').src = proPic; 
   };
