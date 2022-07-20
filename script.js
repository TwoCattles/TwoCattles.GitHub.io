function join(){
    location.href = 'minecraft://?addExternalServer=牛舍伺服器|node2.ultimatesrv.com:25716'
}
window.onload = function changePic(){  
  const title = document.querySelector('#title')
  const list = [
    'url("assets/1.png")',
    'url("assets/2.png")',
    'url("assets/3.png")'
  ]
  const random = Math.floor(Math.random() * 3)
  $('#title').css({'background-image':list[random]})
  if (random!=0) title.style.color = 'white'
}