import {seeds} from "../seed";

export const getRandomSeedServer = () => {
    return seeds[Math.floor(Math.random() * seeds.length)]
}
