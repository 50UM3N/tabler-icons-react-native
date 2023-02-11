import Svg, { Path } from 'react-native-svg';
                    
function IconSmoking({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-smoking" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 13m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><Path d="M8 13l0 4" /><Path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" /></Svg>;

}
export default IconSmoking;
                    