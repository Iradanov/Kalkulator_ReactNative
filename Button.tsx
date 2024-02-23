import { useContext } from "react";
import { TouchableOpacity,Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps{
    onPress: () => void;
    title:string;
    isZero?: boolean;
}

export default function Button({title, onPress, isZero}: ButtonProps){
    return (
        <TouchableOpacity 
            style={
                isZero ? 
                Styles.btnZero:
                Styles.btnGrey} 
            onPress={onPress}>
            <Text style={Styles.smallTextDark }>
                {title}
            </Text>
        </TouchableOpacity>
    )
}