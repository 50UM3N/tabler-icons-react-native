import Svg, { Path, Circle, Polyline } from "react-native-svg";

function IconAward({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={9} r={6} /><Polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" /><Polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" /></Svg>;
}

export default IconAward;