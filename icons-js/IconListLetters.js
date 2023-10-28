import Svg, { Path } from 'react-native-svg';
         
function IconListLetters({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-letters" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 6h9" /><Path d="M11 12h9" /><Path d="M11 18h9" /><Path d="M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><Path d="M4 8h3" /><Path d="M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6z" /></Svg>;

}
export default IconListLetters;
        