import Svg, { Path } from 'react-native-svg';
         
function IconMathXMinusX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-math-x-minus-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 9l6 6" /><Path d="M2 15l6 -6" /><Path d="M16 9l6 6" /><Path d="M16 15l6 -6" /><Path d="M10 12h4" /></Svg>;

}
export default IconMathXMinusX;
        