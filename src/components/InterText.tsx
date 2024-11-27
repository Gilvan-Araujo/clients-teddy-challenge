import { Text, TextStyle } from "react-native";

enum TextWeight {
  regular = "Inter_400Regular",
  bold = "Inter_700Bold",
}

export default function InterText({
  children,
  style,
  weight = "regular",
}: {
  children: React.ReactNode;
  style?: TextStyle;
  weight?: keyof typeof TextWeight;
}) {
  return (
    <Text style={{ ...style, fontFamily: TextWeight[weight] }}>{children}</Text>
  );
}
