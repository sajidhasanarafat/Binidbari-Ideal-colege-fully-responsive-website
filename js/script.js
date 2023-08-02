

(() => {

    const bars = document.querySelector(".bars"),
        nav_close = document.querySelector(".nav_close"),
        nav_menu = document.querySelector(".nev_menu"),
        menu_overlay = document.querySelector(".menu_overlay"),
        media_size = 991;


    // bars.addEventListener("click", function(){     
    //     nav_menu.classList.toggle("active");
    // });
    // nav_close.addEventListener("click", function(){     
    //     nav_menu.classList.toggle("active");
    // });


    bars.addEventListener("click", toggle_nav);
    nav_close.addEventListener("click", toggle_nav);
    menu_overlay.addEventListener("click", toggle_nav);

    function toggle_nav() {
        nav_menu.classList.toggle("active");
        menu_overlay.classList.toggle("open");
        document.body.classList.toggle("hidden_scrolling");
    }

    nav_menu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= media_size) {
            // event.preventDefault();
            const menu_child = event.target.parentElement;

            if (menu_child.classList.contains("rotate")) {
                collapse_sub_menu();
            } else {

                if (nav_menu.querySelector(".dropdown.rotate")) {
                    collapse_sub_menu();
                }

                menu_child.classList.add('rotate');
                const sub_menu = menu_child.querySelector(".sub_menu");
                sub_menu.style.maxHeight = sub_menu.scrollHeight + "px";

            }
        }
    });

    function collapse_sub_menu() {
        nav_menu.querySelector(".dropdown.rotate .sub_menu").removeAttribute("style");
        nav_menu.querySelector(".dropdown.rotate").classList.remove("rotate");
    }

    function resizeFix() {
        if (nav_menu.classList.contains("active")) {
            toggle_nav();
        }
        if (nav_menu.querySelector(".dropdown.rotate")) {
            collapse_sub_menu();
        }
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > media_size) {
            resizeFix();
        }
    });


})();



    document.onmousedown=disableclick;
    status="You are Hacked Now!";
    function disableclick(event) {
        if(event.button==2){
            alert(status);
            return false;
        }
    };

    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
    });
     
    function ctrlShiftKey(e, keyCode){
       return e.ctrlKey && shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }
    document.onkeydown = (e) =>{
       if(
         event.keyCode === 123 || 
         ctrlShiftKey(e, 'I') ||  
         ctrlShiftKey(e, 'J') || 
         ctrlShiftKey(e, 'C') || 
         ctrlShiftKey(e, 'U')
       //   (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
       )
       return false;
    };