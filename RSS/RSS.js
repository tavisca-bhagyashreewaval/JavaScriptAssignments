var containe;

window.onload = function () {
    containe = document.createElement("div");
    containe.className = "container MainContainerStyle";
    //containe.style.paddingLeft = '150px';
    //containe.style.paddingRight = '150px';
    //containe.style.backgroundColor = '#B6B7BC';
    containe.id = "MainContainer";
    document.body.appendChild(containe);

    header_part1 = document.createElement('div');
    header_part1.className = "HeaderPart1Style";
    //header_part1.style.height = '80px';
    //header_part1.style.paddingTop = '1px';
    //header_part1.style.paddingLeft = '10px';
    //header_part1.style.backgroundColor = '#4B6C9E';
    header_part1.innerHTML = "<p class=\"RssFeedTextStyle\"> RSS FEED READER 1.0 !</p>";
    document.getElementById("MainContainer").appendChild(header_part1);

    header_part2 = document.createElement('div');
    header_part2.className = "HeaderPart2Style";
    //header_part2.style.height = '60px';
    //header_part2.style.paddingTop = '1px';
    //header_part2.style.paddingLeft = '10px';
    //header_part2.style.paddingRight = '10px';
    //header_part2.style.backgroundColor = '#3A4F63';
    header_part2.innerHTML = "<p class=\"RSSHeaderWelcomeTextStyle\"> WELCOME TO RSS READER !! <span class=\"span1\">RSS FEEDS URL :<input type=\"text\" id =\"url\" size=\"50\" class=\"input1\"></span></p>";
    document.getElementById("MainContainer").appendChild(header_part2);

    document.getElementById("url").addEventListener("keypress",start);
}

var start = function (event, a, b) {
    var keyCode = event.keyCode || event.which;
    if (keyCode == 13) {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText);
                var i = 0;
                var SubContainerVar = document.createElement("div");
                SubContainerVar.className = "container SubContainerStyle";
                SubContainerVar.id = "SubContainer";
                document.getElementById("MainContainer").appendChild(SubContainerVar);
                var title_div = document.createElement('div');
                title_div.id = "title_div";
                title_div.innerHTML = "<p class=\"titleDivStyle\">" + obj.responseData.feed.title + "<br></p><p class=\"setFontStyle\">" + obj.responseData.feed.description + "<br></p>"
                document.getElementById("SubContainer").appendChild(title_div);

                while (obj.responseData.feed != 'undefined') {

                    var div = document.createElement("div");
                    if (i % 2 == 0) {
                        div.className = "contentStyle1";

                    }
                    else
                        div.className = "contentStyle2";
                    
                    document.getElementById("SubContainer").appendChild(div);
                    div.innerHTML = "<p style=\"font-size:20px\"><a href='#' style=\"color:blue;font-weight:bold\">" + obj.responseData.feed.entries[i].title + "</a><span style=\"float:right\" >" + obj.responseData.feed.entries[i].publishedDate + "</span><br>" + obj.responseData.feed.entries[i].contentSnippet + "</p><br>";
                    i++;
                }
            }
        }
        xmlhttp.open("GET", "http://googlefeed.appacitive.com/?q="+document.getElementById('url').value, true);
        xmlhttp.send();
    }

}
   



