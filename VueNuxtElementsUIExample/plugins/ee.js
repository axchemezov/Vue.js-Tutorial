window.onload = function() {
    var i = 1;
    var pageUrlTemplate = "https://ia800703.us.archive.org/BookReader/BookReaderImages.php?zip=/12/items/racialethnicrela00mcle/racialethnicrela00mcle_jp2.zip&file=racialethnicrela00mcle_jp2/racialethnicrela00mcle_#re#.jp2&scale=3&rotate=0";
    var pageUrl = "";
    var app = document.querySelector('div');

    while (i < 10) {
        pageUrl = pageUrlTemplate.replace("#re#", "000"+ i);

        eval("var link" + i + " = document.createElement('a')");
        eval("link" + i + ".href = pageUrl");
        eval("link" + i + ".innerHTML = " + i);
        eval("app.appendChild(link" + i + ")");

        var fileName = "racialethnicrela00mcle_000" + i + ".jpg";
        eval("link" + i + ".download = fileName");

        console.log(i);
        //eval("var e" + i + " = document.createEvent('MouseEvents')");
        //eval("e" + i + ".initEvent('click' ,true ,true)");
        //eval("link.dispatchEvent(e" + i + ")");

        i++;

    }
}
