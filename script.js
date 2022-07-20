function join(){
    location.href = 'minecraft://?addExternalServer=牛舍伺服器|node2.ultimatesrv.com:25716'
}
window.onload = function changePic(){  
  const title = document.querySelector('#title')
  const list = [
    'url("assets/1.webp")',
    'url("assets/2.webp")',
    'url("assets/3.webp")'
  ]
  const random = Math.floor(Math.random() * 3)
  $('#title').css({'background-image':list[random]})
  if (random!=0) title.style.color = 'white'
}