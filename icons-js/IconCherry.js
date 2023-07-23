import Svg, { Path } from 'react-native-svg';
         
function IconCherry({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cherry" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><Path d="M17 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M9 13c.366 -2 1.866 -3.873 4.5 -5.6" /><Path d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" /><Path d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" /></Svg>;

}
export default IconCherry;
        