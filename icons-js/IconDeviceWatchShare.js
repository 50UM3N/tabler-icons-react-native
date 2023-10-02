import Svg, { Path } from 'react-native-svg';
         
function IconDeviceWatchShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.5 18h-3.5a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" /><Path d="M9 18v3h3" /><Path d="M9 6v-3h6v3" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconDeviceWatchShare;
        