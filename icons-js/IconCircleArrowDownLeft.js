import Svg, { Path } from 'react-native-svg';
                    
function IconCircleArrowDownLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-down-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><Path d="M15 9l-6 6" /><Path d="M15 15h-6v-6" /></Svg>;

}
export default IconCircleArrowDownLeft;
                    