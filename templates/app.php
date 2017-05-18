<!DOCTYPE html>
<html lang="en">
<head>

<?php
$style_dir = plugins_url( 'wpdone' ) . '/assets/css/';
$spectre_css_url = $style_dir . 'spectre.min.css';
$app_css_url = $style_dir . 'app.css';
?>
<link rel="stylesheet" 
id="wpdone-spectre-css" 
href="<?php echo $spectre_css_url; ?>" 
type="text/css" 
media="all">
<link rel="stylesheet" 
id="wpdone-app-css" 
href="<?php echo $app_css_url; ?>" 
type="text/css" 
media="all">
</head>

<?php 
if ( ! current_user_can( 'edit_posts' ) ){
	?>
	<body style="    text-align: center;">
		<h3> You must be logged in and able to edit posts to use this plugin. </h3>
<a href="<?php echo wp_login_url(home_url()); ?>" class="btn" title="Login">Login</a>
	</body>
	<?php
	exit;
}
?>
<body>
    <div id="root" />
<?php
wp_footer();
?>
</body>
</html>
