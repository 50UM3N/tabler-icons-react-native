import Svg, { Path } from 'react-native-svg';
         
function IconBrandWaze({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-waze" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" /><Path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" /><Path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M16 9h.01" /><Path d="M11 9h.01" /></Svg>;

}
export default IconBrandWaze;
        