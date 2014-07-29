   //NOTE: To add circle:-{ var obj = new canvas(500/*<width>*/, 500/*<height>*/); obj.CreateBall(); }
var canvas_width;
var canvas_height;
function ball() {
    this.incX = 32;
    this.incY = -15;
    this.HTMLObj = null;
    this.left = '0';
    this.top = parseInt(600 / 2);
}
var ball_collection = [];
var ball_cnt = 0;

function canvas(width, height) {
    this.CreateBall = function CreateBall() {
        canvas_width = width;
        canvas_height = height;
        document.getElementById("container1").style.width = width + 'px';
        document.getElementById("container1").style.height = height + 'px';
        var b = new ball();
        b.HTMLObj = document.createElement('div');
        b.HTMLObj.id = parseInt(Math.random).toString();
        b.HTMLObj.className = 'circle';
        document.getElementsByTagName('body')[0].appendChild(b.HTMLObj);
        b.HTMLObj.style.left = b.left + 'px';
        b.HTMLObj.style.top = b.top + 'px';
        ball_collection[ball_cnt] = b;
        ball_cnt = ball_cnt + 1;
    }
}
function moveSquare1() {
    setInterval(function () {
        for (var i = 0; i < ball_cnt; i++)
        {
            var leftPos = parseInt(ball_collection[i].HTMLObj.style.left.substring(0, ball_collection[i].HTMLObj.style.left.indexOf("px")));
            var topPos = parseInt(ball_collection[i].HTMLObj.style.top.substring(0, ball_collection[i].HTMLObj.style.top.indexOf("px")));
            if (leftPos < 0 || leftPos > canvas_width - 120)
                ball_collection[i].incX = -ball_collection[i].incX;
            if (topPos < 0 || topPos > canvas_height - 120)
                ball_collection[i].incY = -ball_collection[i].incY;

            ball_collection[i].HTMLObj.style.left = parseInt(ball_collection[i].HTMLObj.style.left) + ball_collection[i].incX + 'px';
            ball_collection[i].HTMLObj.style.top = parseInt(ball_collection[i].HTMLObj.style.top) + ball_collection[i].incY + 'px';
        }
    }, 50);
}
window.onload = function () { var obj = new canvas(500, 500); obj.CreateBall(); moveSquare1(); document.getElementById("create").onclick = function createBall() { var obj = new canvas(500, 500); obj.CreateBall(); } }
