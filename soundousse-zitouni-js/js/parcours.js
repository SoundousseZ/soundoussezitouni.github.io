let menu = document.querySelectorAll("#nav-menu a");
console.log(menu);
let ul = document.querySelectorAll("#skills ul");
console.log(menu);


for (i = 0; i < menu.length; i++) {
    menu[0].addEventListener('click', function (e) {
        e.preventDefault();
        this.style.cssText = 'border-bottom: #ff6f6f73 solid 1px;';
        menu[1].style.cssText = 'border-bottom: none;';
        menu[2].style.cssText = 'border-bottom: none;';
        document.getElementById('back-end').style.display='none';
        document.getElementById('front-end').style.display='flex';
        document.getElementById('soft').style.display='none';
        })

    menu[1].addEventListener('click', function (e) {
        e.preventDefault();
        this.style.cssText = 'border-bottom: #ff6f6f73 solid 1px;';
        menu[0].style.cssText = 'border-bottom: none;';
        menu[2].style.cssText = 'border-bottom: none;';
        document.getElementById('back-end').style.display='flex';
        document.getElementById('front-end').style.display='none';
        document.getElementById('soft').style.display='none';
        })
        
    menu[2].addEventListener('click', function (e) {
            e.preventDefault();
            this.style.cssText = 'border-bottom: #ff6f6f73 solid 1px;';
            menu[0].style.cssText = 'border-bottom: none;';
            menu[1].style.cssText = 'border-bottom: none;';
            document.getElementById('back-end').style.display='none';
            document.getElementById('front-end').style.display='none';
            document.getElementById('soft').style.display='flex';
            })

    }

