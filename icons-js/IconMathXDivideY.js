import Svg, { Path } from 'react-native-svg';
         
function IconMathXDivideY({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-math-x-divide-y" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 3l6 6" /><Path d="M9 9l6 -6" /><Path d="M9 15l3 4.5" /><Path d="M15 15l-4.5 7" /><Path d="M5 12h14" /></Svg>;

}
export default IconMathXDivideY;
        