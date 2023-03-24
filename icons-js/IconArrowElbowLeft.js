import Svg, { Path } from 'react-native-svg';
                    
function IconArrowElbowLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-elbow-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 14v-6h6" /><Path d="M3 8l9 9l9 -9" /></Svg>;

}
export default IconArrowElbowLeft;
                    