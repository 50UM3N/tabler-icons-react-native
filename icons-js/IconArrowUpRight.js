import Svg, { Path } from 'react-native-svg';
         
function IconArrowUpRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 7l-10 10" /><Path d="M8 7l9 0l0 9" /></Svg>;

}
export default IconArrowUpRight;
        