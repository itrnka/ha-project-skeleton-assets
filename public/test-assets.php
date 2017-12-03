<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Test</title>

    <?php
    // load compiled js from version file
    $versions = json_decode(file_get_contents('./static/js/my-project-1.0.0/versions.json'));
    foreach ($versions AS $name => $file) {
        if (strpos($name, '/min.dev.js') !== false) {
            echo "<script type=\"text/javascript\" src=\"{$file}\"></script>\n";
        }
    }
    // load compiled css from version file
    $versions = json_decode(file_get_contents('./static/css/versions.json'));
    foreach ($versions AS $name => $file) {
        if (strpos($name, '.css') !== false) {
            echo "<link href=\"{$file}\" rel=\"stylesheet\" type=\"text/css\" />\n";
        }
    }
    ?>

</head>
<body>

</body>
</html>