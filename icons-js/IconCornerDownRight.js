import Svg, { Path } from 'react-native-svg';
         
function IconCornerDownRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-down-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" /></Svg>;

}
export default IconCornerDownRight;
        