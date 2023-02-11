import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceTvOld({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tv-old" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M16 3l-4 4l-4 -4" /><Path d="M15 7v13" /><Path d="M18 15v.01" /><Path d="M18 12v.01" /></Svg>;

}
export default IconDeviceTvOld;
                    