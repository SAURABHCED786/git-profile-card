     

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
                    document.getElementById('proPic').src = singleUser.avatar_url;
                    document.getElementById('userName').innerHTML = singleUser.login;
                    document.getElementById('gitFollowers').innerHTML =singleUser.followers+' Followers';
                    document.getElementById('gitFollowing').innerHTML =singleUser.following+' Following'; 
                    document.getElementById('gitRepos').innerHTML =singleUser.public_repos+' Repos';
                }

           }
        });     
   }
}

function showProfile(data){ 
    console.log(data,"mydata");   
//enter name data url in here
document.getElementById('profile').innerHTML =data;
};