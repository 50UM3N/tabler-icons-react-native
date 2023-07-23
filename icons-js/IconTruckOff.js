import Svg, { Path } from 'react-native-svg';
         
function IconTruckOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M15.585 15.586a2 2 0 0 0 2.826 2.831" /><Path d="M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTruckOff;
        