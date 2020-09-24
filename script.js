$(document).ready(function(){
    var mainMenuItem = $("#main_menu ul").children("li"),
        totalItem = mainMenuItem.length,
        openedIndex = 2;
    
    var init = function(){
        bindEvent();
        if(valide(openedIndex))
            animateParam(mainMenuItem.eq(openedIndex),true,700);
    },
        bindEvent = function(){
            mainMenuItem.children(".image").click(function () {
                var newIndex = $(this).parent().index(),
                    item = mainMenuItem.eq(newIndex);

                if (openedIndex === newIndex) {
                    animateParam(item, false, 250);
                    openedIndex = -1;
                }
                else {
                    if (valide(newIndex)) {
                        animateParam(mainMenuItem.eq(openedIndex), false, 250);
                        openedIndex = newIndex;
                        animateParam(item, true, 250);
                    }
                }
            });
        },

        animateParam = function(item,toOpen,speed){
            var colorImage = item.find(".color"),
                itemParam = toOpen ? {width:"420px"} : {width:"140px"},
                colorParam = toOpen ? {left:"0px"} : {left:"140px"};

            colorImage.animate(colorParam,speed);
            item.animate(itemParam, speed);
        },
        valide = function(isValide){
            return(isValide >= 0)  && (isValide < totalItem);
        }

    init();
    $(".button").click(function(){
        var newIndex = $(this).index();
        item = mainMenuItem.eq(newIndex);

        if (openedIndex === newIndex) {
            animateParam(item, false, 250);
            openedIndex = -1;
        }
        else {
            if (valide(newIndex)) {
                animateParam(mainMenuItem.eq(openedIndex), false, 250);
                openedIndex = newIndex;
                animateParam(item, true, 250);
            }
        }

    })
});