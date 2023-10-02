import Svg, { Path } from 'react-native-svg';
         
function IconFlagDollar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-dollar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.222 14.882a4.998 4.998 0 0 1 -1.222 -.882a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v5" /><Path d="M5 21v-7" /><Path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><Path d="M19 21v1m0 -8v1" /></Svg>;

}
export default IconFlagDollar;
        