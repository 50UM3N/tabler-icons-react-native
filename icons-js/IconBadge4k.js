import Svg, { Path } from 'react-native-svg';
                    
function IconBadge4k({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-badge-4k" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M7 9v2a1 1 0 0 0 1 1h1" /><Path d="M10 9v6" /><Path d="M14 9v6" /><Path d="M17 9l-2 3l2 3" /><Path d="M15 12h-1" /></Svg>;

}
export default IconBadge4k;
                    