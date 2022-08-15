import Svg, { Path, Circle } from "react-native-svg";

function IconLogicNor({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logic-nor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-4" /><Path d="M2 9h5" /><Path d="M2 15h5" /><Path d="M6 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" /><Circle cx={16} cy={12} r={2} /></Svg>;
}

export default IconLogicNor;