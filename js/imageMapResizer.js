scale = 1.0;

window.onload = function () {
    var ImageMap = function (map, img) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousHeight = 1025;

            for (n = 0; n < len; n++)
                coords[n] = areas[n].coords.split(',');

            this.resize = function () {
                var n, m, clen,
                    x = img.offsetHeight / previousHeight;
                scale = x;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++)
                        coords[n][m] *= x;;
                    areas[n].coords = coords[n].join(',');
                }
                previousHeight = document.body.clientHeight;
                return true;
            };

            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map_nav'), document.getElementById('img_nav'));

    imageMap.resize();
}

function returnScale() {
    return scale;
}