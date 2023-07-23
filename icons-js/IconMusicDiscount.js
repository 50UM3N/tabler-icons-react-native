import Svg, { Path } from 'react-native-svg';
         
function IconMusicDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-music-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><Path d="M9 17v-13h10v9" /><Path d="M9 8h10" /><Path d="M16 21l5 -5" /><Path d="M21 21v.01" /><Path d="M16 16v.01" /></Svg>;

}
export default IconMusicDiscount;
        