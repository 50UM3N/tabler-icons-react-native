import Svg, { Path } from 'react-native-svg';
                    
function IconMan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-man" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 16v5" /><Path d="M14 16v5" /><Path d="M9 9h6l-1 7h-4z" /><Path d="M5 11c1.333 -1.333 2.667 -2 4 -2" /><Path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" /><Path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconMan;
                    