import Svg, { Path } from 'react-native-svg';
         
function IconList({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 6l11 0" /><Path d="M9 12l11 0" /><Path d="M9 18l11 0" /><Path d="M5 6l0 .01" /><Path d="M5 12l0 .01" /><Path d="M5 18l0 .01" /></Svg>;

}
export default IconList;
        