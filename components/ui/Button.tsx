import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, borderRadius, shadows, typography } from "../../styles/theme";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  fullWidth = true,
  style,
  textStyle,
}) => {
  const variantStyle =
    variant === "primary"
      ? styles.primary
      : variant === "secondary"
      ? styles.secondary
      : styles.ghost;

  const sizeStyle =
    size === "large"
      ? styles.large
      : size === "small"
      ? styles.small
      : styles.medium;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.base,
        variantStyle,
        sizeStyle,
        fullWidth && styles.fullWidth,
        style,
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          variant === "ghost" ? styles.textGhost : undefined,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.md,
  },
  fullWidth: {
    alignSelf: "stretch",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: "#EFEFEF",
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  text: {
    color: "#FFFFFF",
    fontSize: typography.sizes.base,
    fontFamily: typography.families.accent,
    fontWeight: typography.weights.bold,
  },
  textGhost: {
    color: colors.textPrimary,
  },
});

export default Button;
