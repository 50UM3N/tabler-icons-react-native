import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsJoin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-join" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7h5l3.5 5h9.5" /><Path d="M3 17h5l3.495 -5" /><Path d="M18 15l3 -3l-3 -3" /></Svg>;

}
export default IconArrowsJoin;
                    