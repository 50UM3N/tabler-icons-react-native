import Svg, { Path } from 'react-native-svg';
                    
function IconWorldPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.985 12.518a9 9 0 1 0 -8.45 8.466" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h11.4" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3a16.998 16.998 0 0 1 2.283 12.157" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconWorldPlus;
                    