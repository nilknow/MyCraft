// Generate map
// Adjust noise lacunarity for frequency of detail
export function perlinNoise2D(x, y, scale, octaves, persistence, lacunarity) {
    let noiseValue = 0;
    let frequency = 1;
    let amplitude = 1;
    for (let i = 0; i < octaves; i++) {
        noiseValue += amplitude * noise.simplex2(x * scale * frequency, y * scale * frequency);
        frequency *= lacunarity;
        amplitude *= persistence;
    }
    return noiseValue;
}