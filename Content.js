let saulImages = [

    "https://i.kym-cdn.com/entries/icons/mobile/000/040/009/3dsaulcover.jpg",
    "https://static.wikia.nocookie.net/breakingbad/images/8/8b/Saulgoodman.png/revision/latest/scale-to-width-down/350?cb=20140712161851&path-prefix=de",
    "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
    "https://i.pinimg.com/564x/78/48/29/7848297c04b1d0f4d927b8b9047d7631.jpg",


]

const imgs = document.getElementsByTagName("img")

for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * saulImages.length)
    imgs[i].src = saulImages[randomImg]
}

const headers = document.getElementsByTagName("h2")

for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "saul goodman"
}
