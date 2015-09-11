// Some browsers don't support repeat, for example, Safari
String.prototype.repeat = function (i) {
    return new Array(i + 1).join(this);
}
angular.module("wt-editor")
    .constant('wtEditorConfig', {
        fontSize         : '16px',
        theme            : 'kuroir',
        isPreview        : false,//是否显示预览
        isPreviewButton  : true,//是否显示预览按钮
        autofocus        : true, //默认聚焦
        width            : '100%', //宽度
        height           : '100%',  //高度
        isFullscreen     : false, //默认是否全屏显示
        isFullButton     : true, //是否显示最大化按钮
        type             : 'simple', //toolbar按钮显示的类型 ［simple:简易, all:全部按钮］
        styleToolBar     : [{
            id       : 1,
            title    : '粗体',
            className: 'fa fa-bold',
            modifier : '**',
            type     : 'styleFn',
            name     : 'bold'
        }, {
            id       : 2,
            title    : '斜体',
            className: 'fa fa-italic',
            modifier : '*',
            type     : 'styleFn',
            name     : 'italic'
        }, {
            id       : 3,
            title    : '删除线',
            className: 'fa fa-strikethrough',
            modifier : '~~',
            type     : 'styleFn',
            name     : 'strikethrough'
        }],
        hToolbar         : [{
            id       : 4,
            title    : '标题 1',
            className: 'fa',
            level    : '1',
            type     : 'headingFn',
            name     : 'h1'
        }, {
            id       : 5,
            title    : '标题 2',
            className: 'fa',
            level    : '2',
            type     : 'headingFn',
            name     : 'h2'
        }, {
            id       : 6,
            title    : '标题 3',
            className: 'fa',
            level    : '3',
            type     : 'headingFn',
            name     : 'h3'
        }, {
            id       : 7,
            title    : '标题 4',
            className: 'fa',
            level    : '4',
            type     : 'headingFn',
            name     : 'h4'
        }, {
            id       : 8,
            title    : '标题 5',
            className: 'fa',
            level    : '5',
            type     : 'headingFn',
            name     : 'h5'
        }, {
            id       : 9,
            title    : '标题 6',
            className: 'fa',
            level    : '6',
            type     : 'headingFn',
            name     : 'h6'
        }],
        horizonToolbar   : [{
            id       : 10,
            title    : '横线',
            className: 'fa fa-minus',
            type     : 'horizonFn',
            name     : 'hr'
        }],
        listToolbar      : [{
            id       : 11,
            title    : '引用',
            className: 'fa fa-quote-left',
            prefix   : '> ',
            type     : 'listFn',
            name     : 'quote'
        }, {
            id       : 12,
            title    : '无序列表',
            className: 'fa fa-list-ul',
            prefix   : '- ',
            type     : 'listFn',
            name     : 'list'
        }, {
            id       : 13,
            title    : '有序列表',
            className: 'fa fa-list-ol',
            prefix   : '1. ',
            type     : 'listFn',
            name     : 'list-2'
        }, {
            id       : 14,
            title    : '未完成任务列表',
            className: 'fa fa-square-o',
            prefix   : '- [ ] ',
            type     : 'listFn',
            name     : 'square'
        }, {
            id       : 15,
            title    : '已完成任务列表',
            className: 'fa fa-check-square-o',
            prefix   : '- [x] ',
            type     : 'listFn',
            name     : 'check-square'
        }],
        linkToolbar      : [{
            id       : 16,
            title    : '链接',
            className: 'fa fa-link',
            text     : '链接文字',
            url      : 'http://example.com',
            type     : 'linkFn',
            name     : 'link'
        }, {
            id       : 17,
            title    : '图片描述',
            className: 'fa fa-image',
            text     : '图片描述',
            url      : 'http://example.com/example.png',
            type     : 'imageFn',
            name     : 'image'
        }, {
            id       : 18,
            title    : '代码',
            className: 'fa fa-code',
            type     : 'codeFn',
            name     : 'code'
        }, {
            id       : 19,
            title    : '表格',
            className: 'fa fa-table',
            type     : 'tableFn',
            name     : 'table'
        }],
        iconToolbar      : [{
            id       : 20,
            title    : 'Emoji 图标',
            className: 'fa fa-smile-o',
            target   : 'emoji-modal',
            type     : 'emoji'
        }, {
            id       : 21,
            title    : 'Font Awesome 图标',
            className: 'fa fa fa-flag-o',
            target   : 'fa-modal',
            type     : 'emoji'
        }],
        mathToolbar      : [{
            id       : 22,
            title    : '数学公式',
            className: 'fa fa-superscript',
            sample   : 'E = mc^2',
            type     : 'mathFn',
            name     : 'math'
        }],
        mermaidToolbar   : [{
            id       : 23,
            title    : '流程图',
            className: 'fa fa-long-arrow-right',
            type     : 'flowchart',
            name     : 'flow'
        }, {
            id       : 24,
            title    : '顺序图',
            className: 'fa fa-exchange',
            type     : 'diagram',
            name     : 'diagram'
        }, {
            id       : 25,
            title    : '甘特图',
            className: 'fa fa-sliders',
            type     : 'gantt',
            name     : 'gantt'
        }],
        helpToolbar      : [{
            id       : 26,
            title    : '帮助',
            className: 'fa fa-question-circle',
            target   : 'help-modal',
            type     : 'help'
        }],
        expandToolbar    : [{
            id       : 27,
            title    : '预览',
            className: 'fa fa-columns',
            target   : 'help-modal',
            type     : 'preview'
        }, {
            id       : 28,
            title    : '最大化',
            title2    : '还原',
            className: 'fa fa-expand',
            type     : 'expand'
        }],
        dividorToolbar   : [{type: 'dividor'}],
        hideButtons      : [],//要不显示的图标[]
        additionalButtons: [],//扩展的图标 {title:'扩展',className:'fa fa-music',type:'custom',action:musicFn,before:2}
        replaceButtons   : [],//替换默认的图标 {title:'插入图片',className:'fa fa-file-image-o',type:'custom',action:imageFn,id:17}
        language         : [],//国际化设置[未]
        onShow           : null,//显示编辑器的时候调用
        onPreview        : null,//渲染的时候调用
        onChange         : null,//内容变化时调用
        emojis           : [":blush:", ":scream:", ":smirk:", ":smiley:", ":stuck_out_tongue_closed_eyes:", ":stuck_out_tongue_winking_eye:", ":rage:", ":disappointed:", ":sob:", ":kissing_heart:", ":wink:", ":pensive:", ":confounded:", ":flushed:", ":relaxed:", ":mask:", ":heart:", ":broken_heart:", ":sunny:", ":umbrella:", ":cloud:", ":snowflake:", ":snowman:", ":zap:", ":cyclone:", ":foggy:", ":ocean:", ":cat:", ":dog:", ":mouse:", ":hamster:", ":rabbit:", ":wolf:", ":frog:", ":tiger:", ":koala:", ":bear:", ":pig:", ":pig_nose:", ":cow:", ":boar:", ":monkey_face:", ":monkey:", ":horse:", ":racehorse:", ":camel:", ":sheep:", ":elephant:", ":panda_face:", ":snake:", ":bird:", ":baby_chick:", ":hatched_chick:", ":hatching_chick:", ":chicken:", ":penguin:", ":turtle:", ":bug:", ":honeybee:", ":ant:", ":beetle:", ":snail:", ":octopus:", ":tropical_fish:", ":fish:", ":whale:", ":whale2:", ":dolphin:", ":cow2:", ":ram:", ":rat:", ":water_buffalo:", ":tiger2:", ":rabbit2:", ":dragon:", ":goat:", ":rooster:", ":dog2:", ":pig2:", ":mouse2:", ":ox:", ":dragon_face:", ":blowfish:", ":crocodile:", ":dromedary_camel:", ":leopard:", ":cat2:", ":poodle:", ":paw_prints:", ":bouquet:", ":cherry_blossom:", ":tulip:", ":four_leaf_clover:", ":rose:", ":sunflower:", ":hibiscus:", ":maple_leaf:", ":leaves:", ":fallen_leaf:", ":herb:", ":mushroom:", ":cactus:", ":palm_tree:", ":evergreen_tree:", ":deciduous_tree:", ":chestnut:", ":seedling:", ":blossom:", ":ear_of_rice:", ":shell:", ":globe_with_meridians:", ":sun_with_face:", ":full_moon_with_face:", ":new_moon_with_face:", ":new_moon:", ":waxing_crescent_moon:", ":first_quarter_moon:", ":waxing_gibbous_moon:", ":full_moon:", ":waning_gibbous_moon:", ":last_quarter_moon:", ":waning_crescent_moon:", ":last_quarter_moon_with_face:", ":first_quarter_moon_with_face:", ":moon:", ":earth_africa:", ":earth_americas:", ":earth_asia:", ":volcano:", ":milky_way:", ":partly_sunny:", ":octocat:", ":squirrel:", ":bamboo:", ":gift_heart:", ":dolls:", ":school_satchel:", ":mortar_board:", ":flags:", ":fireworks:", ":sparkler:", ":wind_chime:", ":rice_scene:", ":jack_o_lantern:", ":ghost:", ":santa:", ":christmas_tree:", ":gift:", ":bell:", ":no_bell:", ":tanabata_tree:", ":tada:", ":confetti_ball:", ":balloon:", ":crystal_ball:", ":cd:", ":dvd:", ":floppy_disk:", ":camera:", ":video_camera:", ":movie_camera:", ":computer:", ":tv:", ":iphone:", ":phone:", ":telephone:", ":telephone_receiver:", ":pager:", ":fax:", ":minidisc:", ":vhs:", ":sound:", ":speaker:", ":mute:", ":loudspeaker:", ":mega:", ":hourglass:", ":hourglass_flowing_sand:", ":alarm_clock:", ":watch:", ":radio:", ":satellite:", ":loop:", ":mag:", ":mag_right:", ":unlock:", ":lock:", ":lock_with_ink_pen:", ":closed_lock_with_key:", ":key:", ":bulb:", ":flashlight:", ":high_brightness:", ":low_brightness:", ":electric_plug:", ":battery:", ":calling:", ":email:", ":mailbox:", ":postbox:", ":bath:", ":bathtub:", ":shower:", ":toilet:", ":wrench:", ":nut_and_bolt:", ":hammer:", ":seat:", ":moneybag:", ":yen:", ":dollar:", ":pound:", ":euro:", ":credit_card:", ":money_with_wings:", ":e-mail:", ":inbox_tray:", ":outbox_tray:", ":envelope:", ":incoming_envelope:", ":postal_horn:", ":mailbox_closed:", ":mailbox_with_mail:", ":mailbox_with_no_mail:", ":door:", ":smoking:", ":bomb:", ":gun:", ":hocho:", ":pill:", ":syringe:", ":page_facing_up:", ":page_with_curl:", ":bookmark_tabs:", ":bar_chart:", ":chart_with_upwards_trend:", ":chart_with_downwards_trend:", ":scroll:", ":clipboard:", ":calendar:", ":date:", ":card_index:", ":file_folder:", ":open_file_folder:", ":scissors:", ":pushpin:", ":paperclip:", ":black_nib:", ":pencil2:", ":straight_ruler:", ":triangular_ruler:", ":closed_book:", ":green_book:", ":blue_book:", ":orange_book:", ":notebook:", ":notebook_with_decorative_cover:", ":ledger:", ":books:", ":bookmark:", ":name_badge:", ":microscope:", ":telescope:", ":newspaper:", ":football:", ":basketball:", ":soccer:", ":baseball:", ":tennis:", ":8ball:", ":rugby_football:", ":bowling:", ":golf:", ":mountain_bicyclist:", ":bicyclist:", ":horse_racing:", ":snowboarder:", ":swimmer:", ":surfer:", ":ski:", ":spades:", ":hearts:", ":clubs:", ":diamonds:", ":gem:", ":ring:", ":trophy:", ":musical_score:", ":musical_keyboard:", ":violin:", ":space_invader:", ":video_game:", ":black_joker:", ":flower_playing_cards:", ":game_die:", ":dart:", ":mahjong:", ":clapper:", ":memo:", ":pencil:", ":book:", ":art:", ":microphone:", ":headphones:", ":trumpet:", ":saxophone:", ":guitar:", ":shoe:", ":sandal:", ":high_heel:", ":lipstick:", ":boot:", ":shirt:", ":tshirt:", ":necktie:", ":womans_clothes:", ":dress:", ":running_shirt_with_sash:", ":jeans:", ":kimono:", ":bikini:", ":ribbon:", ":tophat:", ":crown:", ":womans_hat:", ":mans_shoe:", ":closed_umbrella:", ":briefcase:", ":handbag:", ":pouch:", ":purse:", ":eyeglasses:", ":fishing_pole_and_fish:", ":coffee:", ":tea:", ":sake:", ":baby_bottle:", ":beer:", ":beers:", ":cocktail:", ":tropical_drink:", ":wine_glass:", ":fork_and_knife:", ":pizza:", ":hamburger:", ":fries:", ":poultry_leg:", ":meat_on_bone:", ":spaghetti:", ":curry:", ":fried_shrimp:", ":bento:", ":sushi:", ":fish_cake:", ":rice_ball:", ":rice_cracker:", ":rice:", ":ramen:", ":stew:", ":oden:", ":dango:", ":egg:", ":bread:", ":doughnut:", ":custard:", ":icecream:", ":ice_cream:", ":shaved_ice:", ":birthday:", ":cake:", ":cookie:", ":chocolate_bar:", ":candy:", ":lollipop:", ":honey_pot:", ":apple:", ":green_apple:", ":tangerine:", ":lemon:", ":cherries:", ":grapes:", ":watermelon:", ":strawberry:", ":peach:", ":melon:", ":banana:", ":pear:", ":pineapple:", ":sweet_potato:", ":eggplant:", ":tomato:", ":corn:", ":alien:", ":angel:", ":anger:", ":angry:", ":anguished:", ":astonished:", ":baby:", ":blue_heart:", ":blush:", ":boom:", ":bow:", ":bowtie:", ":boy:", ":bride_with_veil:", ":broken_heart:", ":bust_in_silhouette:", ":busts_in_silhouette:", ":clap:", ":cold_sweat:", ":collision:", ":confounded:", ":confused:", ":construction_worker:", ":cop:", ":couple_with_heart:", ":couple:", ":couplekiss:", ":cry:", ":crying_cat_face:", ":cupid:", ":dancer:", ":dancers:", ":dash:", ":disappointed:", ":dizzy_face:", ":dizzy:", ":droplet:", ":ear:", ":exclamation:", ":expressionless:", ":eyes:", ":facepunch:", ":family:", ":fearful:", ":feelsgood:", ":feet:", ":finnadie:", ":fire:", ":fist:", ":flushed:", ":frowning:", ":girl:", ":goberserk:", ":godmode:", ":green_heart:", ":grey_exclamation:", ":grey_question:", ":grimacing:", ":grin:", ":grinning:", ":guardsman:", ":haircut:", ":hand:", ":hankey:", ":hear_no_evil:", ":heart_eyes_cat:", ":heart_eyes:", ":heart:", ":heartbeat:", ":heartpulse:", ":hurtrealbad:", ":hushed:", ":imp:", ":information_desk_person:", ":innocent:", ":japanese_goblin:", ":japanese_ogre:", ":joy_cat:", ":joy:", ":kiss:", ":kissing_cat:", ":kissing_closed_eyes:", ":kissing_heart:", ":kissing_smiling_eyes:", ":kissing:", ":laughing:", ":lips:", ":love_letter:", ":man_with_gua_pi_mao:", ":man_with_turban:", ":man:", ":mask:", ":massage:", ":metal:", ":muscle:", ":musical_note:", ":nail_care:", ":neckbeard:", ":neutral_face:", ":no_good:", ":no_mouth:", ":nose:", ":notes:", ":ok_hand:", ":ok_woman:", ":older_man:", ":older_woman:", ":open_hands:", ":open_mouth:", ":pensive:", ":persevere:", ":person_frowning:", ":person_with_blond_hair:", ":person_with_pouting_face:", ":point_down:", ":point_left:", ":point_right:", ":point_up_2:", ":point_up:", ":poop:", ":pouting_cat:", ":pray:", ":princess:", ":punch:", ":purple_heart:", ":question:", ":rage:", ":rage1:", ":rage2:", ":rage3:", ":rage4:", ":raised_hand:", ":raised_hands:", ":relaxed:", ":relieved:", ":revolving_hearts:", ":runner:", ":running:", ":satisfied:", ":scream_cat:", ":scream:", ":see_no_evil:", ":shit:", ":skull:", ":sleeping:", ":sleepy:", ":smile_cat:", ":smile:", ":smiley_cat:", ":smiley:", ":smiling_imp:", ":smirk_cat:", ":smirk:", ":sob:", ":sparkling_heart:", ":sparkles:", ":speak_no_evil:", ":speech_balloon:", ":star:", ":star2:", ":stuck_out_tongue_closed_eyes:", ":stuck_out_tongue_winking_eye:", ":stuck_out_tongue:", ":sunglasses:", ":suspect:", ":sweat_drops:", ":sweat_smile:", ":sweat:", ":thought_balloon:", ":-1:", ":thumbsdown:", ":thumbsup:", ":+1:", ":tired_face:", ":tongue:", ":triumph:", ":trollface:", ":two_hearts:", ":two_men_holding_hands:", ":two_women_holding_hands:", ":unamused:", ":v:", ":walking:", ":wave:", ":weary:", ":wink2:", ":wink:", ":woman:", ":worried:", ":yellow_heart:", ":yum:", ":zzz:", ":109:", ":house:", ":house_with_garden:", ":school:", ":office:", ":post_office:", ":hospital:", ":bank:", ":convenience_store:", ":love_hotel:", ":hotel:", ":wedding:", ":church:", ":department_store:", ":european_post_office:", ":city_sunrise:", ":city_sunset:", ":japanese_castle:", ":european_castle:", ":tent:", ":factory:", ":tokyo_tower:", ":japan:", ":mount_fuji:", ":sunrise_over_mountains:", ":sunrise:", ":stars:", ":statue_of_liberty:", ":bridge_at_night:", ":carousel_horse:", ":rainbow:", ":ferris_wheel:", ":fountain:", ":roller_coaster:", ":ship:", ":speedboat:", ":boat:", ":sailboat:", ":rowboat:", ":anchor:", ":rocket:", ":airplane:", ":helicopter:", ":steam_locomotive:", ":tram:", ":mountain_railway:", ":bike:", ":aerial_tramway:", ":suspension_railway:", ":mountain_cableway:", ":tractor:", ":blue_car:", ":oncoming_automobile:", ":car:", ":red_car:", ":taxi:", ":oncoming_taxi:", ":articulated_lorry:", ":bus:", ":oncoming_bus:", ":rotating_light:", ":police_car:", ":oncoming_police_car:", ":fire_engine:", ":ambulance:", ":minibus:", ":truck:", ":train:", ":station:", ":train2:", ":bullettrain_front:", ":bullettrain_side:", ":light_rail:", ":monorail:", ":railway_car:", ":trolleybus:", ":ticket:", ":fuelpump:", ":vertical_traffic_light:", ":traffic_light:", ":warning:", ":construction:", ":beginner:", ":atm:", ":slot_machine:", ":busstop:", ":barber:", ":hotsprings:", ":checkered_flag:", ":crossed_flags:", ":izakaya_lantern:", ":moyai:", ":circus_tent:", ":performing_arts:", ":round_pushpin:", ":triangular_flag_on_post:", ":jp:", ":kr:", ":cn:", ":us:", ":fr:", ":es:", ":it:", ":ru:", ":gb:", ":uk:", ":de:", ":100:", ":1234:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":keycap_ten:", ":zero:", ":hash:", ":symbols:", ":arrow_backward:", ":arrow_down:", ":arrow_forward:", ":arrow_left:", ":capital_abcd:", ":abcd:", ":abc:", ":arrow_lower_left:", ":arrow_lower_right:", ":arrow_right:", ":arrow_up:", ":arrow_upper_left:", ":arrow_upper_right:", ":arrow_double_down:", ":arrow_double_up:", ":arrow_down_small:", ":arrow_heading_down:", ":arrow_heading_up:", ":leftwards_arrow_with_hook:", ":arrow_right_hook:", ":left_right_arrow:", ":arrow_up_down:", ":arrow_up_small:", ":arrows_clockwise:", ":arrows_counterclockwise:", ":rewind:", ":fast_forward:", ":information_source:", ":ok:", ":twisted_rightwards_arrows:", ":repeat:", ":repeat_one:", ":new:", ":top:", ":up:", ":cool:", ":free:", ":ng:", ":cinema:", ":koko:", ":signal_strength:", ":u5272:", ":u5408:", ":u55b6:", ":u6307:", ":u6708:", ":u6709:", ":u6e80:", ":u7121:", ":u7533:", ":u7a7a:", ":u7981:", ":sa:", ":restroom:", ":mens:", ":womens:", ":baby_symbol:", ":no_smoking:", ":parking:", ":wheelchair:", ":metro:", ":baggage_claim:", ":accept:", ":wc:", ":potable_water:", ":put_litter_in_its_place:", ":secret:", ":congratulations:", ":m:", ":passport_control:", ":left_luggage:", ":customs:", ":ideograph_advantage:", ":cl:", ":sos:", ":id:", ":no_entry_sign:", ":underage:", ":no_mobile_phones:", ":do_not_litter:", ":non-potable_water:", ":no_bicycles:", ":no_pedestrians:", ":children_crossing:", ":no_entry:", ":eight_spoked_asterisk:", ":eight_pointed_black_star:", ":heart_decoration:", ":vs:", ":vibration_mode:", ":mobile_phone_off:", ":chart:", ":currency_exchange:", ":aries:", ":taurus:", ":gemini:", ":cancer:", ":leo:", ":virgo:", ":libra:", ":scorpius:", ":sagittarius:", ":capricorn:", ":aquarius:", ":pisces:", ":ophiuchus:", ":six_pointed_star:", ":negative_squared_cross_mark:", ":a:", ":b:", ":ab:", ":o2:", ":diamond_shape_with_a_dot_inside:", ":recycle:", ":end:", ":on:", ":soon:", ":clock1:", ":clock130:", ":clock10:", ":clock1030:", ":clock11:", ":clock1130:", ":clock12:", ":clock1230:", ":clock2:", ":clock230:", ":clock3:", ":clock330:", ":clock4:", ":clock430:", ":clock5:", ":clock530:", ":clock6:", ":clock630:", ":clock7:", ":clock730:", ":clock8:", ":clock830:", ":clock9:", ":clock930:", ":heavy_dollar_sign:", ":copyright:", ":registered:", ":tm:", ":x:", ":heavy_exclamation_mark:", ":bangbang:", ":interrobang:", ":o:", ":heavy_multiplication_x:", ":heavy_plus_sign:", ":heavy_minus_sign:", ":heavy_division_sign:", ":white_flower:", ":heavy_check_mark:", ":ballot_box_with_check:", ":radio_button:", ":link:", ":curly_loop:", ":wavy_dash:", ":part_alternation_mark:", ":trident:", ":black_square:", ":white_square:", ":white_check_mark:", ":black_square_button:", ":white_square_button:", ":black_circle:", ":white_circle:", ":red_circle:", ":large_blue_circle:", ":large_blue_diamond:", ":large_orange_diamond:", ":small_blue_diamond:", ":small_orange_diamond:", ":small_red_triangle:", ":small_red_triangle_down:", ":shipit:"],
        emojRegx         : /\:[a-z0-9_\-\+]+\:/g
    })
    .controller('wtEditorCtrl', ['$scope','$timeout', 'wtEditorConfig', function ($scope,$timeout, wtEditorConfig) {
        //controller 定义事件
        //directive 定义业务逻辑

        this.initGantt = function () {
            mermaid.ganttConfig = {
                // Configuration for Gantt diagrams
                numberSectionStyles: 4,
                axisFormatter      : [
                    ["%I:%M", function (d) { // Within a day
                        return d.getHours();
                    }],
                    ["w. %U", function (d) { // Monday a week
                        return d.getDay() == 1;
                    }],
                    ["%a %d", function (d) { // Day within a week (not monday)
                        return d.getDay() && d.getDate() != 1;
                    }],
                    ["%b %d", function (d) { // within a month
                        return d.getDate() != 1;
                    }],
                    ["%m-%y", function (d) { // Month
                        return d.getMonth();
                    }]
                ]
            };
        }

        this.initEditor = function (id) {
            var editor = ace.edit(id);
            editor.session.setUseWorker(false);
            editor.$blockScrolling = Infinity;
            editor.renderer.setShowPrintMargin(false);
            editor.session.setMode('ace/mode/markdown');
            editor.session.setUseWrapMode(true);
            editor.setScrollSpeed(1);
            editor.setOption("scrollPastEnd", true);
            editor.session.setFoldStyle('manual');
            editor.focus();
            editor.session.on('changeScrollTop', function (scroll) {
                //sync_preview();
            });
            editor.setFontSize(wtEditorConfig.fontSize);
            editor.setTheme('ace/theme/' + wtEditorConfig.theme);

            // 编辑器的一些拓展方法
            editor.selection.smartRange = function () {
                var range = editor.selection.getRange();
                if (!range.isEmpty()) {
                    return range; // 用户手动选中了一些文字，直接用这个
                }
                // 没有选中任何东西
                var _range = range; // 备份原始range
                range = editor.selection.getWordRange(range.start.row, range.start.column); // 当前单词的range
                if (editor.session.getTextRange(range).trim().length == 0) { // 选中的东西是空或者全空白
                    range = _range; // 还使用原始的range
                }
                return range;
            };
            // 实时监听用户的编辑
            editor.session.on('change', function () {
                var __value = editor.session.getValue();
                $timeout(function(){
                    $scope.value = __value;
                });
                wtEditorConfig.value = __value;
                if(wtEditorConfig.onChange) {
                    wtEditorConfig.onChange(__value);
                }
                if (wtEditorConfig.isPreview === true) {
                    _.debounce(function () {
                        // 用户停止输入128毫秒之后才会触发
                        if(wtEditorConfig.onPreview) {
                            wtEditorConfig.onPreview(__value);
                        }
                        var modelist = ace.require('ace/ext/modelist').modesByName;
                        var highlight = ace.require('ace/ext/static_highlight');
                        var _value = marked(__value);
                        _value = emojiFn(_value);
                        $('.markdown-body').empty().append(_value); // realtime preview
                        $('pre > code').each(function () { // code highlight
                            var code = $(this);
                            var language = (code.attr('class') || 'lang-javascript').substring(5).toLowerCase();
                            if (modelist[language] == undefined) {
                                language = 'javascript';
                            }
                            highlight(code[0], {
                                    mode           : 'ace/mode/' + language,
                                    theme          : 'ace/theme/github',
                                    startLineNumber: 1,
                                    showGutter     : false,
                                    trim           : true
                                },
                                function (highlighted) {
                                }
                            );
                        });
                        mermaid.init();
                        //sync_preview();
                    }, 128, false)();
                }
            });


            // modals
            $(document).on('close', '.remodal', function (e) {
                editor.focus(); // 关闭modal，编辑器自动获得焦点
            });

            // overwrite some ACE editor keyboard shortcuts
            editor.commands.addCommands([
                {
                    name   : "preferences",
                    bindKey: {win: "Ctrl-,", mac: "Command-,"},
                    exec   : function (editor) {
                        $('i.fa-cog').click(); // show M+ preferences modal
                    }
                }
            ]);
            return editor;
        };
        this.refreshHTML = function (editor) {
            // 用户停止输入128毫秒之后才会触发
            var modelist = ace.require('ace/ext/modelist').modesByName;
            var highlight = ace.require('ace/ext/static_highlight');
            var _value = marked(editor.session.getValue());
            _value = emojiFn(_value);
            $('.markdown-body').empty().append(_value); // realtime preview
            $('pre > code').each(function () { // code highlight
                var code = $(this);
                var language = (code.attr('class') || 'lang-javascript').substring(5).toLowerCase();
                if (modelist[language] == undefined) {
                    language = 'javascript';
                }
                highlight(code[0], {
                        mode           : 'ace/mode/' + language,
                        theme          : 'ace/theme/github',
                        startLineNumber: 1,
                        showGutter     : false,
                        trim           : true,
                    },
                    function (highlighted) {
                    }
                );
            });
            mermaid.init();
            if(wtEditorConfig.onPreview) {
                wtEditorConfig.onPreview();
            }
            editor.focus();
        }

        this.initMarked = function () {
            // 设置marked
            var renderer = new marked.Renderer();
            renderer.listitem = function (text) {
                if (!/^\[[ x]\]\s/.test(text)) {
                    return marked.Renderer.prototype.listitem(text);
                }
                // 任务列表
                var checkbox = $('<input type="checkbox" disabled/>');
                if (/^\[x\]\s/.test(text)) { // 完成的任务列表
                    checkbox.attr('checked', true);
                }
                return $(marked.Renderer.prototype.listitem(text.substring(3))).addClass('task-list-item').prepend(checkbox)[0].outerHTML;
            }
            renderer.codespan = function (text) { // inline code
                if (/^\$.+\$$/.test(text)) { // inline math
                    var raw = /^\$(.+)\$$/.exec(text)[1];
                    var line = raw.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'"); // unescape html characters
                    try {
                        return katex.renderToString(line, {displayMode: false});
                    } catch (err) {
                        return '<code>' + err + '</code>';
                    }
                }
                return marked.Renderer.prototype.codespan.apply(this, arguments);
            }
            renderer.code = function (code, language, escaped, line_number) {
                code = code.trim();
                var firstLine = code.split(/\n/)[0].trim();
                if (language === 'math') { // 数学公式
                    var tex = '';
                    code.split(/\n\n/).forEach(function (line) { // 连续两个换行，则开始下一个公式
                        line = line.trim();
                        if (line.length > 0) {
                            try {
                                tex += katex.renderToString(line, {displayMode: true});
                            } catch (err) {
                                tex += '<pre>' + err + '</pre>';
                            }
                        }
                    });
                    return '<div data-line="' + line_number + '">' + tex + '</div>';
                } else if (firstLine === 'gantt' || firstLine === 'sequenceDiagram' || firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) { // mermaid
                    if (firstLine === 'sequenceDiagram') {
                        code += '\n'; // 如果末尾没有空行，则语法错误
                    }
                    if (mermaid.parse(code)) {
                        return '<div class="mermaid" data-line="' + line_number + '">' + code + '</div>';
                    } else {
                        return '<pre data-line="' + line_number + '">' + mermaidError + '</pre>';
                    }
                } else {
                    return marked.Renderer.prototype.code.apply(this, arguments);
                }
            };
            renderer.html = function (html) {
                var result = marked.Renderer.prototype.html.apply(this, arguments);
                var h = $(result.bold());
                return h.html();
            };
            renderer.paragraph = function (text) {
                var result = marked.Renderer.prototype.paragraph.apply(this, arguments);
                var h = $(result.bold());
                // h.find('script,iframe').remove();
                return h.html();
            };
            marked.setOptions({
                renderer   : renderer,
                gfm        : true,
                tables     : true,
                breaks     : false,
                pedantic   : false,
                sanitize   : false,
                smartLists : true,
                smartypants: true
            });
            return renderer;
        }


        this.setFullScreen = function (id, flag, editor) {
            var _obj = $('#' + id);
            if (flag) {
                _obj.css({
                    left  : 0,
                    top   : 0,
                    right : 0,
                    bottom: 0
                });
            } else {
                _obj.css({
                    width : '100%',
                    height: '100%'
                });
            }
            $timeout(function () {
                $scope.vm.editorHeight.height  = $('.wt-editor-container-code').height()+'px';
            });
        }
        this.resizeEditor = function(editor){
            setTimeout(function () {
                editor.resize(true);
                editor.focus();
            }, 100)
        }
        var emojiFn = function (htmlstr) {
            return htmlstr.replace(wtEditorConfig.emojRegx, function (match) {
                if (wtEditorConfig.emojis.indexOf(match) !== -1) {
                    var name = String(match).slice(1, -1);
                    return '<img class="emoji" title=":' + name + ':" alt="' + name + '" src="https://s.tylingsoft.com/emoji-icons/' + name + '.png" width="18" />';
                } else {
                    return match;
                }
            });
        }

        this.hasSelection = function() {
            var ta = $scope.vm.editor;
            if (ta.selectionStart === ta.textLength) {
                return false;
            }
            return true;
        };

        this.getSelection = function() {
            var ta = $scope.vm.editor;;

            return {
                target: ta,
                start: ta.selectionStart,
                end: ta.selectionEnd,
                text: ta.value.substring(ta.selectionStart, ta.selectionEnd)
            };
        };

        this.insertPlacehodler = function(text, padLeft, padRight) {
            var ta = $scope.vm.editor;
            ta.focus();
            $scope.value += text;
            ta.selectionStart = ta.textLength - text.length + padLeft;
            ta.selectionEnd = ta.textLength - padRight;
        };

        this.insertTextPlacehodler = function(text, start, end,padLeft, padRight) {
            var ta = $scope.vm.editor;
            ta.focus();
            var leftText = ta.value.substring(0, start);
            var rightText = ta.value.substring(end);
            $scope.value  = leftText + text + rightText;

            ta.selectionStart = ta.textLength - text.length + padLeft;
            ta.selectionEnd = ta.textLength - padRight;
        };

        this.insertText = function(text, start, end) {
            var ta = $scope.vm.editor;
            ta.focus();
            var leftText = ta.value.substring(0, start);
            var rightText = ta.value.substring(end);
            //ta.value = leftText + text + rightText;
            $scope.value = leftText + text + rightText;
        };


        this.isRowFirst = function(start){
            var ta = $scope.vm.editor;
            //获取光标前的内容，index是光标的位置
            var val=ta.value.substr(0,start);
            //获取光标所在行的信息
            var _text=val.substr(val.lastIndexOf("\n")+1);
            if(_text.length === 0){
                return true;
            }
            return false;
        }
        this.getRowText = function(start){
            var ta = $scope.vm.editor;
            //获取光标前的内容，index是光标的位置
            var val=ta.value.substr(0,start);
            //获取光标所在行的信息
            var _text=val.substr(val.lastIndexOf("\n")+1);
            return _text;
        }


        this.previewHTML = function () {
            var _value = marked($scope.vm.editor.value);
            _value = emojiFn(_value);
            $('.markdown-body').empty().append(_value); // realtime preview
            mermaid.init();
            if(wtEditorConfig.onPreview) {
                wtEditorConfig.onPreview();
            }
            $scope.vm.editor.focus();
        }









    }])
    .directive("wtEditor", ['wtEditorConfig', '$timeout', function (wtEditorConfig, $timeout) {
        return {
            require    : ["wtEditor", 'ngModel'],
            scope      : {
                value : '=ngModel',
                config: '='
            },
            controller : 'wtEditorCtrl',
            templateUrl: "wt-editor/editor.html",
            link       : function (scope, element, attrs, controller) {
                var vm = scope.vm = {
                    value     : scope.value, //默认显示的内容
                    emojiValue: '', //插入表情代码
                    faValue   : '',
                    toolbars  : [],
                    editorHeight    : {height:$('.wt-editor-container-code').height()+'px'}
                };
                //继承设置
                angular.extend(wtEditorConfig, scope.config);
                if (wtEditorConfig.type === 'simple') {
                    vm.toolbars = _.union(wtEditorConfig.styleToolBar, [{id:'d1',type: 'dividor'}],
                        wtEditorConfig.hToolbar, [{id:'d2',type: 'dividor'}],
                        wtEditorConfig.horizonToolbar,
                        wtEditorConfig.listToolbar, [{id:'d3',type: 'dividor'}],
                        wtEditorConfig.linkToolbar, [{id:'d4',type: 'dividor'}],
                        wtEditorConfig.expandToolbar);
                } else if (wtEditorConfig.type === 'all') {
                    vm.toolbars = _.union(wtEditorConfig.styleToolBar, [{id:'d1',type: 'dividor'}],
                        wtEditorConfig.hToolbar, [{id:'d2',type: 'dividor'}],
                        wtEditorConfig.horizonToolbar,
                        wtEditorConfig.listToolbar, [{id:'d3',type: 'dividor'}],
                        wtEditorConfig.linkToolbar, [{id:'d4',type: 'dividor'}],
                        wtEditorConfig.iconToolbar, [{id:'d5',type: 'dividor'}],
                        wtEditorConfig.mathToolbar,
                        wtEditorConfig.mermaidToolbar, [{id:'d6',type: 'dividor'}],
                        wtEditorConfig.expandToolbar);
                }


                //隐藏个性化按钮
                _.remove(vm.toolbars, function (n) {
                    if (n.id) {
                        return _.indexOf(wtEditorConfig.hideButtons, n.id) !== -1;
                    }
                });

                //替换图标
                if(wtEditorConfig.replaceButtons.length>0){
                    $(wtEditorConfig.replaceButtons).each(function (n) {
                        var _temp = wtEditorConfig.replaceButtons[n];
                        if (_temp.id) {
                            var _index = _.findLastIndex(vm.toolbars, function (n) {
                                return n.id === _temp.id;
                            })
                            vm.toolbars.splice(_index, 1, _temp);
                        }
                    });
                }

                //插入元素
                if (wtEditorConfig.additionalButtons.length > 0) {
                    $(wtEditorConfig.additionalButtons).each(function (n) {
                        var _temp = wtEditorConfig.additionalButtons[n];
                        if (_temp.before) {
                            var _index = _.findLastIndex(vm.toolbars, function (n) {
                                return n.id === _temp.before;
                            })
                            vm.toolbars.splice(_index, 0, _temp);
                        } else {
                            vm.toolbars.push(_temp);
                        }
                    });
                }




                //是否显示预览
                vm.isPreview = wtEditorConfig.isPreview;
                vm.isPreviewButton = wtEditorConfig.isPreviewButton;
                vm.isFullButton = wtEditorConfig.isFullButton;
                vm.isFullscreen = wtEditorConfig.isFullscreen;


                vm.editor = document.getElementById('wtEditorObj');



                function insert (flag,title,sel){
                    var ss = controller[0].getRowText(sel.start);
                    if(ss.length>0){
                        controller[0].insertTextPlacehodler(flag+' '+ss,sel.start-ss.length, sel.end, sel.start+flag.length+1, vm.editor.value-sel.start-flag.length-1);
                        vm.editor.selectionStart = ss.length+flag.length+1;
                        vm.editor.selectionEnd = ss.length+flag.length+1;
                    }else{
                        controller[0].insertTextPlacehodler(flag +' '+ title +ss,sel.start, sel.end, flag.length+1, 0);
                    }
                }

                vm.styleFn = function(param,$event) {
                    var sel = controller[0].getSelection();
                    switch(param) {
                        case "bold":
                            if (controller[0].hasSelection()) {
                                controller[0].insertText("**" + sel.text + "**", sel.start, sel.end);
                            } else {
                                controller[0].insertTextPlacehodler("**bold**",sel.start, sel.end, 2, 2);
                            }
                            vm.editor.focus();
                            break;
                        case "italic":
                            if (controller[0].hasSelection()) {
                                controller[0].insertText("_" + sel.text + "_", sel.start, sel.end);
                            } else {
                                controller[0].insertTextPlacehodler("_italic_",sel.start, sel.end, 1, 1);
                            }
                            break;
                        case "underline":
                            if (controller[0].hasSelection()) {
                                controller[0].insertText("<u>" + sel.text + "</u>", sel.start, sel.end);
                            } else {
                                controller[0].insertTextPlacehodler("<u>underline</u>",sel.start, sel.end, 3, 4);
                            }
                            break;
                        case "h1":
                            insert("#","标题1",sel);
                            break;
                        case "h2":
                            insert("##","标题2",sel);
                            break;
                        case "h3":
                            insert("###","标题3",sel);
                            break;
                        case "h4":
                            insert("####","标题4",sel);
                            break;
                        case "h5":
                            insert("#####","标题5",sel);
                            break;
                        case "h6":
                            insert("######","标题1",sel);
                            break;
                        case "list":
                            insert("-","列表",sel);
                            break;
                        case "list-2":
                            insert("1.","列表",sel);
                            break;
                        case "link":
                            sel.target.value += "\n";
                            var iUrl = "http://xxx.com";
                            var _text = "链接文字";
                            if(sel.text.length > 0) {
                                _text = sel.text
                            }
                            var aUrl = "["+_text+"]("+iUrl+")";
                            controller[0].insertText(aUrl, sel.start, sel.end);

                            break;
                        case "image":
                            sel.target.value += "\n";
                            var iUrl = "http://xxx.com";
                            var aUrl = "![图片描述](" + iUrl + ")";
                            controller[0].insertText(aUrl, sel.start, sel.end);

                            break;
                        case "code":
                            if (controller[0].hasSelection()) {
                                if(sel.text.length === 0) {
                                    controller[0].insertText("\n```\n 代码片段 \n```\n", sel.start, sel.end);
                                }else{
                                    controller[0].insertText("`" + sel.text + "`", sel.start, sel.end);
                                }
                            } else {
                                controller[0].insertText("\n```\n 代码片段 \n```\n", sel.start, sel.end);
                            }
                            break;
                        case "table":
                            var sample = $($event.target).data('sample');
                            controller[0].isRowFirst(sel.start);
                            if (controller[0].isRowFirst(sel.start)) {
                                controller[0].insertText('\n' + sample + '\n\n',sel.start, sel.end);
                            } else {
                                controller[0].insertText('\n\n' + sample + '\n\n',sel.start, sel.end);
                            }
                            break;
                        case "hr":
                            sel.target.value += "\n---\n";
                            sel.target.focus();
                            break;
                        case "quote":
                            if (controller[0].hasSelection()) {
                                controller[0].insertText("> " + sel.text, sel.start, sel.end);
                            } else {
                                controller[0].insertPlacehodler("> 引用", 2, 0);
                            }
                            break;
                        case "square":
                            sel.target.value += "- [ ] ";
                            sel.target.focus();
                            break;
                        case "check-square":
                            sel.target.value += "- [x] ";
                            sel.target.focus();
                            break;
                        case "strikethrough":
                            if (controller[0].hasSelection()) {
                                controller[0].insertText("~~" + sel.text + "~~", sel.start, sel.end);
                            } else {
                                controller[0].insertPlacehodler("~~strikethrough~~", 2, 2);
                            }
                            break;
                        case "math":
                            var text = sel.text;
                            if (text.length == 0) {
                                text = $($event.target).data('sample');
                            }
                            controller[0].insertText('\n```math\n' + text + '\n```\n', sel.start, sel.end);
                            break;
                        case "flow":
                            var text = sel.text;
                            if (text.length == 0) {
                                text = $($event.target).data('sample');
                            }
                            controller[0].insertText('\n```\n' + text + '\n```\n', sel.start, sel.end);
                            break;
                        case "diagram":
                            var text = sel.text;
                            if (text.length == 0) {
                                text = $($event.target).data('sample');
                            }
                            controller[0].insertText('\n```\n' + text + '\n```\n', sel.start, sel.end);
                            break;
                        case "gantt":
                            var text = sel.text;
                            if (text.length == 0) {
                                text = $($event.target).data('sample');
                            }
                            controller[0].insertText('\n```\n' + text + '\n```\n', sel.start, sel.end);
                            break;
                    }
                };


                //
                //设置甘特图
                controller[0].initGantt();
                //设置markdown
                vm.renderer = controller[0].initMarked();

                //preview
                vm.togglePreview = function () {
                    vm.isPreview = !vm.isPreview;
                    wtEditorConfig.isPreview = vm.isPreview;
                    if (vm.isPreview === true) {
                        $timeout(function () {
                            controller[0].previewHTML();
                        }, 50);
                    }
                }
                //
                //full screen
                vm.toggleFullScreen = function () {
                    if (vm.isFullButton) {
                        vm.isFullscreen = !vm.isFullscreen;
                        //vm.isPreviewButton = vm.isFullscreen;
                        //vm.isPreview = !vm.isFullscreen;
                        //wtEditorConfig.isPreview = vm.isPreview;
                        //wtEditorConfig.isPreviewButton = vm.isPreviewButton;

                        if (vm.isPreview === true) {
                            vm.togglePreview();
                        }
                        wtEditorConfig.isFullscreen = vm.isFullscreen;
                        controller[0].setFullScreen('wtEditor', vm.isFullscreen, vm.editor);
                    }
                }
                //
                //
                //插入表情
                vm.insertEmoji = function () {
                    vm.emojiValue = vm.emojiValue.trim();

                    if (!/^:/.test(vm.emojiValue)) {
                        vm.emojiValue = ":" + vm.emojiValue;
                    }
                    if (!/:$/.test(vm.emojiValue)) {
                        vm.emojiValue = vm.emojiValue + ':';
                    }
                    var sel = controller[0].getSelection();
                    controller[0].insertText(vm.emojiValue, sel.start, sel.end);
                    vm.editor.focus();
                    vm.emojiValue = '';
                }
                //插入图标
                vm.insertFa = function () {
                    vm.faValue = vm.faValue.trim();
                    if (vm.faValue.length > 0) {
                        var sel = controller[0].getSelection();
                        controller[0].insertText("<i class='fa fa-" + vm.faValue + "'></i>", sel.start, sel.end);
                        vm.editor.focus();
                        vm.faValue = '';
                    }
                }
                //
                //
                //插入内容
                vm.insertContent = function(content){
                    var sel = controller[0].getSelection();
                    controller[0].insertText(content, sel.start, sel.end);
                    vm.editor.focus();
                }
                //获取内容
                vm.getContent = function(){
                    return vm.editor.value;
                }

                //监控modal变化
                scope.$watch('value', function(newValue, oldValue) {
                    var __value = vm.editor.value;
                    if(wtEditorConfig.onChange) {
                        wtEditorConfig.onChange(__value);
                    }
                    if (wtEditorConfig.isPreview === true) {
                        $timeout(function(){
                            controller[0].previewHTML();
                        },128);
                    }
                });

                //初始化完调用显示函数
                if(wtEditorConfig.onShow){
                    wtEditorConfig.onShow();
                }
            }
        };
    }]);