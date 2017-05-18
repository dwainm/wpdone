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
<body>
    <div id="root" />
<?php
wp_footer();
?>
</body>
</html>
