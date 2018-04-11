function Unpriviledged_StayLoggedin(){
    setTimeout(Password_Enter,10000);
                document.querySelector(".allb4login").style.display="none";
                document.querySelector(".libtn").style.display="none";
                document.querySelector(".subtn").style.display="none";
                document.querySelector(".identity").style.display="none";
                document.querySelector(".Loader").style.display="block";
                
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 10 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},0);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 10 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 9 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},1000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 9 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},1500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 8 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},2000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 8 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},2500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 7 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},3000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 7 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},3500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 6 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},4000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 6 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},4500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 5 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},5000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 5 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},5500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 4 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},6000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 4 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},6500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 3 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},7000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 3 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},7500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 2 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},8000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 2 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},8500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 1 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},9000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 1 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},9500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited <b>free</b> account, you will have to wait 0 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},10000);
}
function signupdata(){
    //Get rid of any old usernames and passwords
    if (usernames.length==2||passwords.length==2){
        usernames=[];
        passwords=[];
    }
    if (usernames[0]==""){document.querySelector(".quoteinfo2").innerHTML="Your username is too short!"}
    if (passwords[0]==""){document.querySelector(".quoteinfo2").innerHTML="Your password is too short!"}
    if (usernames[0]=="" && passwords[0]==""){document.querySelector(".quoteinfo2").innerHTML="Your username and password is too short!"}
    
    if (usernames[0]!="" && passwords[0]!=""){
        //Add the new temporary username and password
        usernames.push(document.querySelector(".CreateUsernameBox").innerHTML);
        passwords.push(document.querySelector(".CreatePasswordBox").value);
        document.querySelector(".quoteinfo").innerHTML="Your temporary username(s) is/are <div style='font-weight:40px;font-size:50px'>" + usernames + "</div> and your password(s) is/are <div style='font-weight:40px;font-size:50px'>" + passwords + "</div>";
        UserBoxEditTrue();
    }
}
function CreateUserBoxEditTrue(){
    
    document.querySelector(".UsernameBox").contentEditable=false;
    document.querySelector(".PasswordBox").contentEditable=false;
    document.querySelector(".CreateUsernameBox").contentEditable=true;
    document.querySelector(".identity").style.display="none";
    document.querySelector(".enterCommand").style.display="none";
    document.querySelector(".instructions").style.display="none";
    document.querySelector("#pimng").style.display="none";
    document.querySelector(".signup").style.display="block";
    
    document.querySelector('.NoAccount').onclick = function() {
        document.querySelector(".identity").style.display="none";
        document.querySelector(".signup").style.display="block";
    };
    
    document.querySelector('.submitIdentityButton').onclick = function() {
       document.querySelector(".UsernameBox").contentEditable=false;
       signupdata();
    };
}

function UserBoxEditTrue(){
    
    document.querySelector(".UsernameBox").contentEditable=true;
    document.querySelector(".PasswordBox").contentEditable=true;
    document.querySelector(".identity").style.display="block";
    document.querySelector(".signup").style.display="none";
    document.querySelector(".enterCommand").style.display="none";
    document.querySelector(".instructions").style.display="none";
    document.querySelector("#pimng").style.display="none";
    
    document.querySelector('.NoAccount').onclick = function() {
        document.querySelector(".identity").style.display="none";
        document.querySelector(".signup").style.display="block";
        CreateUserBoxEditTrue();
    }
    
    document.querySelector('.submitIdentityButton').onclick = function() {
       document.querySelector(".UsernameBox").contentEditable=false;
       UserVerification();
    };
    
    $(document).keypress(function(e) {
        if(e.which == 13) {
            document.querySelector(".UsernameBox").contentEditable=false;
            UserVerification();
            return;
        }
    });
}

function UserVerification(){
    var Username = document.querySelector(".UsernameBox").innerHTML;
    var Password = document.querySelector(".PasswordBox").value;
    switch(Username){
        case "Admin_HuamanGames":
            switch(Password){
                case "SPB12345":
                    Password_Enter();
                    document.querySelector(".HuamanGames").style.display="block";
                    document.querySelector(".identity").style.display="none";
            }
        break;
        
        case usernames[0]:
            switch(Password){
            case passwords[0]:
                setTimeout(Password_Enter,30000);
                document.querySelector(".identity").style.display="none";
                document.querySelector(".Loader").style.display="block";
                
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 30 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},0);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 30 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 29 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},1000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 29 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},1500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 28 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},2000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 28 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},2500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 27 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},3000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 27 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},3500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 26 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},4000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 26 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},4500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 25 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},5000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 25 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},5500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 24 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},6000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 24 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},6500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 23 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},7000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 23 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},7500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 22 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},8000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 22 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},8500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 21 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},9000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 21 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},9500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 20 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},10000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 20 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},10500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 19 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},11000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 19 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},11500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 18 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},12000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 18 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},12500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 17 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},13000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 17 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},13500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 16 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},14000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 16 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},14500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 15 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},15000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 15 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},15500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 14 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},16000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 14 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},16500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 13 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},17000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 13 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},17500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 12 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},18000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 12 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},18500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 11 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},19000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 11 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},19500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 10 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},20000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 10 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},20500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 9 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},21000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 9 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},21500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 8 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},22000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 8 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},22500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 7 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},23000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 7 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},23500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 6 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},24000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 6 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},24500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 5 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},25000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 5 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},25500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 4 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},26000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 4 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},26500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 3 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},27000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 3 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},27500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 2 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},28000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 2 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},28500);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 1 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},29000);
                setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 1 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},29500);
            break;
            default:
                setTimeout(UserBoxEditTrue, 500);
                setTimeout(resetLogin,500);
            }
            break;
        case usernames[1]:
        switch(Password){
        case passwords[1]:
            setTimeout(Password_Enter,30000);
            document.querySelector(".identity").style.display="none";
            document.querySelector(".Loader").style.display="block";
            
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 30 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},0);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 30 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 29 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},1000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 29 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},1500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 28 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},2000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 28 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},2500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 27 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},3000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 27 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},3500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 26 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},4000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 26 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},4500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 25 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},5000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 25 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},5500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 24 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},6000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 24 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},6500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 23 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},7000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 23 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},7500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 22 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},8000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 22 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},8500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 21 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},9000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 21 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},9500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 20 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},10000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 20 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},10500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 19 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},11000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 19 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},11500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 18 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},12000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 18 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},12500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 17 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},13000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 17 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},13500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 16 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},14000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 16 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},14500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 15 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},15000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 15 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},15500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 14 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},16000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 14 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},16500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 13 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},17000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 13 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},17500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 12 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},18000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 12 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},18500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 11 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},19000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 11 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},19500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 10 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},20000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 10 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},20500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 9 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},21000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 9 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},21500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 8 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},22000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 8 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},22500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 7 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},23000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 7 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},23500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 6 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},24000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 6 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},24500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 5 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},25000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 5 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},25500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 4 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},26000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 4 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},26500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 3 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},27000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 3 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},27500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 2 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},28000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 2 seconds to begin...</p><div style='font-size:130px;'>Loading.</div><p>Don't worry, it's worth the wait... :)</p>";},28500);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 1 seconds to begin...</p><div style='font-size:130px;'>Loading..</div><p>Don't worry, it's worth the wait... :)</p>";},29000);
            setTimeout(function(){document.querySelector(".Loader").innerHTML="<p>As you have a limited free account, you will have to wait 1 seconds to begin...</p><div style='font-size:130px;'>Loading...</div><p>Don't worry, it's worth the wait... :)</p>";},29500);
        break;
        default:
            setTimeout(UserBoxEditTrue, 500);
            setTimeout(resetLogin,500);
        }
        
    
        break;
        default:
            setTimeout(UserBoxEditTrue, 500);
            setTimeout(resetLogin,500);
    }
}

function Password_Enter(){
    setTimeout(function(){document.querySelector(".HuamanGames").style.display="block";},1500);
    document.querySelector(".Loader").style.display="none";
    setTimeout(TextBoxEditTrue,7900);
    document.body.style.animation="toblack 1.5s";
    setTimeout(function(){document.body.style.background="black";},1500);
}
