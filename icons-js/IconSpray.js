import Svg, { Path } from 'react-native-svg';
         
function IconSpray({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spray" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" /><Path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" /><Path d="M15 7h.01" /><Path d="M18 9h.01" /><Path d="M18 5h.01" /><Path d="M21 3h.01" /><Path d="M21 7h.01" /><Path d="M21 11h.01" /><Path d="M10 7h1" /></Svg>;

}
export default IconSpray;
        