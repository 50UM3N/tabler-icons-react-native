import Svg, { Path } from 'react-native-svg';
         
function IconTheater({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-theater" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20h16" /><Path d="M20 16v-10a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v10l4 -6c2.667 1.333 5.333 1.333 8 0l4 6z" /></Svg>;

}
export default IconTheater;
        