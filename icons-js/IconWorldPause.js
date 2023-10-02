import Svg, { Path } from 'react-native-svg';
         
function IconWorldPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.945 12.997a9 9 0 1 0 -7.928 7.945" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h9.9" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3a16.992 16.992 0 0 1 2.51 10.526" /><Path d="M17 17v5" /><Path d="M21 17v5" /></Svg>;

}
export default IconWorldPause;
        