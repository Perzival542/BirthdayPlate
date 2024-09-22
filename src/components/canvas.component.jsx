import React, { useRef, useEffect } from 'react';

export const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const image = new Image();
        image.src = './assets/img/template_birthday.png';

        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={500}
        />
    )
}