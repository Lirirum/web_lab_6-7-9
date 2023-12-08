// Footer.js
import React from 'react';
import 'bootstrap/';
import "./styles/footer.css"
import footer_logo from "./svg/footer_logo.png"

const Footer = ({ selectedCount }) => {
  return (
    
    <footer class="footer-distributed">

			<div class="footer-left">

				<div class='footer__logo'>
				<img src={footer_logo}/>


				</div>

				<p class="footer-links">
					<a href="#" class="link-1">Про нас</a>
					
					<a href="#">Блог</a>
				
					<a href="#">Доставка та оплата</a>
				
					<a href="#">Гарантія</a>
					
					<a href="#">Контакти</a>
					
					<a href="#">Усі категорії</a>
				</p>

				<p class="footer-company-name">SunWay © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>вулиця 68 Десантників</span>Центральний район, Миколаїв</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+380.97.523.1242</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">sunway102@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Про компанію</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
  );
};

export default Footer;