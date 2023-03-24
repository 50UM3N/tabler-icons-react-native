import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceImacPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-imac-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 17h-9a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" /><Path d="M3 13h18" /><Path d="M8 21h5" /><Path d="M10 17l-.5 4" /><Path d="M17 17v5" /><Path d="M21 17v5" /></Svg>;

}
export default IconDeviceImacPause;
                    