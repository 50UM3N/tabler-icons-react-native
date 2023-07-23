import Svg, { Path } from 'react-native-svg';
         
function IconZodiacLeo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-leo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 17a4 4 0 1 0 8 0" /><Path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M11 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M7 7c0 3 2 5 2 9" /><Path d="M15 7c0 4 -2 6 -2 10" /></Svg>;

}
export default IconZodiacLeo;
        