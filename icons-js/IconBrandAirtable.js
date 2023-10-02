import Svg, { Path } from 'react-native-svg';
         
function IconBrandAirtable({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-airtable" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 10v8l7 -3v-2.6z" /><Path d="M3 6l9 3l9 -3l-9 -3z" /><Path d="M14 12.3v8.7l7 -3v-8z" /></Svg>;

}
export default IconBrandAirtable;
        