import Svg, { Path, Circle, Polyline } from "react-native-svg";

function IconTir({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tir" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={17} r={2} /><Circle cx={17} cy={17} r={2} /><Path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" /><Path d="M12 18v-13h3" /><Polyline points="3 17 3 12 12 12" /></Svg>;
}

export default IconTir;