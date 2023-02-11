import Svg, { Path } from 'react-native-svg';
                    
function IconWheelchairOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wheelchair-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M17.582 17.59a2 2 0 0 0 2.833 2.824" /><Path d="M14 14h-1.4" /><Path d="M6 6v5" /><Path d="M6 8h2m4 0h5" /><Path d="M15 8v3" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconWheelchairOff;
                    