import Svg, { Path } from 'react-native-svg';
         
function IconToml({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-toml" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M1.499 8h3" /><Path d="M2.999 8v8" /><Path d="M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5z" /><Path d="M13 16v-8l2 5l2 -5v8" /><Path d="M20 8v8h2.5" /></Svg>;

}
export default IconToml;
        