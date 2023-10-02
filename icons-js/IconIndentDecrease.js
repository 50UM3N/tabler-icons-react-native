import Svg, { Path } from 'react-native-svg';
         
function IconIndentDecrease({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-indent-decrease" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 6l-7 0" /><Path d="M20 12l-9 0" /><Path d="M20 18l-7 0" /><Path d="M8 8l-4 4l4 4" /></Svg>;

}
export default IconIndentDecrease;
        