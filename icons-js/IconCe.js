import Svg, { Path } from 'react-native-svg';
         
function IconCe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ce" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 6a6 6 0 1 0 0 12" /><Path d="M21 6a6 6 0 1 0 0 12" /><Path d="M15 12h6" /></Svg>;

}
export default IconCe;
        