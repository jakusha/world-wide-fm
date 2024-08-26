import { Dimensions } from "react-native";

const { width: containerWidth, height: containerHeight } = Dimensions.get('window');

const useRandomPosition = () => {
    const top = Math.random() * (containerHeight - 50); // 50 is an arbitrary value for text height
    const left = Math.random() * (containerWidth - 100); // 100 is an arbitrary value for text width
    return { top, left };
}

export default useRandomPosition;