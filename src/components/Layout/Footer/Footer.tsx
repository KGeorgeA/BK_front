import { FooterMadeBy, FooterSection } from "./Footer.styles";

function Footer() {
  return (
    <FooterSection className="container-big">
      <FooterMadeBy>made by Fusion intern</FooterMadeBy>
      <div>divs my account wishlist etc</div>
      <div>social</div>
    </FooterSection>
  );
}

export default Footer;
