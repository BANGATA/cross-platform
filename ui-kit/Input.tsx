import {
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

interface IInput {
  label: string;
  onChangeText: () => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  value?: any;
  customStyles?: object;
}

const Input = ({
  label,
  onChangeText,
  keyboardType,
  placeholder,
  value,
  customStyles,
}: IInput) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        style={[styles.input, customStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});

export default Input;
