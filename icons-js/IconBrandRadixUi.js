import Svg, { Path } from 'react-native-svg';
                    
function IconBrandRadixUi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-radix-ui" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><Path d="M6 3h5v5h-5z" /><Path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005z" /></Svg>;

}
export default IconBrandRadixUi;
                    