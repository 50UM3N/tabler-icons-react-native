import Svg, { Path } from 'react-native-svg';
                    
function IconLayoutOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4a2 2 0 0 1 2 2m-1.162 2.816a1.993 1.993 0 0 1 -.838 .184h-2a2 2 0 0 1 -2 -2v-1c0 -.549 .221 -1.046 .58 -1.407" /><Path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><Path d="M14 10v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v10m-.595 3.423a2 2 0 0 1 -1.405 .577h-2a2 2 0 0 1 -2 -2v-4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconLayoutOff;
                    