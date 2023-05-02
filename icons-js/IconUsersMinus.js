import Svg, { Path } from 'react-native-svg';
                    
function IconUsersMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><Path d="M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88" /><Path d="M16 3.13a4 4 0 0 1 0 7.75" /><Path d="M16 19h6" /></Svg>;

}
export default IconUsersMinus;
                    