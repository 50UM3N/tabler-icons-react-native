import Svg, { Path } from 'react-native-svg';
                    
function IconBarrierBlock({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barrier-block" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /><Path d="M7 16v4" /><Path d="M7.5 16l9 -9" /><Path d="M13.5 16l6.5 -6.5" /><Path d="M4 13.5l6.5 -6.5" /><Path d="M17 16v4" /><Path d="M5 20h4" /><Path d="M15 20h4" /><Path d="M17 7v-2" /><Path d="M7 7v-2" /></Svg>;

}
export default IconBarrierBlock;
                    