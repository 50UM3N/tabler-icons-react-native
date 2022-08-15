import Svg, { Path, Line } from "react-native-svg";

function IconBuildingCommunity({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-community" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" /><Line x1={13} y1={7} x2={13} y2={7.01} /><Line x1={17} y1={7} x2={17} y2={7.01} /><Line x1={17} y1={11} x2={17} y2={11.01} /><Line x1={17} y1={15} x2={17} y2={15.01} /></Svg>;
}

export default IconBuildingCommunity;