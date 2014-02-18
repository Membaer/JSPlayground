var style = "<style> .ux-explorerview-custom-medium, .ux-explorerview-custom-small, .ux-explorerview-custom-large {width:100%!important;} </style>";
var divEnd = "</span></div>";

//PP.common.Tpl.setCustomRenderer(
function meineoverlays(values, thumbSize) {
    var custBgColor = "";
    var custBorderColor = "";
    var custFontColor = "";
    var custReturnString = "";
    var AssetClassAreaValues = ["Exhibitions", "Press", "Marcom Materials", "Images"];
    var colorStyle = "style";

    for (i = 0; i < AssetClassAreaValues.length; i++) {
        if (values.AssetClassArea.indexOf(AssetClassAreaValues[i]) != -1) {
            custReturnString = AssetClassAreaValues[i];
            custBorderColor = "999999";
            custFontColor = "ffffff";
            switch (custReturnString) {
                case "Exhibitions":
                    custBgColor = "background:rgba(93,171,213,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#5DABD5,endColorstr=#5DABD5);";
                    break;
                case "Press":
                    custBgColor = "background:rgba(128,130,133,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#808285,endColorstr=#808285);";
                    break;
            }
        }
    }

    if (values.AppliedAssetRightTemplateId == "Archive") {
        colorStyle = '<div style="position:absolute;width:0x;height:0px;border-style:solid;border-width:15px 15px 0px 0px;border-color: #ff0000 transparent transparent transparent;"></div>';
    }
    if (values.AppliedAssetRightTemplateId == "Public") {
        colorStyle = '<div style="position:absolute;width:0x;height:0px;border-style:solid;border-width:15px 15px 0px 0px;border-color: #00ff00 transparent transparent transparent;"></div>';
    }

    var divStart = "<div style='position:absolute;width:100%;height:15px;border-bottom:1px solid" + custBorderColor + ";text-align:right;padding-top:1px;font-weight:bold;" + custBgColor + "color:#" + custFontColor + ";'><span style='padding-right:10px'>";

    return style + divStart + custReturnString + divEnd + colorStyle;
}


     
var asset = {
    AppliedAssetRightTemplateId: "Public",
    AssetClassArea: "Press"
};


var overlay = meineoverlays(asset, 1);
document.write(overlay)


 