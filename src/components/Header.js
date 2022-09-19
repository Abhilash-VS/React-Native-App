import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, } from "react-native";

function Header() {
  const navigate = useNavigation();
  return (
    <View style={styles.checkoutContainer}>
        <Text style={styles.text}>WhatsUp</Text>
    </View>
  );
}
export default Header;
const styles = StyleSheet.create({
  checkoutContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight:140,
    backgroundColor:'#407D6C',
    paddingBottom:20
    
    
  },
  text: {
    flex: 1,
    color: "#858993",
    textAlign: "center",
    justifyContent: "center",
    color:'#ffffff',
    fontSize:23,
    fontWeight: "700",
    marginTop:60
    
  },
});
