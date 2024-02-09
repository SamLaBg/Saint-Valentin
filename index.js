init = () => {


    const images = [
        'https://wallpapers.com/images/hd/cute-love-pictures-4iz8w9kg388vrjtx.jpg',
        'https://ih1.redbubble.net/image.3898852877.7852/st,small,507x507-pad,600x600,f8f8f8.jpg',
        'https://storage.googleapis.com/sticker-prod/IUp1SVCEnSPNKZpJSJ7L/4.png',
        'https://img-10.stickers.cloud/packs/99fd46c2-4ec1-42ff-90e4-39988aaebcd2/webp/21d4bb07-e72d-4866-bf41-4a2a0bb7602c.webp',
        'https://ih1.redbubble.net/image.1194401068.7226/st,small,507x507-pad,600x600,f8f8f8.jpg',
        'https://i.pinimg.com/736x/ca/63/94/ca63941b083f3db6963071f0fc3ebcec.jpg'
    ];

    const heart = document.querySelector('#heart');
    const modal = document.querySelector('#modal');
    const modalText = document.querySelector('#modalText');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    let image = 1;


    let src = 'glee.mp3';
    let audio = new Audio(src);
    audio.loop = false;
    let currentPos = 0;

    function modalOff() {
        if (document.fullscreenEnabled) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }

        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modalText.style.opacity = '0';
        modalText.style.visibility = 'hidden';
        pauseIt();
    }

    function modalOn() {
        modal.style.visibility = 'visible';
        modal.style.opacity = '0.85';
        modalText.style.visibility = 'visible';
        modalText.style.opacity = '1';
    }

    function pauseIt() {
        audio.paused ? audio.play() : audio.pause();

        heart.style.visibility = 'visible';
        heart.style.animationPlayState =
            heart.style.animationPlayState == 'running' ?
                'paused' : 'running';

        image1.style.animationPlayState =
            image1.style.animationPlayState == 'running' ?
                'paused' : 'running';
        image2.style.animationPlayState =
            image2.style.animationPlayState == 'running' ?
                'paused' : 'running';
    }

    function switchImage(currentPos) {

        if (currentPos >= images.length) {
            currentPos = 0;
        }

        image = (currentPos % 2 == 0) ? 1 : 2;

        switch (image) {
            case 1:
                image2.style.opacity = '0';
                image1.src = images[currentPos];
                image1.style.opacity = '1';
                break;

            case 2:
                image1.style.opacity = '0';
                image2.src = images[currentPos];
                image2.style.opacity = '1';
                break;
        }
    }

    audio.addEventListener('playing', function () {
        audio.ontimeupdate = function () {
            let ct = audio.currentTime;

            switch (true) {
                case ct > 184:
                    modalOn();
                    switchImage(0);
                    break;

                case ct > 179.65:
                    switchImage(17);
                    let compStyles = window.getComputedStyle(heart);
                    result = compStyles.getPropertyValue('transform').split(', ')[3];
                    if (parseInt(result) <= 0) {
                        heart.style.animationPlayState = 'paused';
                        heart.style.visibility = 'hidden';
                        image1.style.animationPlayState = 'paused';
                        image2.style.animationPlayState = 'paused';
                        heart.classList.remove("heart");
                    }
                    break;

                case ct > 163:
                    switchImage(17);
                    break;

                case ct > 147:
                    switchImage(16);
                    break;

                case ct > 139:
                    switchImage(15);
                    break;

                case ct > 130:
                    switchImage(14);
                    break;

                case ct > 124:
                    switchImage(13);
                    break;

                case ct > 116:
                    switchImage(12);
                    break;

                case ct > 106:
                    switchImage(11);
                    break;

                case ct > 99:
                    switchImage(10);
                    break;

                case ct > 90:
                    switchImage(9);
                    break;

                case ct > 80:
                    switchImage(8);
                    break;

                case ct > 71:
                    switchImage(7);
                    break;

                case ct > 63:
                    switchImage(6);
                    break;

                case ct > 57:
                    switchImage(5);
                    break;

                case ct > 46:
                    switchImage(4);
                    break;

                case ct > 37:
                    switchImage(3);
                    break;

                case ct > 29:
                    switchImage(2);
                    break;

                case ct > 21:
                    switchImage(1);
                    break;

                case ct < 1:
                    switchImage(0);
                    heart.classList.add("heart");
                    break;
            }
        }
    });

    audio.addEventListener('ended', function () {
        audio.pause();
        audio.currentTime = 0;
    });

    document.addEventListener(
        'ontouchstart' in window ? 'touchend' : 'mousedown',
        modalOff);

    modalOn();
}

document.addEventListener('DOMContentLoaded', init);
