import Svg, { Path } from 'react-native-svg';
                    
function IconCornerUpLeftDouble({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-up-left-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" /><Path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" /></Svg>;

}
export default IconCornerUpLeftDouble;
                    