import Svg, { Path } from 'react-native-svg';
                    
function IconVariableMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-variable-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" /><Path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.775 3.55 2.29 7.102 1.544 11.01m-11.544 -6.01h1c1 0 1 1 2.016 3.527c.782 1.966 .943 3 1.478 3.343" /><Path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" /><Path d="M16 19h6" /></Svg>;

}
export default IconVariableMinus;
                    