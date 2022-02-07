//---------------------------------------------------
//      PROCESS BARS FOR EXPERIENCE
//---------------------------------------------------

/**HTML */
let i=0;
function html() {
  if (i==0) {
     i= 1;
    let elem = document.getElementById("html")
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
      if (width>65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%"
      }
    }
  }
};
html();


/**css */
let j = 0;
function css() {
  if (j == 0) {
    j = 1;
    let elem = document.getElementById("css");
    let width = 1;
    let id = setInterval(frame, 18);
    function frame() {
      if (width>75) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
css();

/**JS */
let k = 0;
function js() {
  if (k == 0) {
    k = 1;
    let elem = document.getElementById("js");
    let width = 1;
    let id = setInterval(frame, 50);
    function frame() {
      if (width>30) {
        clearInterval(id);
        k = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
js();

/**PHP */
let l = 0;
function php() {
  if (l == 0) {
    l = 1;
    let elem = document.getElementById("php");
    let width = 1;
    let id = setInterval(frame, 52);
    function frame() {
      if (width>25) {
        clearInterval(id);
        l = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
php();





/**MCD/MLD */
let m = 0;
function mcd() {
  if (m == 0) {
    m = 1;
    let elem = document.getElementById("mcd");
    let width = 1;
    let id = setInterval(frame, 19);
    function frame() {
      if (width>55) {
        clearInterval(id);
        m = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
mcd();

/**SQL */
let n = 0;
function sql() {
  if (n == 0) {
    n = 1;
    let elem = document.getElementById("sql");
    let width = 1;
    let id = setInterval(frame, 19);
    function frame() {
      if (width>60) {
        clearInterval(id);
        n = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
sql();

/**PHP My Admin */
let o = 0;
function pma() {
  if (o == 0) {
    o = 1;
    let elem = document.getElementById("pma");
    let width = 1;
    let id = setInterval(frame, 30);
    function frame() {
      if (width>45) {
        clearInterval(id);
        o = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
pma();

/**UML */
let p = 0;
function uml() {
  if (p == 0) {
    p = 1;
    let elem = document.getElementById("uml");
    let width = 1;
    let id = setInterval(frame, 13);
    function frame() {
      if (width>75) {
        clearInterval(id);
        p = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
uml();

/**cahier de charges */
let q = 0;
function cahier() {
  if (q == 0) {
    q = 1;
    let elem = document.getElementById("cahier");
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
      if (width>55) {
        clearInterval(id);
        q = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
cahier();

/**Maquetage */
let r = 0;
function mockup() {
  if (r == 0) {
    r = 1;
    let elem = document.getElementById("mockup");
    let width = 1;
    let id = setInterval(frame, 15);
    function frame() {
      if (width>90) {
        clearInterval(id);
        r = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
mockup();

/**UX/UI */
let s = 0;
function ux() {
  if (s == 0) {
    s = 1;
    let elem = document.getElementById("ux");
    let width = 1;
    let id = setInterval(frame, 25);
    function frame() {
      if (width>60) {
        clearInterval(id);
        s = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
ux();

/**Responsivité */
let t=0;
function responsive(){
    if (t==0) {
        t=1;
        let elem = document.getElementById("responsive");
        let width = 1;
        let id = setInterval (frame,12);
        function frame(){
            if (width>95){
                clearInterval(id)
                t=0; 
            }else{
                width++ 
                elem.style.width = width + '%'
            }
        }
    }
};

responsive();

/**Charte Graphique */
let u=0;
function graphic(){
    if (u==0) {
        u=1;
        let elem = document.getElementById("graphic");
        let width = 1;
        let id = setInterval (frame,19);
        function frame(){
            if (width>70){
                clearInterval(id)
                u=0; 
            }else{
                width++ 
                elem.style.width = width + '%'
            }
        }
    }
};
graphic();

/**VS Code */
let v=0;
function vsc() {
    if (v==0) {
        v=1;
        let elem = document.getElementById ("vsc");
        let width=1;
        let id = setInterval (frame, 15);
        function frame(){
            if (width>80){
                clearInterval(id);
                v=0;
            }else{
                width++
                elem.style.width=width + '%';
            }
        }
    }
};
vsc();

/**GitHub */
let w=0;
function git() {
    if (w==0){
        w=1;
        let elem=document.getElementById("git");
        let width=1;
        let id= setInterval (frame,30);
        function frame(){
            if (width>30){
                clearInterval(id);
                w=0;
            } else{ 
                width++;
                elem.style.width = width + '%'
                }
            }
        }

    };
    git();

/**Wordpress */
let x=0;
function wp(){
    if (x==0) {
        x=1;
        let elem = document.getElementById("wp");
        let width = 1;
        let id = setInterval (frame,15);
        function frame(){
            if (width>85) {
                clearInterval(id);
                x=0;
            }else{
                width++
                elem.style.width = width +'%'
            }
        }
    }
};
wp();


/**VUE*/
let y = 0;
function vue() {
  if (y == 0) {
    y = 1;
    let elem = document.getElementById("vue");
    let width = 1;
    let id = setInterval(frame, 60);
    function frame() {
      if (width>20) {
        clearInterval(id);
        y = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
vue();

/**linux*/
let z = 0;
function linux() {
  if (z == 0) {
    z = 1;
    let elem = document.getElementById("linux");
    let width = 1;
    let id = setInterval(frame, 50);
    function frame() {
      if (width>20) {
        clearInterval(id);
        z = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
linux();

/**virtuel box*/
let a = 0;
function virtual() {
  if (a == 0) {
    a = 1;
    let elem = document.getElementById("virtualbox");
    let width = 1;
    let id = setInterval(frame, 50);
    function frame() {
      if (width>20) {
        clearInterval(id);
        a = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};
virtual();


//----------------------------------------------------
//       BUTTON TO RETURN TO TOP OF PAGE
//----------------------------------------------------
const button = document.getElementById('top');

button.addEventListener("click",function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

