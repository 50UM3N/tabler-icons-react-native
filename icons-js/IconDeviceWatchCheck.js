import Svg, { Path } from 'react-native-svg';
         
function IconDeviceWatchCheck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v5.5" /><Path d="M9 18v3h2.5" /><Path d="M9 6v-3h6v3" /><Path d="M15 19l2 2l4 -4" /></Svg>;

}
export default IconDeviceWatchCheck;
        