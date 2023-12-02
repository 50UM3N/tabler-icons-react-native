import Svg, { Path } from 'react-native-svg';
         
function IconDirectionArrows({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-direction-arrows" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><Path d="M8 11l-1 1l1 1" /><Path d="M11 8l1 -1l1 1" /><Path d="M16 11l1 1l-1 1" /><Path d="M11 16l1 1l1 -1" /></Svg>;

}
export default IconDirectionArrows;
        