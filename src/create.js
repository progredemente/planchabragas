export function create(encoder, context, image, customImage, scaleFactor, side, clear) {
    encoder.setRepeat(0);
    encoder.setDelay(100);
    for(let i = 0; i < 5; i++) {
        clear(context);
        draw(0, context, image, customImage, scaleFactor, side);
        encoder.addFrame(context);
        clear(context);
        draw(1, context, image, customImage, scaleFactor, side);
        encoder.addFrame(context);
        clear(context);
        draw(2, context, image, customImage, scaleFactor, side);
        encoder.addFrame(context);
        clear(context);
        draw(1, context, image, customImage, scaleFactor, side);
        encoder.addFrame(context);
    }
    encoder.setDelay(1500);
    clear(context);
    draw(3, context, image, customImage, scaleFactor, side);
    encoder.addFrame(context);
}


export function draw(frameNumber, context, image, customImage, scaleFactor, side) {
    if(customImage){
        let x = 559, y = 321;
        if(frameNumber === 3) {
            x = 632;
            y = 224;
        }
        context.drawImage(customImage, 0, 0, customImage.width, customImage.height, x * scaleFactor, y * scaleFactor, 598 * scaleFactor, 598 * scaleFactor);
    }
    context.drawImage(image, side * frameNumber, 0, side, side, 0, 0, side * scaleFactor, side * scaleFactor);
    drawUrl(context, scaleFactor, side);
}

export function drawUrl(context, scaleFactor, side) {
    context.font = `${80 * scaleFactor}px ComicTypo`;
    context.textAlign = "center";
    context.fillStyle = "rgba(0, 0, 0, .5)";
    context.fillText("progredemente.com/planchabragas", side * scaleFactor / 2 , 70 * scaleFactor);
}