import Svg, { Path } from 'react-native-svg';
         
function IconLungs({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lungs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.081 20c1.612 0 2.919 -1.335 2.919 -2.98v-9.763c0 -.694 -.552 -1.257 -1.232 -1.257c-.205 0 -.405 .052 -.584 .15l-.13 .083c-1.46 1.059 -2.432 2.647 -3.404 5.824c-.42 1.37 -.636 2.962 -.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161l.203 .007z" /><Path d="M17.92 20c-1.613 0 -2.92 -1.335 -2.92 -2.98v-9.763c0 -.694 .552 -1.257 1.233 -1.257c.204 0 .405 .052 .584 .15l.13 .083c1.46 1.059 2.432 2.647 3.405 5.824c.42 1.37 .636 2.962 .648 4.775c.012 1.675 -1.261 3.054 -2.878 3.161l-.202 .007z" /><Path d="M9 12a3 3 0 0 0 3 -3a3 3 0 0 0 3 3" /><Path d="M12 4v5" /></Svg>;

}
export default IconLungs;
        