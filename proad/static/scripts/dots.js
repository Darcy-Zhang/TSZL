let root_path = "http://darcy.ink"
let map = new window.AMap.Map('main', {
    layers: [
        // new AMap.TileLayer.RoadNet(),
        new AMap.TileLayer.Satellite(),
    ],
    center: [105.15, 30.86],
    zoom: 9,
    scrollWheel: false,
    // mapStyle: 'amap://styles/grey',
    // viewMode: '3D',
    // pitch: 53
});

AMap.plugin('AMap.ToolBar', function () {//异步加载插件
    var toolbar = new AMap.ToolBar();
    map.addControl(toolbar);
});

locations_info_minjiang = [
    [103.77, 31.13, "望乡台"],
    [103.52, 31.01, "望乡台"],
    [103.66, 30.33, "望乡台"],
    [103.61, 31.00, "玉垒山"],
    [103.53, 30.94, "上皇观"],
    [103.56, 30.91, "青城山"],
    [103.66, 30.73, "龙兴寺"],
    [103.41, 30.63, "鹤鸣山"],
    [103.87, 30.46, "中兴寺"]
];

locations_info_fujiang = [
    [104.81, 31.91, "窦圌山"],
    [104.62, 31.89, "戴天山"],
    [104.70, 31.88, "太华观"],
    [104.68, 31.86, "匡山"],
    [104.68, 31.68, "青莲乡"],
    [104.79, 31.44, "江楼"],
    [104.89, 31.19, "金华山"],
]

locations_info_micangdao = [
    [106.73, 31.86, "龙日寺"],
    [106.76, 31.85, "光福寺"],
    [105.93, 31.73, "苍溪县"],
    [106.08, 31.87, "玉台山（玉台观、滕王阁）"],
    [106.02, 31.80, "蟠龙山"],
    [106.01, 31.62, "灵山"],
    [105.98, 31.58, "开元寺"],
    [105.99, 31.58, "黄家亭子"],
    [105.96, 31.57, "锦屏山"],
    [106.01, 31.54, "彭道将池"],
    [106.01, 31.53, "汉王祠"],
    [105.75, 31.48, "晋安县"],
    [106.29, 31.27, "新政县"],
    [105.39, 31.21, "盐亭县"],
    [105.31, 31.17, "玄武山"],
    [105.08, 31.10, "惠义寺"],
    [105.08, 31.09, "牛头山"],
    [105.10, 31.09, "东山"],
    [105.09, 31.08, "梓州城楼"],
    [105.19, 31.04, "香积寺"],
    [105.32, 31.01, "陈子昂故宅"],
    [105.28, 31.00, "金华山"],
    [105.29, 30.99, "兜率寺"],
    [105.38, 30.87, "射洪县"],
    [105.44, 30.78, "通泉山"],
    [105.44, 30.74, "通泉县"],
    [105.44, 30.63, "郪口"],
    [104.68, 31.04, "玄武庙"]
]

locations_info_jinniudao = [
    [106.27, 33.05, "金牛驿"],
    [105.91, 32.73, "筹笔驿（朝天驿）"],
    [106.11, 32.72, "五盘岭"],
    [105.92, 32.65, "龙门阁（龙阁道）"],
    [105.84, 32.47, "千佛崖（石柜阁）"],
    [105.91, 32.47, "漫天岭"],
    [105.81, 32.44, "乌龙山"],
    [105.82, 32.43, "利州南渡口"],
    [105.72, 32.34, "桔柏渡"],
    [105.67, 32.33, "葭萌关"],
    [106.23, 32.22, "嘉川驿"],
    [105.57, 32.22, "剑门"],
    [105.47, 32.04, "普安郡"],
    [105.57, 31.81, "临津县"],
    [105.21, 31.76, "上亭驿"],
    [105.19, 31.70, "七曲山（七曲山大庙）"],
    [105.17, 31.64, "梓潼县"],
    [105.15, 31.63, "长卿山"],
    [104.07, 31.68, "武担山"],
    [104.95, 31.55, "魏城县"],
    [104.94, 31.54, "石堂观"],
    [104.87, 31.53, "奉济驿"],
    [104.77, 31.48, "芙蓉溪"],
    [104.77, 31.47, "东津"],
    [104.75, 31.47, "越王楼"],
    [104.77, 31.47, "富乐山"],
    [104.75, 31.45, "巴西驿"],
    [104.79, 31.44, "江楼"],
    [104.64, 31.45, "钟阳驿"],
    [104.51, 31.32, "罗江县（驿）"],
    [104.46, 31.29, "万安驿"],
    [105.26, 31.00, "石镜寺"],
    [104.28, 30.98, "房公湖"],
    [104.57, 30.78, "斛石山"],
    [103.77, 30.84, "扬雄宅"],
    [103.85, 30.81, "邓艾庙"],
    [104.08, 30.71, "升仙桥"],
    [104.06, 30.69, "张仪楼"],
    [104.05, 30.68, "净众寺"],
    [104.05, 30.68, "石笋街"],
    [104.05, 30.67, "福感寺"],
    [104.05, 30.67, "君平宅"],
    [104.05, 30.66, "市桥"],
    [104.05, 30.66, "碧鸡坊"],
    [104.04, 30.66, "琴台"],
    [104.03, 30.66, "杜甫草堂"],
    [104.04, 30.66, "散花楼"],
    [104.08, 30.66, "大慈寺"],
    [104.06, 30.65, "文翁石室"],
    [104.05, 30.65, "锦里"],
    [104.05, 30.65, "武侯祠"],
    [104.06, 30.65, "万里桥"],
    [104.09, 30.63, "薛涛墓"],
    [103.44, 31.16, "莫公台"],
    [103.35, 29.54, "峨眉山"],
    [103.95, 31.17, "都庆观"],
    [103.77, 31.13, "望乡台"],
    [103.52, 31.01, "望乡台"],
    [103.66, 30.33, "望乡台"],
    [103.61, 31.00, "玉垒山"],
    [103.53, 30.94, "上皇观"],
    [103.56, 30.91, "青城山"],
    [103.66, 30.73, "龙兴寺"],
    [103.41, 30.63, "鹤鸣山"],
    [103.87, 30.46, "中兴寺"],
]

content =
    `
<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>地点标签</title>
</head>

<body>
    <div class="Amap-label" id="test">
        <div class="Amap-label-header">
            <div class="place-name-header">
                <span>筹笔驿</span>
            </div>
        </div>
        <div class="Amap-label-body">
            <div class="location-introduction">
                <div class="place-name-body">
                    <span>筹笔驿</span>
                </div>
                <!-- <button onclick="collapse_content('brief-introduction')" class="w3-button w3-left-align">详情</button> -->
                <button onclick="collapse_content('brief-introduction')" class="w3-button w3-left-align">详情</button>
                <div id="brief-introduction" class="w3-container">
                    <img class="intro-pic" src="http://darcy.ink/static/imgs/Picture1.jpg" width="265" height="189">
                    <p>从五盘岭南行即至筹笔驿。所谓“筹笔”者，传说诸葛亮北伐中原时驻军于此，运筹帷幄，故而得名。筹笔驿的确切地点尚难定论。曹学俭《蜀中广记》认为朝天岭以北六十里之“神宣驿，即古筹笔驿”
                        。严耕望《唐代交通图考》判断五盘岭以南经嘉川驿七十里即至筹笔驿，由此再往南四十里经龙门阁至朝天岭
                        ，与《蜀中广记》的看法一致。顾祖禹《读史方舆纪要》卷六十八保宁府广元县载∶“朝天岭，县北六十里，山势崔巍，路径险绝。有朝天驿。”又云∶“筹笔驿，在县北八十里，唐宋皆因旧名，即今朝天驿也。”
                        则其地应即今广元市朝天区朝天镇。这两种看法，尚未知孰是孰非。至于今日所谓筹笔驿遗址在朝天区大滩镇附近的说法，则与史载不相符合，不可采信。唐代如李商隐、陆畅、薛逢、薛能、罗隐等诸多诗人都经行此处，咏怀古迹，留下不朽诗篇。
                    </p>
                </div>
            </div>
            <div class="poetry-info-body">
                <div class="poet-header" onclick="collapse_sibling_content(this)">
                    <div>筹笔店江亭</div>
                    <div>陆畅</div>
                </div>
                <hr>
                <div class="collapse-poet-body">
                    <div class="poet-body w3-panel w3-light-grey w3-leftbar w3-rightbar w3-border-grey">
                        <p>筹笔店江亭</p>
                        <p>
                            九折岩边下马行，<br>
                            江亭暂歇听江声。<br>
                            白云绿树不关我，<br>
                            枉与樵人乐一生。
                        </p>
                        <p class="author">——<strong>陆畅</strong></p>
                    </div>
                    <div class="annotations">
                        ○筹笔店：即今之朝天驿，在四川省广元县与陕西省阳平关之间。蜀汉诸葛亮伐魏，曾在此地筹划军事。
                        ○陆畅：唐苏州吴人，字达夫。宪宗元和元年进士。历迁秘书丞、江西观察判官。剖断公事，人人不冤。终日长吟，不视公牍，观察使王仲舒微言之，竟拂衣去。
                    </div>
                </div>

                <div class="poet-header" onclick="collapse_sibling_content(this)">
                    <div>筹笔驿</div>
                    <div>李商隐</div>
                </div>
                <hr>
                <div class="collapse-poet-body">
                    <div class="poet-body w3-panel w3-light-grey w3-leftbar w3-rightbar w3-border-grey">
                        <p>筹笔驿</p>
                        <p>
                            猿鸟犹疑畏简书，风云常为护储胥。<br>
                            徒令上将挥神笔，终见降王走传车。<br>
                            管乐有才终不忝，关张无命欲何如。<br>
                            他年锦里经祠庙，梁父吟成恨有馀。
                        </p>
                        <p class="author">——<strong>李商隐</strong></p>
                    </div>
                    <div class="annotations">
                        ○筹笔驿：旧址在今四川省广元北。《方舆胜览》：“筹笔驿在绵州绵谷县北九十九里，蜀诸葛武侯出师，尝驻军筹划于此。”
                        ○“猿鸟”句：诸葛亮治军以严明称，这里意谓至今连鱼鸟还在惊畏他的简书。猿，一作“鱼”。疑，惊。简书，指军令，古人将文字写在竹简上。 ○储胥：指军用的篱栅。 ○上将：犹主帅，指诸葛亮。
                        ○终：一作“真”。 ○降王：指后主刘禅。 ○走传车：魏元帝景元四年（263），邓艾伐蜀，后主出降，全家东迁洛阳，出降时也经过筹笔驿。传车：古代驿站的专用车辆。
                        ○管：管仲。春秋时齐相，曾佐齐桓公成就霸业。乐：乐毅。战国时人，燕国名将，曾大败强齐。 ○终不忝：真不愧。诸葛亮隐居南阳时，每自比管仲、乐毅。 ○关张：关羽和张飞，均为蜀国大将。
                        ○欲：一作“复”。
                        ○他年：作往年解。锦里：在成都城南，有武侯祠。 ○梁父吟：古乐府中一首葬歌。《三国志》说诸葛亮躬耕陇亩，好为梁父吟。借以抒发空怀济世之心，聊以吟诗以自遣。这里的“梁甫吟”即指这首诗。
                    </div>
                    <div class="appreciation">
                        【赏析】这首诗是诗人途经筹笔驿而作的咏怀古迹诗。在诗中诗人表达了对诸葛亮的崇敬之情，并为他未能实现统一中国的志愿而深感遗憾，同时对懦弱昏庸投降魏国的后主刘禅加以贬斥。此诗同多数凭吊诸葛亮的作品一样，颂其威名，钦其才智；同时借以寄托遗恨，抒发感慨。不过此篇艺术手法上，议论以抑扬交替之法，衬托以宾主拱让之法，用事以虚实结合之法，别具一格。
                    </div>
                </div>
                <div class="poet-header" onclick="collapse_sibling_content(this)">
                    <div>筹笔驿</div>
                    <div>薛能</div>
                </div>
                <hr>
                <div class="collapse-poet-body">
                    <div class="poet-body w3-panel w3-light-grey w3-leftbar w3-rightbar w3-border-grey">
                        <p>筹笔驿</p>
                        <p>
                            葛相终宜马革还，未开天意便开山。<br>
                            生欺仲达徒增气，死见王阳合厚颜。<br>
                            流运有功终是扰，阴符多术得非奸。<br>
                            当初若欲酬三顾，何不无为似有鳏。

                        </p>
                        <p class="author">——<strong>薛能</strong></p>
                    </div>
                    <div class="annotations">
                        ○题注为：余为蜀从事，病武侯非王佐才，因有是题。 ○筹笔驿：旧址在今四川省广元北。《方舆胜览》：“筹笔驿在绵州绵谷县北九十九里，蜀诸葛武侯出师，尝驻军筹划于此。”
                        ○马革：亦作“马革裹尸”。用马皮把尸体包裹起来。谓英勇作战，死于战场。 ○仲达：三国魏司马懿的字。多谋略，善权变，为魏重臣，后专国政。其孙炎篡魏建晋，追尊懿为宣帝。
                        ○三顾：指汉末刘备三次往隆中访聘诸葛亮。
                    </div>
                </div>
                <div class="poet-header" onclick="collapse_sibling_content(this)">
                    <div>题筹笔驿</div>
                    <div>薛逢</div>
                </div>
                <hr>
                <div class="collapse-poet-body">
                    <div class="poet-body w3-panel w3-light-grey w3-leftbar w3-rightbar w3-border-grey">
                        <p>题筹笔驿</p>
                        <p>
                            天地三分魏蜀吴，武侯倔起赞訏谟。<br>
                            身依豪杰倾心术，目对云山演阵图。<br>
                            赤伏运衰功莫就，皇纲力振命先徂。<br>
                            出师表上留遗恳，犹自千年激壮夫。
                        </p>
                        <p class="author">——<strong>薛逢</strong></p>
                    </div>
                    <div class="annotations">
                        ○訏谟：远大宏伟的谋划。《诗·大雅·抑》：“吁谟定命，远犹辰告。”毛传：“吁，大；谟，谋。”郑玄笺：“大谋定命，谓正月始和，布政于邦国都鄙也。”
                        ○云山∶指山河大地。阵图∶即八阵图。《三国志·蜀志·诸葛亮传》∶“推演兵法，作八阵图。”借天、地、风、云、龙、虎、鸟、蛇变化之象，作布阵之法。《成都经》：“八阵有三：在夔者六十有四，方阵法也；在弥牟镇者二十有八，当头阵法也；在棋盘市者二百五十有六，下营阵法也。”
                        ○赤符：“赤伏符”的简称。新莽末年谶纬家所造符箓，谓刘秀上应天命，当继汉统为帝。后亦泛指帝王受命的符瑞。（唐）张说《上党旧宫述圣颂》：“赤伏归于汉光。”
                        ○犹自：尚；尚自。（唐）许浑《塞下曲》：“朝来有乡信，犹自寄征衣。” ○壮夫∶壮士，意气壮盛的人。
                    </div>
                </div>

                <div class="poet-header" onclick="collapse_sibling_content(this)">
                    <div>筹笔驿</div>
                    <div>罗隐</div>
                </div>
                <hr>
                <div class="collapse-poet-body">
                    <div class="poet-body w3-panel w3-light-grey w3-leftbar w3-rightbar w3-border-grey">
                        <p>筹笔驿</p>
                        <p>
                            抛掷南阳为主忧，北征东讨尽良筹。<br>
                            时来天地皆同力，运去英雄不自由。<br>
                            千里山河轻孺子，两朝冠剑恨谯周。<br>
                            唯馀岩下多情水，犹解年年傍驿流。

                        </p>
                        <p class="author">——<strong>罗隐</strong></p>
                    </div>
                    <div class="annotations">
                        ○筹笔驿：筹笔驿：旧址在今四川省广元北。《方舆胜览》：“筹笔驿在绵州绵谷县北九十九里，蜀诸葛武侯出师，尝驻军筹划于此。” ○抛掷：抛弃，舍弃。 ○“抛掷”句：一作“抛掷南乡为主忧”。
                        ○南阳：诸葛亮躬耕时，家居南阳之邓县，在襄阳城西二十里，号曰隆中。
                        ○北征东讨：诸葛亮辅佐刘备父子治蜀，对外主张联吴抗魏，内则七擒孟获，诸葛亮死后，劝蜀主刘禅降魏，魏封为阳城亭侯。孺子：儿童之通称，这里指幼主刘禅。安定后方，六出祁山誓师北伐。
                        ○谯周：三国蜀人，家贫勤学，诸葛亮领益州牧命为勤学从事，后官至尤禄大夫。 ○冠剑：谓文官武将。
                    </div>
                </div>

                <div class="poet-header" onclick="collapse_sibling_content(this)">
                    <div>题筹笔驿</div>
                    <div>殷潜之</div>
                </div>
                <hr>
                <div class="collapse-poet-body">
                    <div class="poet-body w3-panel w3-light-grey w3-leftbar w3-rightbar w3-border-grey">
                        <p>题筹笔驿</p>
                        <p>
                            江东矜割据，邺下夺孤嫠。<br>
                            霸略非匡汉，宏图欲佐谁。<br>
                            奏书辞后主，仗剑出全师。<br>
                            重袭褒斜路，悬开反正旗。<br>
                            欲将苞有截，必使举无遗。<br>
                            沈虑经谋际，挥毫决胜时。<br>
                            圜觚当分画，前箸此操持。<br>
                            山秀扶英气，川流入妙思。<br>
                            算成功在彀，运去事终亏。<br>
                            命屈天方厌，人亡国自随。<br>
                            艰难推旧姓，开创极初基。<br>
                            总叹曾过地，宁探作教资。<br>
                            若归新历数，谁复顾衰危。<br>
                            报德兼明道，长留识者知。
                        </p>
                        <p class="author">——<strong>殷潜之</strong></p>
                    </div>
                    <div class="annotations">
                        ○孤犛：孤儿寡妇。（唐）韩愈《复志赋》：“嗟日月其几何兮，携孤犛而北旋。” ○霸略：称雄图霸的谋略。语出《史记·孟尝君列传》：“折秦之谋，而绝其霸彊之略。”
                        ○褒斜：即褒斜道。《后汉书·顺帝纪》：“乙亥，诏益州刺史罢子午道，通褒斜路。”褒斜道因取道褒水、斜水二河谷得名。二水同出秦岭太白山：褒水南注汉水，谷口在今陕西省勉县褒城镇北，斜水北注渭水，谷口在今陕西省眉县西南。通道山势险峻，历代凿山架木，于绝壁修成栈道，旧时为川陕交通要道。
                        ○有截：齐一貌；整齐貌。有，助词。《诗·商颂·长发》：“苞有三蘖，莫遂莫达，九有有截。韦顾既伐，昆吾夏桀。” ○沉虑：深思熟虑。（三国蜀）诸葛亮《将苑·将强》：“沉虑可以容众，力行可以建功。”
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>

</html>
`;

let infoWindow = new AMap.InfoWindow({
    offset: new AMap.Pixel(0, -30),
    autoMove: true,
    closeWhenClickMap: true,
    content: content,
    ifCustom: true,
});

function markerClick(e) {
    infoWindow.open(map, e.target.getPosition());
}

function add_points(locations) {
    for (i = 0; i < locations.length; i++) {
        temp = new AMap.Marker({
            position: [locations[i][0], locations[i][1]],
            title: locations[i][2],
            extData: locations[i][2]
        })
        temp.setLabel({
            offset: new AMap.Pixel(20, 20),
            content: "<div>" + locations[i][2] + "</div>"
        });
        if (locations[i][2].indexOf("筹笔驿") !== -1)
            temp.on('click', markerClick);
        map.add(temp);
    };
}

add_points(locations_info_minjiang);
add_points(locations_info_fujiang);
add_points(locations_info_micangdao);
add_points(locations_info_jinniudao);

map.setFitView();
// let path = [];
// for (i = 0; i < locations_info.length; i++) {
//     path.push(new AMap.LngLat(locations_info[i][0], locations_info[i][1]));
// }
// map.add(new AMap.Polyline({
//     path: path,
//     borderWeight: 2,
//     strokeColor: 'yellow',
//     lineJoin: 'round'
// }));

// // 线路和地点无法对应，因此决定单独绘制
// polyline_minjiang = [
//     [103.77, 31.13, "望乡台"],
//     [103.52, 31.01, "望乡台"],
//     [103.61, 31.00, "玉垒山"],
//     [103.53, 30.94, "上皇观"],
//     [103.56, 30.91, "青城山"],
//     [103.66, 30.73, "龙兴寺"],
//     [103.41, 30.63, "鹤鸣山"],
//     [103.66, 30.33, "望乡台"],
//     [103.87, 30.46, "中兴寺"]
// ]

polyline_fujiang = [
    [104.81, 31.91, "窦圌山"],
    [104.70, 31.88, "太华观"],
    [104.68, 31.86, "匡山"],
    [104.68, 31.68, "青莲乡"],
    [104.79, 31.44, "江楼"],
    [104.89, 31.19, "金华山"],
    [105.10, 31.09, "东山"],
    [105.19, 31.04, "香积寺"],
    [105.28, 31.00, "金华山"],
    [105.29, 30.99, "兜率寺"],
    [105.38, 30.87, "射洪县"],
    [105.44, 30.78, "通泉山"],
    [105.44, 30.74, "通泉县"],
    [105.44, 30.63, "郪口"],
]

polyline_jinniudao = [
    [104.03, 30.66, "杜甫草堂"],
    [104.28, 30.98, "房公湖"],
    [104.46, 31.29, "万安驿"],
    [104.51, 31.32, "罗江县（驿）"],
    [104.64, 31.45, "钟阳驿"],
    [104.75, 31.47, "越王楼"],
    [104.87, 31.53, "奉济驿"],
    [104.94, 31.54, "石堂观"],
    [104.95, 31.55, "魏城县"],
    [105.15, 31.63, "长卿山"],
    [105.17, 31.64, "梓潼县"],
    [105.19, 31.70, "七曲山（七曲山大庙）"],
    [105.21, 31.76, "上亭驿"],
    [105.47, 32.04, "普安郡"],
    [105.57, 32.22, "剑门"],
    [105.67, 32.33, "葭萌关"],
    [105.72, 32.34, "桔柏渡"],
    [105.81, 32.44, "乌龙山"],
    [105.84, 32.47, "千佛崖（石柜阁）"],
    [105.91, 32.73, "筹笔驿（朝天驿）"],
    [106.27, 33.05, "金牛驿"],
]

polyline_unknown = [
    [106.29, 31.27, "新政县"],
    [106.01, 31.53, "汉王祠"],
    [105.98, 31.58, "开元寺"],
    [105.93, 31.73, "苍溪县"],
    [105.67, 32.33, "葭萌关"],
    [105.84, 32.47, "千佛崖（石柜阁）"],
    [105.92, 32.65, "龙门阁（龙阁道）"],
    [105.91, 32.73, "筹笔驿（朝天驿）"],
    [106.27, 33.05, "金牛驿"],
]

polyline_unknown_1 = [
    [106.76, 31.85, "光福寺"],
    [106.73, 31.86, "龙日寺"],
    [106.08, 31.87, "玉台山（玉台观、滕王阁）"],
    [106.02, 31.80, "蟠龙山"],
    [105.93, 31.73, "苍溪县"],
    [105.99, 31.58, "黄家亭子"],
    [105.75, 31.48, "晋安县"],
    [105.39, 31.21, "盐亭县"],
    [105.31, 31.17, "玄武山"],
    [105.09, 31.08, "梓州城楼"],
    [104.68, 31.04, "玄武庙"],
    [104.28, 30.98, "房公湖"],
]

function add_polyline(dots, color) {
    let path = [];
    for (i = 0; i < dots.length; i++) {
        path.push(new AMap.LngLat(dots[i][0], dots[i][1]));
    }
    map.add(new AMap.Polyline({
        path: path,
        strokeWeight: 8,
        strokeColor: color,
        lineJoin: 'round',
        strokeOpacity: 1,
    }));
}

// add_polyline(polyline_minjiang, '#8B572A');
add_polyline(polyline_fujiang, '#9FC4D3');
add_polyline(polyline_unknown, '#9FC4D3')
add_polyline(polyline_jinniudao, '#8B572A');
add_polyline(polyline_unknown_1, '#8B572A')

function collapse_content(id) {
    let x = document.getElementById(id);
    x.classList.toggle('w3-hide');
}

function collapse_sibling_content(e) {
    let x = e.nextElementSibling.nextElementSibling;
    x.classList.toggle('w3-hide');
}



// test = new AMap.Marker({
//     extData: "aaa"
// });

// alert(test.getExtData());

