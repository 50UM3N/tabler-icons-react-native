import Svg, { Path } from 'react-native-svg';
         
function IconArrowRightRhombus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-rhombus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 12h13" /><Path d="M18 9l3 3l-3 3" /><Path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z" /></Svg>;

}
export default IconArrowRightRhombus;
        