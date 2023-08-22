import * as PIXI from 'pixi.js';
import {useEffect, useRef} from "react";
const SpriteAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const app = new PIXI.Application({
            width: 100,
            height: 100,
            backgroundColor: 0xAAAAAA,
        });

        const container = containerRef.current;

        if (container) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            container.appendChild(app.view);

            // PIXI.js 로직 추가
        }
    }, []);

    return <div ref={containerRef} />;
}

export default SpriteAnimation