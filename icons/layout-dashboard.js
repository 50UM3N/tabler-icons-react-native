import Svg, { Path } from "react-native-svg";

function IconLayoutDashboard({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4h6v8h-6z" /><Path d="M4 16h6v4h-6z" /><Path d="M14 12h6v8h-6z" /><Path d="M14 4h6v4h-6z" /></Svg>;
}

export default IconLayoutDashboard;