async function getImage(url) {
    const blob = await (await fetch(url)).blob();
    const uri = URL.createObjectURL(blob);
    var img = new Image();
    img.src = uri;
    return img;
}
(async function () {
    const infofile = await (await fetch("./text.json")).json();

    $.each($(".text"), async function () {
        $(this).html(infofile.text[$(this).attr("src")]);
    });
})();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

var smoother = ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
});
