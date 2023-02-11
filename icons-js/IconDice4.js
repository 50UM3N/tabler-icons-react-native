import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconDice4({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dice-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><Circle cx="8.5" cy="8.5" r=".5" fill="currentColor" /><Circle cx="15.5" cy="8.5" r=".5" fill="currentColor" /><Circle cx="15.5" cy="15.5" r=".5" fill="currentColor" /><Circle cx="8.5" cy="15.5" r=".5" fill="currentColor" /></Svg>;

}
export default IconDice4;
                    