import { StyleSheet, View,Button} from "react-native";
import BtnSensor from "../components/BtnSensor";
import Svgtemp from "../assets/svgTemp";
import SvgMotion from "../assets/SvgMotion";
import SvgSmoke from "../assets/SvgSmoke";


export default function Home() { 
  const svgTemp = () => <Svgtemp height={3.5} width={6.1} />;
  const svgSmoke = () => <SvgSmoke height={3.4} width={7.6} />;
  const svgMotion = () => <SvgMotion height={3.2} width={6.7} />;

  return (
    <View style={styles.grid}>
      <View style={styles.items}>
      <BtnSensor
        name={"sensor de temperatura"}
        svg={svgTemp()}
        />
      <BtnSensor
        name={"sensor de humo"}
        svg={svgSmoke()}
        />
      <BtnSensor
        name={"sensor de movimiento"}
        svg={svgMotion()}
        />
      </View>

     
    </View>
  );
}
const styles = StyleSheet.create({
  grid: {
    display:'flex',
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    flexDirection:'column',
    
    
  },items:{
    justifyContent: "center",
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:150
  }
});