/* METRI.IMMO LINK FRAMEWORK · BETA 1.0 · Propiedad FX9 */
"use strict";

const propertyImages = [
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9AA.png?raw=true",alt:"Edificio donde se ubica el local comercial en el Casco de Chacao"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9A.jpg?raw=true",alt:"Área principal del local con fachada de vidrio hacia la calle"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9B.jpg?raw=true",alt:"Acceso a pie de calle y fachada acristalada del local comercial"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9C.jpg?raw=true",alt:"Ambiente interior independiente con paredes blancas y piso resistente"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9D.jpg?raw=true",alt:"Vista interior del área independiente y sus accesos de madera"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9E.jpg?raw=true",alt:"Uno de los dos baños internos del local comercial"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9F.jpg?raw=true",alt:"Vista amplia del ambiente interior secundario del local"},
  {src:"https://github.com/q9zx/3ede5b7/blob/main/FX9/FX9G.jpg?raw=true",alt:"Ambiente interior del local con repisas e iluminación instalada"}
];

let currentImageIndex=0;
let elementThatOpenedLightbox=null;
const mainImage=document.getElementById("mainImage");
const thumbnailContainer=document.getElementById("thumbnailContainer");
const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");
const openButton=document.getElementById("openLightboxBtn");
const closeButton=document.getElementById("closeLightboxBtn");
const previousButton=document.getElementById("prevBtn");
const nextButton=document.getElementById("nextBtn");

const galleryIsReady=()=>Boolean(mainImage&&thumbnailContainer&&lightbox&&lightboxImage);

function updateMainImage(index){
  if(!galleryIsReady()||!propertyImages[index])return;
  currentImageIndex=index;
  const image=propertyImages[index];
  mainImage.src=image.src;
  mainImage.alt=image.alt;
  if(lightbox.classList.contains("active")){
    lightboxImage.src=image.src;
    lightboxImage.alt=image.alt;
  }
  thumbnailContainer.querySelectorAll(".thumbnail").forEach((thumbnail,i)=>{
    const active=i===index;
    thumbnail.classList.toggle("active",active);
    thumbnail.setAttribute("aria-current",active?"true":"false");
  });
}

function buildThumbnails(){
  if(!thumbnailContainer)return;
  const fragment=document.createDocumentFragment();
  propertyImages.forEach((image,index)=>{
    const button=document.createElement("button");
    button.className="thumbnail";
    button.type="button";
    button.setAttribute("aria-label",`Mostrar fotografía ${index+1} de ${propertyImages.length}`);
    const thumbnail=document.createElement("img");
    thumbnail.src=image.src;
    thumbnail.alt=image.alt;
    thumbnail.loading=index<2?"eager":"lazy";
    thumbnail.decoding="async";
    button.appendChild(thumbnail);
    button.addEventListener("click",()=>updateMainImage(index));
    fragment.appendChild(button);
  });
  thumbnailContainer.replaceChildren(fragment);
}

function openLightbox(index=currentImageIndex){
  if(!galleryIsReady()||!propertyImages[index])return;
  elementThatOpenedLightbox=document.activeElement;
  currentImageIndex=index;
  lightboxImage.src=propertyImages[index].src;
  lightboxImage.alt=propertyImages[index].alt;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  closeButton?.focus();
}

function closeLightbox(){
  if(!lightbox)return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(elementThatOpenedLightbox instanceof HTMLElement)elementThatOpenedLightbox.focus();
}

const showNextImage=()=>updateMainImage((currentImageIndex+1)%propertyImages.length);
const showPreviousImage=()=>updateMainImage((currentImageIndex-1+propertyImages.length)%propertyImages.length);

if(galleryIsReady()){
  buildThumbnails();
  updateMainImage(0);
  mainImage.addEventListener("click",()=>openLightbox(currentImageIndex));
  mainImage.addEventListener("keydown",event=>{
    if(event.key==="Enter"||event.key===" "){event.preventDefault();openLightbox(currentImageIndex);}
  });
  mainImage.tabIndex=0;
  mainImage.setAttribute("role","button");
  mainImage.setAttribute("aria-label","Abrir fotografía principal en tamaño ampliado");
}

openButton?.addEventListener("click",()=>openLightbox(currentImageIndex));
closeButton?.addEventListener("click",closeLightbox);
nextButton?.addEventListener("click",showNextImage);
previousButton?.addEventListener("click",showPreviousImage);
lightbox?.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox();});
document.addEventListener("keydown",event=>{
  if(!lightbox?.classList.contains("active"))return;
  if(event.key==="Escape")closeLightbox();
  if(event.key==="ArrowRight")showNextImage();
  if(event.key==="ArrowLeft")showPreviousImage();
});
