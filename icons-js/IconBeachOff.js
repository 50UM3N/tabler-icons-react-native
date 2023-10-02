import Svg, { Path } from 'react-native-svg';
         
function IconBeachOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-beach-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.071 15.102a7.502 7.502 0 0 0 -8.124 1.648" /><Path d="M10.27 6.269l9.926 5.731a6 6 0 0 0 -10.32 -6.123" /><Path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" /><Path d="M15 9l-.739 1.279" /><Path d="M12.794 12.82l-.794 1.376" /><Path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1.135 -.858" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBeachOff;
        