import Svg, { Path, Line } from "react-native-svg";

function IconBuildingSkyscraper({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={21} x2={21} y2={21} /><Path d="M5 21v-14l8 -4v18" /><Path d="M19 21v-10l-6 -4" /><Line x1={9} y1={9} x2={9} y2={9.01} /><Line x1={9} y1={12} x2={9} y2={12.01} /><Line x1={9} y1={15} x2={9} y2={15.01} /><Line x1={9} y1={18} x2={9} y2={18.01} /></Svg>;
}

export default IconBuildingSkyscraper;