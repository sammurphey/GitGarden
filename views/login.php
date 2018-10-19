<?php
	include($php_root . "components/html_header.php");
?>
<main id="login_page">
	<h1 class='page_title'>GitGarden</h1>
	<p class='page_desc'>Grow your own beautiful flower garden by contributing code on GitHub!</p>
		<section class='login_dialog'>
			<h2>Login</h2>
			<div class="field">
				<label for="user_name">GitHub Username<label>
				<input id="user_name" type="text" value="<?php echo $user_name;?>">
			</div>
			<div class="field">
				<input id="stay_signed_in" type="checkbox" checked><label class="checkbox_label" for="stay_signed_in">Keep me signed in. <img class="icon" src="<?php echo $htp_root; ?>src/imgs/icons/question.png" title="Sets one cookie that will store your username."></label>
			</div>
			<div id="login_btn_wrapper" class="field">
				<button id="login_btn">
					<span>Start</span>
					<img src="<?php echo $htp_root; ?>src/imgs/icons/GitHub-Mark-32px.png">
				</button>
			</div>
		</section>
</main>
<style>
body {
	background-image: url("./src/imgs/backgrounds/TexturesCom_WoodFine0077_6_seamless_S.jpg");
}
</style>
<script src="<?php echo $htp_root; ?>src/js/handleLogin.js"></script>
<?php
	include($php_root . "components/html_footer.php");
