import { Button, View, Text } from "react-native";

interface ICounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
  value: number;
}

const Counter = ({
  handleDecrement,
  handleIncrement,
  handlePassValue,
  value,
}: ICounter) => {
  return (
    <View>
      <Text>{value}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
      <Button title="Pass Value" onPress={handlePassValue} />
    </View>
  );
};

export default Counter;
