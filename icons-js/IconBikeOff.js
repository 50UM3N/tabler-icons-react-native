import Svg, { Path } from 'react-native-svg';
         
function IconBikeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bike-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M16.437 16.44a3 3 0 0 0 4.123 4.123m1.44 -2.563a3 3 0 0 0 -3 -3" /><Path d="M12 19v-4l-3 -3l1.665 -1.332m2.215 -1.772l1.12 -.896l2 3h3" /><Path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBikeOff;
        