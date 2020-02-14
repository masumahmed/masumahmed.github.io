//get cookie function
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

//loads theme on start
window.onload = function loadTheme() {
  if(getCookie("theme") == null){
    document.cookie = "theme=dark";
  }
  if(getCookie("theme") == "dark") {
    $(":root").css("--main-bg-color", "#D55151");
    $(":root").css("--accent-color", "#141414");
    $(":root").css("--neutral-color", "#000000");
  }
  else if (getCookie("theme") == "light") {
    $(":root").css("--main-bg-color", "#575E77");
    $(":root").css("--accent-color", "#262935");
    $(":root").css("--neutral-color", "#EEEEEE");
  }
}

// theme switcher button to change CSS from light to dark mode, vice versa
function themeChange() {
  if (getCookie("theme") == "dark") {
    $(":root").css("--main-bg-color", "#575E77");
    $(":root").css("--accent-color", "#262935");
    $(":root").css("--neutral-color", "#EEEEEE");
    document.cookie = "theme=light";
  }
  else if(getCookie("theme") == "light") {
    $(":root").css("--main-bg-color", "#D55151");
    $(":root").css("--accent-color", "#141414");
    $(":root").css("--neutral-color", "#000000");
    document.cookie = "theme=dark";
  }
}