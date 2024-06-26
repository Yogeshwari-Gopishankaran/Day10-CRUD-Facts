const API_URL="https://meowfacts.herokuapp.com/"
async function getFacts() {
    try {
        let res=await fetch(API_URL);
        let data = await res.json();
        if(res.status){
            
            let message=document.getElementById("msg");
          
                message.innerHTML=" ";
        message.innerHTML=`<p class="design"> ${data.data}</p>`
           
        
               }
        
    } catch (error) {
        console.log(error);
    }

}


function createData(data) {
    let root=document.getElementById("root");
    root.innerHTML = ` <h1 id="heading"> Ramdom Facts of Cats</h1><br>
    <button type="button" class="btn btn-success" onclick="getFacts()">Cat Facts</button><br><br>
    <div id="msg"></div><br><br>`
   
}



    
    

createData();