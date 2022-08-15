import Svg, { Path, Circle } from "react-native-svg";

function IconMassage({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-massage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={4} cy={17} r={1} /><Circle cx={9} cy={5} r={1} /><Path d="M4 22l4 -2v-3h12" /><Path d="M11 20h9" /><Path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" /></Svg>;
}

export default IconMassage;