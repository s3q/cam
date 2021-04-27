(function () {
    let video = document.getElementById("player")
    let capture = document.getElementById("capture")
    let canvas = document.getElementById("canvas")
    let img = document.getElementById("output")
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);


    navigator.getMedia(
        // 
        {video:true,audio:false},
        stream => {
            video.src = URL.createObjectURL(stream)
            video.play()
        },

        error => {
            console.error(error)
        }
    
    );

    capture.addEventListener("click", takeCapture)

    function takeCapture() {
        width = video.clientWidth
        heigth = video.clientHeight

        let context = canvas.getContext("2d")

        canvas.width = width
        canvas.heigth = heigth

        context.drawImage(video, 0, 0)


        let imgDataUrl = canvas.toDataURL('image/png')
        img.setAttribute("src", imgDataUrl)

    }

}());

