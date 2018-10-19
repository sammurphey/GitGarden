<?php
	include($php_root . "components/html_header.php");
?>
<main id="login_page">
	<h1 class='page_title'>GitGarden</h1>
	<p class='page_desc'>Grow your own beautiful flower garden by contributing code on GitHub!</p>
		<!--<section class='login_dialog'>
			<h2>Login</h2>-->
			<div id="login_btn_wrapper" class="field">
				<a href="https://github.com/login/oauth/authorize?client_id=66b93d27cd279bf8baa3&redirect_uri=http://192.168.0.107/gitgarden">
					<button id="login_btn">
						<span>Login</span>
						<img src="<?php echo $htp_root; ?>src/imgs/icons/GitHub-Mark-32px.png">
					</button>
				</a>
			</div>
		<!--</section>-->
</main>
<style>
body {
	background-image: url("./src/imgs/backgrounds/TexturesCom_WoodFine0077_6_seamless_S.jpg");
}
</style>
<script src="<?php echo $htp_root; ?>src/js/handleLogin.js"></script>
<?php
	include($php_root . "components/html_footer.php");
