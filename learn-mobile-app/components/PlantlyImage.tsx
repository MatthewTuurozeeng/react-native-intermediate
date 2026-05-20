import { Image, useWindowDimensions } from "react-native";

type PlantlyImageProps = {
  size?: number;
  imageUri?: string;
};

export function PlantlyImage({ size, imageUri }: PlantlyImageProps) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400); // if a size prop is provided, use it, otherwise calculate the size based on the screen width with a maximum of 400

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize,  borderRadius: 6, }}
    />
  );
}