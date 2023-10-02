import Svg, { Path } from 'react-native-svg';
         
function IconWorldShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h9.4" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconWorldShare;
        