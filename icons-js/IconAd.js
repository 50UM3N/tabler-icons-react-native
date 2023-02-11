import Svg, { Path } from 'react-native-svg';
                    
function IconAd({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ad" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M7 15v-4a2 2 0 0 1 4 0v4" /><Path d="M7 13l4 0" /><Path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" /></Svg>;

}
export default IconAd;
                    