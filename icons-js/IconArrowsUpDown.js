import Svg, { Path } from 'react-native-svg';
         
function IconArrowsUpDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-up-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3l0 18" /><Path d="M10 6l-3 -3l-3 3" /><Path d="M20 18l-3 3l-3 -3" /><Path d="M17 21l0 -18" /></Svg>;

}
export default IconArrowsUpDown;
        