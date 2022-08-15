import Svg, { Path, Circle, Line } from "react-native-svg";

function IconTruckDelivery({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={17} r={2} /><Circle cx={17} cy={17} r={2} /><Path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><Line x1={3} y1={9} x2={7} y2={9} /></Svg>;
}

export default IconTruckDelivery;