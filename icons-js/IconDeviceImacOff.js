import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceImacOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-imac-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707" /><Path d="M3 13h10m4 0h4" /><Path d="M8 21h8" /><Path d="M10 17l-.5 4" /><Path d="M14 17l.5 4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconDeviceImacOff;
                    