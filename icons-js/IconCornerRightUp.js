import Svg, { Path } from 'react-native-svg';
         
function IconCornerRightUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-right-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4" /></Svg>;

}
export default IconCornerRightUp;
        