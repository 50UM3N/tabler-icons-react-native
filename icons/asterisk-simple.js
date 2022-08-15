import Svg, { Path } from "react-native-svg";

function IconAsteriskSimple({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-asterisk-simple" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12v-9" /><Path d="M12 12l-9 -2.5" /><Path d="M12 12l9 -2.5" /><Path d="M12 12l6 8.5" /><Path d="M12 12l-6 8.5" /></Svg>;
}

export default IconAsteriskSimple;