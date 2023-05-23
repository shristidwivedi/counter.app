let saveEl = document.getElementById('save_el');
let countEl=document.getElementById("count_el");
let count=0;

console.log(saveEl)


function increment(){
    count+=1;
    countEl.textContent = count;
}


function save(){
let countStr= count +"-";
saveEl.textContent+=countStr;
count.textContent=0;
count=0;

}



