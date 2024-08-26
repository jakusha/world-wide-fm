import { wp } from "./responsive-design";

export function truncateText(text: string, maxLength = 125) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    } else {
        return text;
    }
}

export function capitalizeFirstLetter(word: string | undefined) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}


export const  getRandomIndexes = (length: number, count: number): number[] => {
    const indexes = new Set<number>();
    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * length));
    }
    return Array.from(indexes);
  };
  