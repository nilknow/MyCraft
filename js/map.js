import {perlinNoise2D} from "./noise.js";
import {createCube} from "./cube.js";
import {bedrockTexture, iceTexture, sandTexture} from "./texture.js";

export function initMap(group){
    const mapSize = 100; // Adjust map size as needed
    const noiseScale = 0.01; // Adjust noise scale for terrain variation
    const noiseOctaves = 4; // Adjust noise octaves for detail level
    const noisePersistence = 0.5; // Adjust noise persistence for smoother transitions
    const noiseLacunarity = 2;

    for (let x = 0; x < mapSize; x++) {
        for (let z = 0; z < mapSize; z++) {
            // Generate terrain height using Perlin noise
            const noiseValue = perlinNoise2D(x, z, noiseScale, noiseOctaves, noisePersistence, noiseLacunarity);
            // Determine texture based on height
            let texture = bedrockTexture;
            if (noiseValue < 0.2) {
                texture = sandTexture;
            }
            if (noiseValue < 0.1) {
                texture = iceTexture;
            }

            // Create cube with appropriate texture
            const cube = createCube(texture, x - mapSize / 2, -1, z - mapSize / 2);
            group.add(cube)
            if (texture === bedrockTexture) {
                for (let i = 0; i < noiseValue * 10; i++) {
                    const cube = createCube(texture, x - mapSize / 2, i, z - mapSize / 2);
                    group.add(cube)
                }
            }
        }
    }
}