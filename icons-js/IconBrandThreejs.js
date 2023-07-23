import Svg, { Path } from 'react-native-svg';
         
function IconBrandThreejs({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-threejs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 22l-5 -19l19 5.5z" /><Path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" /><Path d="M12.573 17.58l-1.573 -6.58l6.13 2.179" /><Path d="M9.527 4.893l1.473 6.107l-6.31 -1.564z" /></Svg>;

}
export default IconBrandThreejs;
        