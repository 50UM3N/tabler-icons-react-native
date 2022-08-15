import Svg, { Path, Line } from "react-native-svg";

function IconGasStation({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gas-station" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" /><Path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" /><Line x1={3} y1={20} x2={15} y2={20} /><Path d="M18 7v1a1 1 0 0 0 1 1h1" /><Line x1={4} y1={11} x2={14} y2={11} /></Svg>;
}

export default IconGasStation;