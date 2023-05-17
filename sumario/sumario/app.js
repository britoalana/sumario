const itens = [
    {
      id: 1,
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg"
    },
    {
      id: 2,
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg"
    },
    {
      id: 3,
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg"
    },
    {
      id: 4,
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg"
    }
  ];

  const menuItem = document.querySelector('.menu-item')

  window.addEventListener('DOMContentLoaded', function () {
    //sempre que a página for carragada a função é exercida
    displayMenuItem(itens)
  })

  function displayMenuItem(menuItems) {
    
    let displayMenu = menuItems.map(function (item, index) {
      const color=['#FFF6F5','#FFFBF2','#F2FBFA','#F3F3FD']
      const bgColor = color[index % color.length];
    
      return `
      <article class="menu-item" style=" background-color: ${bgColor};" >
      <div>
      <img src="${item.icon}" alt="">
      <p>${item.category} ${item.score}/100</p>
    </div></article>`

  
      //retorna todas essas informações de todos os objetos 
    })
    displayMenu = displayMenu.join("")
    //trasnforma tudo em texto
    menuItem.innerHTML = displayMenu
  }

  