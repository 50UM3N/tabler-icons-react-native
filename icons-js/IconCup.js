import Svg, { Path } from 'react-native-svg';
                    
function IconCup({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cup" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 11h14v-3h-14z" /><Path d="M17.5 11l-1.5 10h-8l-1.5 -10" /><Path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><Path d="M15 5v-2" /></Svg>;

}
export default IconCup;
                    