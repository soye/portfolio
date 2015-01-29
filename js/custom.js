hover_link_id = "";

function highlightLink(area, height) {
	coords = [];
	coords = area.coords.split(',');
	img_id = $(area).attr('id');
	hover_link_id = "#" + img_id + "_white";
	img_file_name = "images/" + img_id + "_1366x1024_3.png";
	img_height = height * returnScale();
	if (img_id == "aboutme")
		img_code = "<a href=\"\" data-target=\"#aboutme_full\" data-toggle=\"modal\" onmouseout=\"restoreLink()\" id=\"link_white\" ><img src=\"" + img_file_name + "\" id=\""+ img_id + "\" style=\"position: absolute; top: 0px; left: 0px; height: " + img_height + "px; width: auto;\" /></a>";
	else
		img_code = "<a href=\"" + $(area).attr('href') + "\" onmouseout=\"restoreLink()\" id=\"link_white\" ><img src=\"" + img_file_name + "\" id=\""+ img_id + "\" style=\"position: absolute; top: 0px; left: 0px; height: " + img_height + "px; width: auto;\" /></a>";
	
	$('#test').prepend(img_code);
}

function restoreLink() {
	$(hover_link_id + ', #link_white').remove();
	hover_link_id = "";
}