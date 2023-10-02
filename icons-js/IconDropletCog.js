import Svg, { Path } from 'react-native-svg';
         
function IconDropletCog({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-droplet-cog" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18.421 11.56a6.702 6.702 0 0 0 -.357 -.683l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.144 7.144 0 0 0 4.518 1.58" /><Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19.001 15.5v1.5" /><Path d="M19.001 21v1.5" /><Path d="M22.032 17.25l-1.299 .75" /><Path d="M17.27 20l-1.3 .75" /><Path d="M15.97 17.25l1.3 .75" /><Path d="M20.733 20l1.3 .75" /></Svg>;

}
export default IconDropletCog;
        