import Svg, { Path } from 'react-native-svg';
         
function IconGeometry({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-geometry" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" /><Path d="M12 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" /><Path d="M12 5v-2" /></Svg>;

}
export default IconGeometry;
        