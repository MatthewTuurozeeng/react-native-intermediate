import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage({ size }: { size?: number }) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400); // if a size prop is provided, use it, otherwise calculate the size based on the screen width with a maximum of 400

 return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}