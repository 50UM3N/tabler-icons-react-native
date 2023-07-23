import Svg, { Path } from 'react-native-svg';
         
function IconIceCreamOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ice-cream-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21.5v-4.5" /><Path d="M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294" /><Path d="M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518" /><Path d="M8 14.5l4.488 -1.964" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconIceCreamOff;
        