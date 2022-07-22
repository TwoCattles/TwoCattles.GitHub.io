function join(){
    location.href = 'minecraft://?addExternalServer=牛舍伺服器|asia7.asiannodes.host:25706'
}
window.onload = function changePic(){  
  const title = document.querySelector('#title')
  const list = [
    'url("assets/1.webp")',
    'url("assets/2.webp")',
    'url("assets/3.webp")',
    'url("assets/4.webp")'
  ]
  const random = Math.floor(Math.random() * 4)
  console.log(random)
  $('#title').css({'background-image':list[random]})
  if (random!=0) title.style.color = 'white'
}