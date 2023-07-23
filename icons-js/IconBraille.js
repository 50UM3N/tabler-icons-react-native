import Svg, { Path } from 'react-native-svg';
         
function IconBraille({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-braille" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" /><Path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" /><Path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" /><Path d="M16 12h.01" /><Path d="M8 12h.01" /><Path d="M16 19h.01" /></Svg>;

}
export default IconBraille;
        