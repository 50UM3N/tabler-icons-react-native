import Svg, { Path } from 'react-native-svg';
                    
function IconRouter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-router" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M17 17l0 .01" /><Path d="M13 17l0 .01" /><Path d="M15 13l0 -2" /><Path d="M11.75 8.75a4 4 0 0 1 6.5 0" /><Path d="M8.5 6.5a8 8 0 0 1 13 0" /></Svg>;

}
export default IconRouter;
                    