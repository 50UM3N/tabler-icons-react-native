import Svg, { Path } from 'react-native-svg';
         
function IconLogicXor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logic-xor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-4" /><Path d="M2 9h6" /><Path d="M2 15h6" /><Path d="M7 19c1.778 -4.667 1.778 -9.333 0 -14" /><Path d="M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" /></Svg>;

}
export default IconLogicXor;
        