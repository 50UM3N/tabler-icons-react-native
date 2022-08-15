import Svg, { Path, Circle, Line } from "react-native-svg";

function IconBrandChrome({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-chrome" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={12} cy={12} r={3} /><Line x1={12} y1={9} x2={20.4} y2={9} /><Line x1={12} y1={9} x2={20.4} y2={9} transform="rotate(120 12 12)" /><Line x1={12} y1={9} x2={20.4} y2={9} transform="rotate(240 12 12)" /></Svg>;
}

export default IconBrandChrome;