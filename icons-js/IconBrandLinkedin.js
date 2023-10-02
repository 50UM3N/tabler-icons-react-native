import Svg, { Path } from 'react-native-svg';
         
function IconBrandLinkedin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><Path d="M8 11l0 5" /><Path d="M8 8l0 .01" /><Path d="M12 16l0 -5" /><Path d="M16 16v-3a2 2 0 0 0 -4 0" /></Svg>;

}
export default IconBrandLinkedin;
        