/*In the below code, we handle the click event of out .btn, 
selected the .submenu element and opened/closed it using the fadeToggle method, 
providing 1s/1000ms for the animation speed.*/
$(document).ready(function() {
    // $(alert('Document is ready!'))
        $(".btn").click(function() {
            $(".submenu").fadeToggle(1000)
        });
});
