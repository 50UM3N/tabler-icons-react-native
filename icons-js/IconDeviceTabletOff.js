import Svg, { Path } from 'react-native-svg';
         
function IconDeviceTabletOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-15" /><Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconDeviceTabletOff;
        