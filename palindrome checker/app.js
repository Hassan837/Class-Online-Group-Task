
function checking(){
    
    var inp1 = document.querySelector('#inputPalindrome').value;

    if (inp1 == 'madam'|| inp1 == 'Madam' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
        //document.querySelector('.alert alert-info').className =  "alert alert-success"
        document.querySelector('#notification').style.color = "green"

    }

    else if (inp1 == 'racecar'|| inp1 == 'Racecar' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
        //document.querySelector('.alert alert-info').className =  "alert alert-success"
        document.querySelector('#notification').style.color = "green"
    }

    else if (inp1 == 'noon'|| inp1 == 'Noon' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
        //document.querySelector('.alert alert-info').className =  "alert alert-success"
        document.querySelector('#notification').style.color = "green"
    }

    else if (inp1 == 'level'|| inp1 == 'Level' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
        document.querySelector('.alert alert-info').className =  "alert alert-success"
    }

    else if (inp1 == 'civic'|| inp1 == 'Civic' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
        document.querySelector('#notification').style.color = "green" 
       // document.querySelector('.alert alert-info').className =  "alert alert-success"
    }

    else if (inp1 == 'radar'|| inp1 == 'Radar' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
       // document.querySelector('.alert alert-info').className =  "alert alert-success"
       document.querySelector('#notification').style.color = "green"
    }

    else if (inp1 == 'wow'|| inp1 == 'Wow' ){
        document.querySelector('#notification').innerHTML = "Oh Yes, Given word's a Palindrome";
        //document.querySelector('.alert alert-info').className =  "alert alert-success"
        document.querySelector('#notification').style.color = "green"
    }

    else{document.querySelector('#notification').innerHTML = "oh No, you give wrong word's" 
        document.querySelector('#notification').style.color = "red" ;
    }
}