import React from "react";
import { Controller } from "react-hook-form";
import {
  View,
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
  ViewStyle,
  Pressable,
} from "react-native";
import { BaseInput } from "./types";
import theme from "@themes/index";
import { hp } from "@utils/responsive-design";
import { SVGIcon } from "@shared/SVGIcon";

interface InputProps extends TextInputProps, BaseInput {
  inputBodycontainer?: ViewStyle;
  textInputStyle?: ViewStyle;
  hasIcon?: boolean;
  iconName?: string;
  hasBtn?: boolean;
  BtnComp?: React.ReactElement;
  isSearch?: boolean;
  password?: boolean;
  secureTextEntry?: boolean;
  toggleSecure?: () => void;
}

const Input = ({
  control,
  label,
  errorText,
  placeholder,
  name = "",
  inputBodycontainer,
  textInputStyle,
  hasIcon,
  iconName,
  hasBtn,
  BtnComp,
  isSearch,
  password,
  secureTextEntry,
  toggleSecure,
  ...props
}: InputProps) => {
  return (
    <View>
      <View style={[styles.inputBodycontainer, inputBodycontainer]}>
        {label && <Text style={[styles.label]}>{label}</Text>}

        {isSearch && (
          <View style={{ marginRight: 8 }}>
            <SVGIcon name="search" color={theme.colors.BLACK} />
          </View>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              secureTextEntry={secureTextEntry}
              style={[styles.textInput, textInputStyle]}
              {...props}
            />
          )}
          name={name}
        />

        {password && (
          <Pressable style={{ marginRight: 8 }} onPress={toggleSecure}>
            {secureTextEntry ? (
              <SVGIcon name="eyes-off" color={theme.colors.BLACK} />
            ) : (
              <SVGIcon name="eyes" color={theme.colors.BLACK} />
            )}
          </Pressable>
        )}

        {hasBtn && BtnComp}
      </View>
      <View style={{ height: 20, marginTop: 4 }}>
        {errorText && <Text style={styles.errorTxt}>{errorText}</Text>}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBodycontainer: {
    borderWidth: 1,
    borderColor: theme.colors.GREY_300,
    position: "relative",
    borderRadius: 8,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    padding: 8,
    color: theme.colors.BLACK,
    flex: 1,
  },
  label: {
    position: "absolute",
    top: -8,
    left: 16,
    backgroundColor: theme.colors.WHITE,
  },
  errorTxt: {
    color: theme.colors.RED_100,
    fontSize: hp(12),
  },
});
