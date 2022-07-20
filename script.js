function join(){
    location.href = 'minecraft://?addExternalServer=牛舍伺服器|node2.ultimatesrv.com:25716'
}
window.onload = function changePic(){  
  const title = document.querySelector('#title')
  const list = [
    'url("https://media.discordapp.net/attachments/973799815840407552/981092878749147196/unknown.png?width=1251&height=674")',
    'url("https://cdn.discordapp.com/attachments/973799815840407552/981092879097282580/unknown.png?width=1251&height=674")',
    'url("https://cdn.discordapp.com/attachments/973799815840407552/981092879424421948/unknown.png?width=1251&height=674")'
  ]
  const random = Math.floor(Math.random() * 3)
  $('#title').css({'background-image':list[random]})
  if (random!=0) title.style.color = 'white'
}