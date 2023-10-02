import Svg, { Path } from 'react-native-svg';
         
function IconBrandFortnite({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-fortnite" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1z" /></Svg>;

}
export default IconBrandFortnite;
        