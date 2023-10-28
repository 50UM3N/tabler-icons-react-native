import Svg, { Path } from 'react-native-svg';
         
function IconBrandParsinta({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-parsinta" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3a9 9 0 1 0 9 9" /><Path d="M21 12a9 9 0 0 0 -9 -9" opacity=".5" /><Path d="M10 9v6l5 -3z" /></Svg>;

}
export default IconBrandParsinta;
        