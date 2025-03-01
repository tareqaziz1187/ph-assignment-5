document.getElementById('discover').addEventListener('click', ()=>{
    window.location.href = 'question.html'
})

document.getElementById('colorbtn').addEventListener('click',()=>{
    const randomColor = '#'+
    Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
})


const updateTime =()=>{
    const now = new Date()
    const now1 =new Date().toDateString()

    
    const day = now.getDate()
    const month = now.getMonth()+1
    const year = now.getFullYear()

    // const dateString = ` ${day}/${month}/${year}`
    const timeString = now.toLocaleTimeString()
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = now1

    setInterval(updateTime,1000);

 
}
updateTime()




// Button Disable and Add History

document.getElementById('com1').addEventListener('click',function(){
    this.disabled =true;
    this.style.backgroundColor ='Gray'
    alert('Fix Mobile Button Issue')
    
    const asined = document.getElementById('asinedTask').innerText;
    const parsAsined = parseInt(asined)-1
    const completed = document.getElementById('doneTask').innerText;
    const parseComplete =parseInt(completed)+1
    
    document.getElementById('asinedTask').innerText = parsAsined
    document.getElementById('doneTask').innerText = parseComplete

    if(parsAsined === 0){
        alert('Complete All Task')
    }

    const timeString = new Date().toLocaleTimeString()
    let txt= `You have completed Fix Mobile Button Issue  at ${timeString} `;
    let p = document.createElement('p');
    p.setAttribute("class","bg-[#F4F7FF] mx-5 mb-4 p-2 rounded-md m-auto");
    p.innerText = txt;
    document.getElementById("activity").appendChild(p)
})
document.getElementById('com2').addEventListener('click',function(){
    this.disabled =true;
    this.style.backgroundColor ='Gray'
    alert('Add Dark Mode')
    

    const asined = document.getElementById('asinedTask').innerText;
    const parsAsined = parseInt(asined)-1
    const completed = document.getElementById('doneTask').innerText;
    const parseComplete =parseInt(completed)+1
    
    document.getElementById('asinedTask').innerText = parsAsined
    document.getElementById('doneTask').innerText = parseComplete

    if(parsAsined === 0){
        alert('Complete All Task')
    }

    const timeString = new Date().toLocaleTimeString()
    let txt= `You have completed Add Dark Mode  at ${timeString} `;
    let p = document.createElement('p');
    p.setAttribute("class","bg-[#F4F7FF] mx-5 mb-4 p-2 rounded-md m-auto");
    p.innerText = txt;
    document.getElementById("activity").appendChild(p)
    
})
document.getElementById('com3').addEventListener('click',function(){
    this.disabled =true;
    this.style.backgroundColor ='Gray'
    alert('Optimize Home page')
    

    const asined = document.getElementById('asinedTask').innerText;
    const parsAsined = parseInt(asined)-1
    const completed = document.getElementById('doneTask').innerText;
    const parseComplete =parseInt(completed)+1
    
    document.getElementById('asinedTask').innerText = parsAsined
    document.getElementById('doneTask').innerText = parseComplete

    if(parsAsined === 0){
        alert('Complete All Task')
    }

    const timeString = new Date().toLocaleTimeString()
let txt= `You have completed Optimize Home page  at ${timeString} `;
let p = document.createElement('p');
p.setAttribute("class","bg-[#F4F7FF] mx-5 mb-4 p-2 rounded-md m-auto");
p.innerText = txt;
document.getElementById("activity").appendChild(p)
})




document.getElementById('com4').addEventListener('click',function(){
    this.disabled =true;
    this.style.backgroundColor ='Gray'
    alert('Add new emoji 🤲')
    

    const asined = document.getElementById('asinedTask').innerText;
    const parsAsined = parseInt(asined)-1
    const completed = document.getElementById('doneTask').innerText;
    const parseComplete =parseInt(completed)+1
    
    document.getElementById('asinedTask').innerText = parsAsined
    document.getElementById('doneTask').innerText = parseComplete

    if(parsAsined === 0){
        alert('Complete All Task')
    }

    const timeString = new Date().toLocaleTimeString()
    let txt= `You have completed 'Add new emoji 🤲  at ${timeString} `;
    let p = document.createElement('p');
    p.setAttribute("class","bg-[#F4F7FF] mx-5 mb-4 p-2 rounded-md m-auto");
    p.innerText = txt;
    document.getElementById("activity").appendChild(p)

})
document.getElementById('com5').addEventListener('click',function(){
    this.disabled =true;
    this.style.backgroundColor ='Gray'
    alert('Integrate OpenAI API')
    

    const asined = document.getElementById('asinedTask').innerText;
    const parsAsined = parseInt(asined)-1
    const completed = document.getElementById('doneTask').innerText;
    const parseComplete =parseInt(completed)+1
    
    document.getElementById('asinedTask').innerText = parsAsined
    document.getElementById('doneTask').innerText = parseComplete

    if(parsAsined === 0){
        alert('Complete All Task')
    }

    const timeString = new Date().toLocaleTimeString()
    let txt= `You have completed Integrate OpenAI API  at ${timeString} `;
    let p = document.createElement('p');
    p.setAttribute("class","bg-[#F4F7FF] mx-5 mb-4 p-2 rounded-md m-auto");
    p.innerText = txt;
    document.getElementById("activity").appendChild(p)
    
})
document.getElementById('com6').addEventListener('click',function(){
    this.disabled =true;
    this.style.backgroundColor ='Gray'
    alert('Improve Job searching')
    

    const asined = document.getElementById('asinedTask').innerText;
    const parsAsined = parseInt(asined)-1
    const completed = document.getElementById('doneTask').innerText;
    const parseComplete =parseInt(completed)+1
    
    document.getElementById('asinedTask').innerText = parsAsined
    document.getElementById('doneTask').innerText = parseComplete

    if(parsAsined === 0){
        alert('Complete All Task')
    }

    const timeString = new Date().toLocaleTimeString()
    let txt= `You have completed Improve Job searching  at ${timeString} `;
    let p = document.createElement('p');
    p.setAttribute("class","bg-[#F4F7FF] mx-5 mb-4 p-2 rounded-md m-auto");
    p.innerText = txt;
    document.getElementById("activity").appendChild(p)
})


document.getElementById('clearhistory').addEventListener('click',()=>{
    document.getElementById("activity").innerHTML = ""

})
