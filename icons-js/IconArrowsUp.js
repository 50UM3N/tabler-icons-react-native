import Svg, { Path } from 'react-native-svg';
         
function IconArrowsUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3l0 18" /><Path d="M4 6l3 -3l3 3" /><Path d="M20 6l-3 -3l-3 3" /><Path d="M7 3l0 18" /></Svg>;

}
export default IconArrowsUp;
        