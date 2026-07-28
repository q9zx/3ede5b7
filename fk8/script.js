const images=Array.from({length:20},(_,i)=>`fk8${String.fromCharCode(97+i)}.png`);
    const gallery=document.querySelector("#gallery");
    images.forEach((src,i)=>{const b=document.createElement("button");b.className="shot";b.setAttribute("aria-label",`Ampliar fotografía ${i+1}`);b.innerHTML=`<img src="${src}" loading="${i<3?"eager":"lazy"}" alt="Casa en Colinas de Santa Mónica, fotografía ${i+1}">`;b.onclick=()=>openBox(i);gallery.appendChild(b)});
    const box=document.querySelector("#lightbox"),viewer=box.querySelector("img");let current=0;
    function openBox(i){current=i;viewer.src=images[current];box.classList.add("open");document.body.classList.add("lock")}
    function closeBox(){box.classList.remove("open");document.body.classList.remove("lock")}
    function move(n){current=(current+n+images.length)%images.length;viewer.src=images[current]}
    box.querySelector(".close").onclick=closeBox;box.querySelector(".prev").onclick=()=>move(-1);box.querySelector(".next").onclick=()=>move(1);
    box.onclick=e=>{if(e.target===box)closeBox()};document.addEventListener("keydown",e=>{if(!box.classList.contains("open"))return;if(e.key==="Escape")closeBox();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)});
