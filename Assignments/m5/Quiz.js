loader()
var ans = []
// alert("Heelloo");
function aap(ansr)
{
    console.log(ansr)
    ans.push(ansr);
}
function loader()
{
    // var ans = []
    var q1 = {
        question : "Who is first PM of India?",
        options: {
            opt1:  "Nehru Perumalla",
            opt2: "Jawaharlal Nehru"
        },
        correctAnswer: "opt1",
        hint: "Letter after H"
    };
    var q2 = {
        question : "Who is second PM of India?",
        options: {
            opt1:  "Lal bahadur sastry",
            opt2: "Indira Gandhi"
        },
        correctAnswer: "opt1",
        hint: "Letter after k"
    };
    var ar=[]
    ar.push(q2,q1);
    console.log(5)
console.log(ar.length)
console.log(ar[0].options.opt1)
for(var i = 0; i < 2; i++) {
    console.log(5)
    // alert("HELLO");
    document.getElementById("bodyy").innerHTML+='<div id="cont" class="container-fluid">'+
    '<h2 id="question">'+ar[i].question+'</h2>'+
    '<button id="hint1" class="btn btn-primary btn-sm"  onclick=hintUp()>'+"Hint"+'</button>'+
    '<div id="hint" class="alert alert-warning alert-dismissible">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">'+'&times;'+'</a>'+
        +'<p id="hint">'+ar[i].hint+'</p>'+
    '</div>'+
    '<div>'+
        '<label>'+'<input type="radio" id="radio11" name='+i+'"optradio" onclick=aap('+ar[i].options.opt1+')>'+ar[i].options.opt1+'</label>'+
    '</div>'+
    '<div>'+
        '<label>'+'<input type="radio" id="radio12" name='+i+'"optradio" onclick="aap('+ar[i].options.opt2+')">'+ar[i].options.opt2+'</label>'+
    '</div>'+
    '<div id="WrongAlert" class="alert alert-danger alert-dismissible">'+   
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">'+'&times;'+'</a>'
        +
        '<p id="WrongAlert1">'+'</p>'+    
    '</div>'+
    '<div id="RightAlert" class="alert alert-success alert-dismissible">'+
        '<a href="#" class="close" data-dismiss="alert" aria-label="close">'+'&times;'+'</a>'
        +
        '<p id="RightAlert">'+'</p>'+
    '</div>'+
'</div>';
// console.log(10)
}
document.getElementById("Button").innerHTML = '<button class="btn btn-primary btn-md" onclick="Validate("ans")">'+"Submit"+'</button>';
}
// document.getElementById("question").innerHTML=ar[0].question;
function hintUp() {
    document.getElementById("hint").style.display="block";
}
console.log("nehru"+ans.length)
function Validate(ans) {
    // for(var i = 0; i < 2; i++) {
    //     console.log(ans[i])
    // }
}