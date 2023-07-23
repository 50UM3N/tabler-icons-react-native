import Svg, { Path } from 'react-native-svg';
         
function IconShieldCog({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-cog" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.568 1.933 .635 3.957 .223 5.89" /><Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19.001 15.5v1.5" /><Path d="M19.001 21v1.5" /><Path d="M22.032 17.25l-1.299 .75" /><Path d="M17.27 20l-1.3 .75" /><Path d="M15.97 17.25l1.3 .75" /><Path d="M20.733 20l1.3 .75" /></Svg>;

}
export default IconShieldCog;
        