import Svg, { Path } from 'react-native-svg';
         
function IconBrandTeams({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-teams" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7h10v10h-10z" /><Path d="M6 10h4" /><Path d="M8 10v4" /><Path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5" /><Path d="M18 18a4 4 0 0 0 4 -4v-5h-4" /><Path d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" /><Path d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" /></Svg>;

}
export default IconBrandTeams;
        