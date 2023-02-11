import Svg, { Path } from 'react-native-svg';
                    
function IconTransformFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transform-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 13v.875c0 3.383 2.686 6.125 6 6.125" /><Path d="M16 9l2 2l2 -2" /><Path d="M18 10v-.875c0 -3.383 -2.686 -6.125 -6 -6.125" /><Path d="M3 15l2 -2l2 2" /><Path d="M6 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="currentColor" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="currentColor" /></Svg>;

}
export default IconTransformFilled;
                    