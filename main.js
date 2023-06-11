async function getImage(url) {
    const blob = await (await fetch(url)).blob();
    const uri = URL.createObjectURL(blob);
    var img = new Image();
    img.src = uri;
    return img;
}
(async function () {
    const infofile = await (await fetch("./text.json")).json();

    let local = "right";
    let left = $(".left.side")[0];
    let right = $(".right.side")[0];

    for (let i = 0; i < infofile.image.count; i++) {
        if (local == "right") {
            right.innerHTML += `<div class="text" src="${i}">${infofile.text[i]}</div>`;
            left.innerHTML += `<img src="./images/${i + 1}.jpg" alt="${
                i + 1
            }" />`;
            local = "left";
        } else if (local == "left") {
            right.innerHTML += `<img src="./images/${i + 1}.jpg" alt="${
                i + 1
            }" />`;
            left.innerHTML += `<div class="text" src="${i}">${infofile.text[i]}</div>`;
            local = "right";
        }
    }
    // $.each($(".text"), async function () {
    //     $(this).html(infofile.text[$(this).attr("src")]);
    // });
})();

var is_mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
    ) || document.body.clientWidth <= 700;

if (document.body.clientWidth <= 1000 && document.body.clientWidth > 700) {
    console.log(document.body.clientWidth);
    $(".s-content .side").css({
        background: "none",
        "box-shadow": "none",
    });
    $(".text").css({
        "max-width": "none",
    });
    $(".start").css({
        margin: "0px",
        width: "100%",
    });
    $(".s-content").css({
        width: "100%",
        margin: "0px",
        padding: "0px",
        "justify-content": "space-evenly",
    });
} else if (is_mobile) {
    (async function () {
        const l = $(".s-content > .left")[0].children;
        const r = $(".s-content > .right")[0].children;
        $(".s-content > .left").remove();
        $(".s-content > .right").remove();
        $(".s-content")
            .append(l)
            .append(r)
            .css({ "flex-direction": "column", "align-items": "center" });

        $(".start").css({
            margin: "0px",
            width: "100%",
        });
        $(".start > img").css({
            width: "80vw",
        });
        $(".s-content img").css({
            width: "100vw",
            height: "auto",
            "border-radius": "0px",
            margin: "0px",
            padding: "0px",
        });
        $(".text").css({
            "max-width": "90%",
            margin: "1rem 0px",
            padding: "0px",
        });
    })();
} else {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    var smoother = ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
    });

    new ScrollTrigger({});
}
