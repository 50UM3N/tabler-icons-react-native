import Svg, { Path } from 'react-native-svg';
                    
function IconAtom2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-atom-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 21l0 .01" /><Path d="M3 9l0 .01" /><Path d="M21 9l0 .01" /><Path d="M8 20.1a9 9 0 0 1 -5 -7.1" /><Path d="M16 20.1a9 9 0 0 0 5 -7.1" /><Path d="M6.2 5a9 9 0 0 1 11.4 0" /></Svg>;

}
export default IconAtom2;
                    