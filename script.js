// Global Variables
var filter = document.getElementById('filter')
var menuContainer = document.getElementById('menu')
var menuNav = document.getElementById('menu-nav')
var col = document.querySelectorAll('section');

// Event Listeners
filter.addEventListener('keyup', searchMenu)
menuNav.addEventListener('click', menuNavigate)

// Menu Nav function
function menuNavigate(e) {
        if(e.target.classList.contains('pizzaNav')) {
            for (let i = 0; i < col.length; i++) {
                if (col[i].classList.contains('pizza')) {
                    col[i].style.display = 'block'
                } else {
                    col[i].style.display = 'none'
                } 
            }               
        } else if (e.target.classList.contains('pastaNav')) {
            for (let i = 0; i < col.length; i++) {
                if (col[i].classList.contains('pasta')) {
                    col[i].style.display = 'block'
                } else {
                    col[i].style.display = 'none'
                } 
            }
        } else if (e.target.classList.contains('drinksNav')) {
            for (let i = 0; i < col.length; i++) {
                if (col[i].classList.contains('drink')) {
                    col[i].style.display = 'block'
                } else {
                    col[i].style.display = 'none'
                } 
            }
        } else if (e.target.classList.contains('dessertNav')) {
            for (let i = 0; i < col.length; i++) {
                if (col[i].classList.contains('dessert')) {
                    col[i].style.display = 'block'
                } else {
                    col[i].style.display = 'none'
                } 
            }
        } else {
            for (let i = 0; i < col.length; i++) {
                    col[i].style.display = 'block'
            }
        }
}

// Search Menu function
function searchMenu(e) {
    // Converting typed text to LowerCase
    let typedText = e.target.value.toLowerCase();

    // Getting the menuName
    let menuHFive = menuContainer.getElementsByTagName('h5')
    
    Array.from(menuHFive).forEach(
        function(item) {
        // Getting the card
        let card = item.parentElement.parentElement.parentElement
        // Getting the Menu Name
        let menuName = item.firstChild.textContent

        console.log(menuName);
        if (menuName.toLowerCase().indexOf(typedText) != -1) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        } 
    }
    )
}



























// function searchMenu(e) {
//     // Converting typed text to LowerCase
//     let typedText = e.target.value.toLowerCase();
    
//     // Getting the menu-card
//     // let card = document.getElementsByClassName('col')

//     let menuName = menu.querySelector('h5').firstChild.textContent
//     for (let i = 0; i < cards.length; i++) {
//         if (menuName.toLowerCase().indexOf(typedText) != -1) {
//             cards[i].style.display = 'block'
//         } else {
//             cards[i].style.display = 'none' 
//         }
//     }
// }
        
    // Converting menuName to Arrays

    // Array.from(card).forEach(function(menu){
    //     

    //     if (menuName.toLowerCase().indexOf(typedText) != -1) {
    //         for (let i = 0; i < card.length; i++) {
    //         card[i].style.display = 'block'
    //         } 
    //         } else {    
    //         for (let i = 0; i < card.length; i++) {
    //         card[i].style.display = 'none'     
    //         } 
    //     }
    // })

