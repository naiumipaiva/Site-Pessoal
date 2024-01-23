/*Procurando coisas no arquivo html*/

/* Nesta linha, o código tá procurando um elemento HTML com o atributo id igual a 'btn-menu',
vai servir pra abri o menu criado em questão*/
let btnMenu = document.getElementById('btn-menu')
/*Aqui, o código está procurando um outro elemento no HTML, dessa vez com o atributo id igual a 'menu-mobile'. 
Esse no caso é o menu móvel que será exibido quando o botão for clicado.*/
let menu = document.getElementById('menu-mobile')
/*Aqui é a mesma coisa que o de cima só que no lugar de procurar um menu, 
tá procurando o overlay pra deixar esteticamente mais bonito e não deixar o usuario tocar fora do menu*/
let overlay = document.getElementById('overlay-menu')

/*Fazendo as coisas acontecerem de fato*/

/*Aqui ele tá dando um função para quando o botão de abrir menu for tocado, ou seja, 
quando clicarmos nele, ele vai abrir outro elemento*/
btnMenu.addEventListener('click', () => 
{ menu.classList.add('abrir-menu')})

/*Mesma coisa que o de cima, só que pra fechar o menu e executar a ação requisitada*/
menu.addEventListener('click', () => 
{ menu.classList.remove('abrir-menu')})

/*Mesma coisa que o de cima, só que pra fechar o menu e executar a ação requisitada*/
overlay.addEventListener('click', () => 
{ menu.classList.remove('abrir-menu')})