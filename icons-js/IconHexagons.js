import Svg, { Path } from 'react-native-svg';
                    
function IconHexagons({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hexagons" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 18v-5l4 -2l4 2v5l-4 2z" /><Path d="M8 11v-5l4 -2l4 2v5" /><Path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" /></Svg>;

}
export default IconHexagons;
                    