/*
Github: https://github.com/Guilherme-De-Marchi/about-paleontology
License: MIT
*/

function maximizeImageViewer(event) {

    document.querySelector('#image-viewer').style.display = 'block';
    document.querySelector('#image-viewer-img').src = event.target.src;

}

function closeImageViewer() {

    document.querySelector('#image-viewer').style.display = 'none';

}

function slideImageViewer(direction) {

    let actual_image = document.querySelector('#image-viewer-img');
    let images_list = document.querySelectorAll('img:not(#image-viewer-img)');

    for (let index = 0; index < images_list.length; index++) {

        element = images_list.item(index);
        if (actual_image.src === element.src) {

            let target_index = index + direction;
            if (direction === -1 && index === 0) {

                target_index = images_list.length - 1;

            } else if (direction === 1 && index === images_list.length - 1) {

                target_index = 0;

            }

            document.querySelector('#image-viewer-img').src = (images_list.item(target_index)).src;
            break;

        }
    }
}

document.querySelectorAll('img').forEach((element) => { element.addEventListener('click', maximizeImageViewer) });
document.querySelector('#image-viewer-controls #closeImageViewer').addEventListener('click', closeImageViewer);
document.querySelector('#image-viewer-controls #imageLeft').addEventListener('click', () => { slideImageViewer(-1) });
document.querySelector('#image-viewer-controls #imageRight').addEventListener('click', () => { slideImageViewer(1) });