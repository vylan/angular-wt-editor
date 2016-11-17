var wtEditor=angular.module("wt-editor",["wt.editor.tpl","ui.bootstrap","monospaced.elastic"]);
String.prototype.repeat=function(e){return new Array(e+1).join(this)},angular.module("wt-editor").constant("wtEditorConfig",{fontSize:"16px",theme:"kuroir",maxHeight:600,className:"",autofocus:!0,type:"all",typeArray:{hs:["h1","h2","h3","h4","h5","h6"],simple:["bold","italic","link","divider","hr","quote","list","list-2"],complex:["heading","bold","italic","underline","strikethrough","divider","hr","quote","list","list-2","square","check-square","divider","link","image","code","table","divider","math","diagram","gantt","divider","preview"],all:["heading","bold","italic","underline","strikethrough","divider","hr","quote","list","list-2","square","check-square","divider","link","image","code","table","divider","math","diagram","gantt","divider","preview","expand"]},allButtons:{heading:{id:0,title:"标题",className:"fa fa-header",type:"headingFns",name:"heading"},bold:{id:1,title:"粗体",className:"fa fa-bold",modifier:"**",type:"styleFn",name:"bold"},italic:{id:2,title:"斜体",className:"fa fa-italic",modifier:"*",type:"styleFn",name:"italic"},underline:{id:3,title:"下划线",className:"fa fa-underline",modifier:"u",type:"styleFn",name:"underline"},strikethrough:{id:4,title:"删除线",className:"fa fa-strikethrough",modifier:"~~",type:"styleFn",name:"strikethrough"},h1:{id:5,title:"标题 1",className:"h1",level:"1",type:"headingFn",name:"h1"},h2:{id:6,title:"标题 2",className:"h2",level:"2",type:"headingFn",name:"h2"},h3:{id:7,title:"标题 3",className:"h3",level:"3",type:"headingFn",name:"h3"},h4:{id:8,title:"标题 4",className:"h4",level:"4",type:"headingFn",name:"h4"},h5:{id:9,title:"标题 5",className:"h5",level:"5",type:"headingFn",name:"h5"},h6:{id:10,title:"标题 6",className:"h6",level:"6",type:"headingFn",name:"h6"},hr:{id:11,title:"横线",className:"fa fa-minus",type:"styleFn",name:"hr"},quote:{id:12,title:"引用",className:"fa fa-quote-left",prefix:"> ",type:"styleFn",name:"quote"},list:{id:13,title:"无序列表",className:"fa fa-list-ul",prefix:"- ",type:"styleFn",name:"list"},"list-2":{id:14,title:"有序列表",className:"fa fa-list-ol",prefix:"1. ",type:"styleFn",name:"list-2"},square:{id:15,title:"未完成任务列表",className:"fa fa-square-o",prefix:"- [ ] ",type:"styleFn",name:"square"},"check-square":{id:16,title:"已完成任务列表",className:"fa fa-check-square-o",prefix:"- [x] ",type:"styleFn",name:"check-square"},link:{id:17,title:"链接",className:"fa fa-link",text:"链接文字",url:"http://example.com",type:"styleFn",name:"link"},image:{id:18,title:"图片",className:"fa fa-image",text:"图片描述",url:"http://example.com/example.png",type:"styleFn",name:"image"},code:{id:19,title:"代码",className:"fa fa-code",type:"styleFn",name:"code"},table:{id:20,title:"表格",className:"fa fa-table",type:"tableFn",name:"table"},emoji:{id:21,title:"Emoji 图标",className:"fa fa-smile-o",target:"emoji-modal",type:"emoji"},math:{id:22,title:"数学公式",className:"fa fa-superscript",sample:"E = mc^2",type:"mathFn",name:"math"},flow:{id:23,title:"流程图",className:"fa fa-long-arrow-right",type:"flowchart",name:"flow"},diagram:{id:24,title:"顺序图",className:"fa fa-exchange",type:"diagram",name:"diagram"},gantt:{id:25,title:"甘特图",className:"fa fa-sliders",type:"gantt",name:"gantt"},preview:{id:27,title:"预览",className:"fa fa-columns",type:"preview"},expand:{id:28,title:"最大化",title2:"还原",className:"fa fa-expand",type:"expand"},divider:{id:parseInt(1e6*Math.random()),type:"divider"}},extendButtons:{},quickSearch:{},hideButtons:[],additionalButtons:[],replaceButtons:[],locale:"zh-cn",language:{"en-us":{heading:"H1",bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strike through",h1:"H1",h2:"H2",h3:"H3",h4:"H4",h5:"H5",h6:"H6",hr:"Hr",quote:"Quote",list:"Ul","list-2":"Ol",square:"Unfinished","check-square":"Completed",link:"Link","link-text":"Link",image:"Image","image-text":"Description",code:"Code",table:"Table",emoji:"Emoji",math:"Math",flow:"Flow",diagram:"Flowchart",gantt:"Gantt",preview:"Preview",max:"Max",original:"Reduction",col:"col",row:"row",diagram:"sequenceDiagram\nA->>B: How are you?\nB->>A: I am fine!",placeholder:"Content ..."},"zh-cn":{heading:"标题",bold:"粗体",italic:"斜体",underline:"下划线",strikethrough:"删除线",h1:"标题 1",h2:"标题 2",h3:"标题 3",h4:"标题 4",h5:"标题 5",h6:"标题 6",hr:"横线",quote:"引用",list:"无序列表","list-2":"有序列表",square:"未完成任务列表","check-square":"已完成任务列表",link:"链接","link-text":"链接文字",image:"图片","image-text":"图片描述",code:"代码",table:"表格",emoji:"Emoji 图标",math:"数学公式",flow:"流程图",diagram:"顺序图",gantt:"甘特图",preview:"预览",max:"最大化",original:"还原",col:"列",row:"行",diagram:"sequenceDiagram\nA->>B: 你好吗?\nB->>A: 我很好3!",placeholder:"输入内容..."},"zh-tw":{heading:"標題",bold:"粗體",italic:"斜體",underline:"下劃線",strikethrough:"刪除線",h1:"標題 1",h2:"標題 2",h3:"標題 3",h4:"標題 4",h5:"標題 5",h6:"標題 6",hr:"橫線",quote:"引用",list:"無序列表","list-2":"有序列表",square:"未完成任務列表","check-square":"已完成任務列表",link:"鏈接","link-text":"鏈接文字",image:"圖片","image-text":"圖片描述",code:"代碼",table:"表格",emoji:"Emoji 圖標",math:"數學公式",flow:"流程圖",diagram:"順序圖",gantt:"甘特圖",preview:"預覽",max:"最大化",original:"還原",col:"列",row:"行",diagram:"sequenceDiagram\nA->>B: 你好嗎?\nB->>A: 我很好!",placeholder:"輸入內容..."},"ja-jp":{heading:"标题",bold:"粗体",italic:"斜体",underline:"下划线",strikethrough:"删除线",h1:"标题 1",h2:"标题 2",h3:"标题 3",h4:"标题 4",h5:"标题 5",h6:"标题 6",hr:"横线",quote:"引用",list:"无序列表","list-2":"有序列表",square:"未完成任务列表","check-square":"已完成任务列表",link:"链接","link-text":"链接文字",image:"图片","image-text":"图片描述",code:"代码",table:"表格",emoji:"Emoji 图标",math:"数学公式",flow:"流程图",diagram:"顺序图",gantt:"甘特图",preview:"预览",max:"最大化",original:"还原",col:"列",row:"行",diagram:"sequenceDiagram\nA->>B: 你好吗?\nB->>A: 我很好3!",placeholder:"输入内容..."}},onShow:null,onPreview:null,onChange:null,emojis:[":blush:",":scream:",":smirk:",":smiley:",":stuck_out_tongue_closed_eyes:",":stuck_out_tongue_winking_eye:",":rage:",":disappointed:",":sob:",":kissing_heart:",":wink:",":pensive:",":confounded:",":flushed:",":relaxed:",":mask:",":heart:",":broken_heart:",":sunny:",":umbrella:",":cloud:",":snowflake:",":snowman:",":zap:",":cyclone:",":foggy:",":ocean:",":cat:",":dog:",":mouse:",":hamster:",":rabbit:",":wolf:",":frog:",":tiger:",":koala:",":bear:",":pig:",":pig_nose:",":cow:",":boar:",":monkey_face:",":monkey:",":horse:",":racehorse:",":camel:",":sheep:",":elephant:",":panda_face:",":snake:",":bird:",":baby_chick:",":hatched_chick:",":hatching_chick:",":chicken:",":penguin:",":turtle:",":bug:",":honeybee:",":ant:",":beetle:",":snail:",":octopus:",":tropical_fish:",":fish:",":whale:",":whale2:",":dolphin:",":cow2:",":ram:",":rat:",":water_buffalo:",":tiger2:",":rabbit2:",":dragon:",":goat:",":rooster:",":dog2:",":pig2:",":mouse2:",":ox:",":dragon_face:",":blowfish:",":crocodile:",":dromedary_camel:",":leopard:",":cat2:",":poodle:",":paw_prints:",":bouquet:",":cherry_blossom:",":tulip:",":four_leaf_clover:",":rose:",":sunflower:",":hibiscus:",":maple_leaf:",":leaves:",":fallen_leaf:",":herb:",":mushroom:",":cactus:",":palm_tree:",":evergreen_tree:",":deciduous_tree:",":chestnut:",":seedling:",":blossom:",":ear_of_rice:",":shell:",":globe_with_meridians:",":sun_with_face:",":full_moon_with_face:",":new_moon_with_face:",":new_moon:",":waxing_crescent_moon:",":first_quarter_moon:",":waxing_gibbous_moon:",":full_moon:",":waning_gibbous_moon:",":last_quarter_moon:",":waning_crescent_moon:",":last_quarter_moon_with_face:",":first_quarter_moon_with_face:",":moon:",":earth_africa:",":earth_americas:",":earth_asia:",":volcano:",":milky_way:",":partly_sunny:",":octocat:",":squirrel:",":bamboo:",":gift_heart:",":dolls:",":school_satchel:",":mortar_board:",":flags:",":fireworks:",":sparkler:",":wind_chime:",":rice_scene:",":jack_o_lantern:",":ghost:",":santa:",":christmas_tree:",":gift:",":bell:",":no_bell:",":tanabata_tree:",":tada:",":confetti_ball:",":balloon:",":crystal_ball:",":cd:",":dvd:",":floppy_disk:",":camera:",":video_camera:",":movie_camera:",":computer:",":tv:",":iphone:",":phone:",":telephone:",":telephone_receiver:",":pager:",":fax:",":minidisc:",":vhs:",":sound:",":speaker:",":mute:",":loudspeaker:",":mega:",":hourglass:",":hourglass_flowing_sand:",":alarm_clock:",":watch:",":radio:",":satellite:",":loop:",":mag:",":mag_right:",":unlock:",":lock:",":lock_with_ink_pen:",":closed_lock_with_key:",":key:",":bulb:",":flashlight:",":high_brightness:",":low_brightness:",":electric_plug:",":battery:",":calling:",":email:",":mailbox:",":postbox:",":bath:",":bathtub:",":shower:",":toilet:",":wrench:",":nut_and_bolt:",":hammer:",":seat:",":moneybag:",":yen:",":dollar:",":pound:",":euro:",":credit_card:",":money_with_wings:",":e-mail:",":inbox_tray:",":outbox_tray:",":envelope:",":incoming_envelope:",":postal_horn:",":mailbox_closed:",":mailbox_with_mail:",":mailbox_with_no_mail:",":door:",":smoking:",":bomb:",":gun:",":hocho:",":pill:",":syringe:",":page_facing_up:",":page_with_curl:",":bookmark_tabs:",":bar_chart:",":chart_with_upwards_trend:",":chart_with_downwards_trend:",":scroll:",":clipboard:",":calendar:",":date:",":card_index:",":file_folder:",":open_file_folder:",":scissors:",":pushpin:",":paperclip:",":black_nib:",":pencil2:",":straight_ruler:",":triangular_ruler:",":closed_book:",":green_book:",":blue_book:",":orange_book:",":notebook:",":notebook_with_decorative_cover:",":ledger:",":books:",":bookmark:",":name_badge:",":microscope:",":telescope:",":newspaper:",":football:",":basketball:",":soccer:",":baseball:",":tennis:",":8ball:",":rugby_football:",":bowling:",":golf:",":mountain_bicyclist:",":bicyclist:",":horse_racing:",":snowboarder:",":swimmer:",":surfer:",":ski:",":spades:",":hearts:",":clubs:",":diamonds:",":gem:",":ring:",":trophy:",":musical_score:",":musical_keyboard:",":violin:",":space_invader:",":video_game:",":black_joker:",":flower_playing_cards:",":game_die:",":dart:",":mahjong:",":clapper:",":memo:",":pencil:",":book:",":art:",":microphone:",":headphones:",":trumpet:",":saxophone:",":guitar:",":shoe:",":sandal:",":high_heel:",":lipstick:",":boot:",":shirt:",":tshirt:",":necktie:",":womans_clothes:",":dress:",":running_shirt_with_sash:",":jeans:",":kimono:",":bikini:",":ribbon:",":tophat:",":crown:",":womans_hat:",":mans_shoe:",":closed_umbrella:",":briefcase:",":handbag:",":pouch:",":purse:",":eyeglasses:",":fishing_pole_and_fish:",":coffee:",":tea:",":sake:",":baby_bottle:",":beer:",":beers:",":cocktail:",":tropical_drink:",":wine_glass:",":fork_and_knife:",":pizza:",":hamburger:",":fries:",":poultry_leg:",":meat_on_bone:",":spaghetti:",":curry:",":fried_shrimp:",":bento:",":sushi:",":fish_cake:",":rice_ball:",":rice_cracker:",":rice:",":ramen:",":stew:",":oden:",":dango:",":egg:",":bread:",":doughnut:",":custard:",":icecream:",":ice_cream:",":shaved_ice:",":birthday:",":cake:",":cookie:",":chocolate_bar:",":candy:",":lollipop:",":honey_pot:",":apple:",":green_apple:",":tangerine:",":lemon:",":cherries:",":grapes:",":watermelon:",":strawberry:",":peach:",":melon:",":banana:",":pear:",":pineapple:",":sweet_potato:",":eggplant:",":tomato:",":corn:",":alien:",":angel:",":anger:",":angry:",":anguished:",":astonished:",":baby:",":blue_heart:",":blush:",":boom:",":bow:",":bowtie:",":boy:",":bride_with_veil:",":broken_heart:",":bust_in_silhouette:",":busts_in_silhouette:",":clap:",":cold_sweat:",":collision:",":confounded:",":confused:",":construction_worker:",":cop:",":couple_with_heart:",":couple:",":couplekiss:",":cry:",":crying_cat_face:",":cupid:",":dancer:",":dancers:",":dash:",":disappointed:",":dizzy_face:",":dizzy:",":droplet:",":ear:",":exclamation:",":expressionless:",":eyes:",":facepunch:",":family:",":fearful:",":feelsgood:",":feet:",":finnadie:",":fire:",":fist:",":flushed:",":frowning:",":girl:",":goberserk:",":godmode:",":green_heart:",":grey_exclamation:",":grey_question:",":grimacing:",":grin:",":grinning:",":guardsman:",":haircut:",":hand:",":hankey:",":hear_no_evil:",":heart_eyes_cat:",":heart_eyes:",":heart:",":heartbeat:",":heartpulse:",":hurtrealbad:",":hushed:",":imp:",":information_desk_person:",":innocent:",":japanese_goblin:",":japanese_ogre:",":joy_cat:",":joy:",":kiss:",":kissing_cat:",":kissing_closed_eyes:",":kissing_heart:",":kissing_smiling_eyes:",":kissing:",":laughing:",":lips:",":love_letter:",":man_with_gua_pi_mao:",":man_with_turban:",":man:",":mask:",":massage:",":metal:",":muscle:",":musical_note:",":nail_care:",":neckbeard:",":neutral_face:",":no_good:",":no_mouth:",":nose:",":notes:",":ok_hand:",":ok_woman:",":older_man:",":older_woman:",":open_hands:",":open_mouth:",":pensive:",":persevere:",":person_frowning:",":person_with_blond_hair:",":person_with_pouting_face:",":point_down:",":point_left:",":point_right:",":point_up_2:",":point_up:",":poop:",":pouting_cat:",":pray:",":princess:",":punch:",":purple_heart:",":question:",":rage:",":rage1:",":rage2:",":rage3:",":rage4:",":raised_hand:",":raised_hands:",":relaxed:",":relieved:",":revolving_hearts:",":runner:",":running:",":satisfied:",":scream_cat:",":scream:",":see_no_evil:",":shit:",":skull:",":sleeping:",":sleepy:",":smile_cat:",":smile:",":smiley_cat:",":smiley:",":smiling_imp:",":smirk_cat:",":smirk:",":sob:",":sparkling_heart:",":sparkles:",":speak_no_evil:",":speech_balloon:",":star:",":star2:",":stuck_out_tongue_closed_eyes:",":stuck_out_tongue_winking_eye:",":stuck_out_tongue:",":sunglasses:",":suspect:",":sweat_drops:",":sweat_smile:",":sweat:",":thought_balloon:",":-1:",":thumbsdown:",":thumbsup:",":+1:",":tired_face:",":tongue:",":triumph:",":trollface:",":two_hearts:",":two_men_holding_hands:",":two_women_holding_hands:",":unamused:",":v:",":walking:",":wave:",":weary:",":wink2:",":wink:",":woman:",":worried:",":yellow_heart:",":yum:",":zzz:",":109:",":house:",":house_with_garden:",":school:",":office:",":post_office:",":hospital:",":bank:",":convenience_store:",":love_hotel:",":hotel:",":wedding:",":church:",":department_store:",":european_post_office:",":city_sunrise:",":city_sunset:",":japanese_castle:",":european_castle:",":tent:",":factory:",":tokyo_tower:",":japan:",":mount_fuji:",":sunrise_over_mountains:",":sunrise:",":stars:",":statue_of_liberty:",":bridge_at_night:",":carousel_horse:",":rainbow:",":ferris_wheel:",":fountain:",":roller_coaster:",":ship:",":speedboat:",":boat:",":sailboat:",":rowboat:",":anchor:",":rocket:",":airplane:",":helicopter:",":steam_locomotive:",":tram:",":mountain_railway:",":bike:",":aerial_tramway:",":suspension_railway:",":mountain_cableway:",":tractor:",":blue_car:",":oncoming_automobile:",":car:",":red_car:",":taxi:",":oncoming_taxi:",":articulated_lorry:",":bus:",":oncoming_bus:",":rotating_light:",":police_car:",":oncoming_police_car:",":fire_engine:",":ambulance:",":minibus:",":truck:",":train:",":station:",":train2:",":bullettrain_front:",":bullettrain_side:",":light_rail:",":monorail:",":railway_car:",":trolleybus:",":ticket:",":fuelpump:",":vertical_traffic_light:",":traffic_light:",":warning:",":construction:",":beginner:",":atm:",":slot_machine:",":busstop:",":barber:",":hotsprings:",":checkered_flag:",":crossed_flags:",":izakaya_lantern:",":moyai:",":circus_tent:",":performing_arts:",":round_pushpin:",":triangular_flag_on_post:",":jp:",":kr:",":cn:",":us:",":fr:",":es:",":it:",":ru:",":gb:",":uk:",":de:",":100:",":1234:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:",":keycap_ten:",":zero:",":hash:",":symbols:",":arrow_backward:",":arrow_down:",":arrow_forward:",":arrow_left:",":capital_abcd:",":abcd:",":abc:",":arrow_lower_left:",":arrow_lower_right:",":arrow_right:",":arrow_up:",":arrow_upper_left:",":arrow_upper_right:",":arrow_double_down:",":arrow_double_up:",":arrow_down_small:",":arrow_heading_down:",":arrow_heading_up:",":leftwards_arrow_with_hook:",":arrow_right_hook:",":left_right_arrow:",":arrow_up_down:",":arrow_up_small:",":arrows_clockwise:",":arrows_counterclockwise:",":rewind:",":fast_forward:",":information_source:",":ok:",":twisted_rightwards_arrows:",":repeat:",":repeat_one:",":new:",":top:",":up:",":cool:",":free:",":ng:",":cinema:",":koko:",":signal_strength:",":u5272:",":u5408:",":u55b6:",":u6307:",":u6708:",":u6709:",":u6e80:",":u7121:",":u7533:",":u7a7a:",":u7981:",":sa:",":restroom:",":mens:",":womens:",":baby_symbol:",":no_smoking:",":parking:",":wheelchair:",":metro:",":baggage_claim:",":accept:",":wc:",":potable_water:",":put_litter_in_its_place:",":secret:",":congratulations:",":m:",":passport_control:",":left_luggage:",":customs:",":ideograph_advantage:",":cl:",":sos:",":id:",":no_entry_sign:",":underage:",":no_mobile_phones:",":do_not_litter:",":non-potable_water:",":no_bicycles:",":no_pedestrians:",":children_crossing:",":no_entry:",":eight_spoked_asterisk:",":eight_pointed_black_star:",":heart_decoration:",":vs:",":vibration_mode:",":mobile_phone_off:",":chart:",":currency_exchange:",":aries:",":taurus:",":gemini:",":cancer:",":leo:",":virgo:",":libra:",":scorpius:",":sagittarius:",":capricorn:",":aquarius:",":pisces:",":ophiuchus:",":six_pointed_star:",":negative_squared_cross_mark:",":a:",":b:",":ab:",":o2:",":diamond_shape_with_a_dot_inside:",":recycle:",":end:",":on:",":soon:",":clock1:",":clock130:",":clock10:",":clock1030:",":clock11:",":clock1130:",":clock12:",":clock1230:",":clock2:",":clock230:",":clock3:",":clock330:",":clock4:",":clock430:",":clock5:",":clock530:",":clock6:",":clock630:",":clock7:",":clock730:",":clock8:",":clock830:",":clock9:",":clock930:",":heavy_dollar_sign:",":copyright:",":registered:",":tm:",":x:",":heavy_exclamation_mark:",":bangbang:",":interrobang:",":o:",":heavy_multiplication_x:",":heavy_plus_sign:",":heavy_minus_sign:",":heavy_division_sign:",":white_flower:",":heavy_check_mark:",":ballot_box_with_check:",":radio_button:",":link:",":curly_loop:",":wavy_dash:",":part_alternation_mark:",":trident:",":black_square:",":white_square:",":white_check_mark:",":black_square_button:",":white_square_button:",":black_circle:",":white_circle:",":red_circle:",":large_blue_circle:",":large_blue_diamond:",":large_orange_diamond:",":small_blue_diamond:",":small_orange_diamond:",":small_red_triangle:",":small_red_triangle_down:",":shipit:"],emojRegx:/\:[a-z0-9_\-\+]+\:/g}).controller("wtEditorCtrl",["$scope","$timeout","wtEditorConfig","wtEditorService",function(e,t,a,n){this.initGantt=function(){n.initGantt()},this.initMarked=function(){n.initMarked()},this.setFullScreen=function(a,n){var r=$(e.vm.element);r.css(a?{left:0,top:0,right:0,bottom:0}:{width:"100%",height:"100%"}),t(function(){e.vm.editorHeight.height=$(e.vm.element).find(".wt-editor-container-code").height()+"px"})};var r=function(e){return e.replace(a.emojRegx,function(e){if(-1!==a.emojis.indexOf(e)){var t=String(e).slice(1,-1);return'<img class="emoji" title=":'+t+':" alt="'+t+'" src="https://s.tylingsoft.com/emoji-icons/'+t+'.png" width="18" />'}return e})};this.hasSelection=function(){var t=e.vm.editor;return t.selectionStart===t.selectionEnd?!1:!0},this.getSelection=function(){var t=e.vm.editor;return{target:t,start:t.selectionStart,end:t.selectionEnd,text:t.value.substring(t.selectionStart,t.selectionEnd)}},this.insertText=function(t,a,n){var r=e.vm.editor;r.focus();var i=r.value.substring(0,a),o=r.value.substring(n);e.value=i+t+o},this.clearSelection=function(){e.vm.editor.selectionStart=e.vm.editor.selectionEnd},this.setFocus=function(a,n){t(function(){e.vm.editor.selectionStart=a,e.vm.editor.selectionEnd=n})},this.isRowFirst=function(t){var a=e.vm.editor,n=a.value.substr(0,t),r=n.substr(n.lastIndexOf("\n")+1);return 0===r.length?!0:!1},this.getRowText=function(t){var a=e.vm.editor,n=a.value.substr(0,t),r=n.substr(n.lastIndexOf("\n")+1);return r},this.previewHTML=function(){var t=n.parseMarked(e.vm.editor.value);t=r(t),this.setHeight(),$(e.vm.element).find(".markdown-body").empty().append(t),n.parseMermaid(),a.onPreview&&a.onPreview(),e.vm.editor.focus()},this.setPriviewScroll=function(){},this.insertContent=function(t){var a=this.getSelection();this.insertText(t,a.start,a.end),e.vm.editor.focus()},this.insertQuickSearch=function(e,t){var a=this.getSelection();this.insertText(e,a.start-t.length,a.end),this.setFocus(a.start-t.length+e.length,a.start-t.length+e.length)},this.getContent=function(){return e.vm.editor.value},this.getLocaleText=function(e){var t=a.language[a.locale];if(t){var n=t[e];if(n)return n;console.log("text "+e+" none!")}else{console.log("locale "+a.locale+" none!"),t=a.language["zh-cn"];var n=t[e];if(n)return n;console.log("text "+e+" none!")}},this.setHeight=function(){e.vm.autoHeight&&(e.vm.editorHeight.height=$(e.vm.element).find(".wt-editor-container-code").height()+"px")}}]).directive("wtEditor",["wtEditorConfig","$timeout","$compile","$rootScope","$controller",function(e,t,a,n,r){return{require:["wtEditor","ngModel"],replace:!0,scope:{value:"=ngModel",config:"="},controller:"wtEditorCtrl",templateUrl:"wt-editor/editor.html",link:function(n,i,o,s){function l(e,t,a,n,r,i){if(-1!=a.text.indexOf("\n")&&n&&r&&i){a.text.length>0&&(a=s[0].getSelection());var o=a.text.replace(r,i),l=s[0].getRowText(a.start);s[0].insertText(o,a.start-l.length,a.end),s[0].setFocus(a.start+o.length,a.start+o.length)}else{a.text.length>0&&(s[0].clearSelection(),a=s[0].getSelection());var l=s[0].getRowText(a.start);s[0].insertText(e+" "+l,a.start-l.length,a.end),s[0].setFocus(a.start+e.length+1,a.start+e.length+1)}}n.maxHeight=e.maxHeight;var c=n.vm={element:i,value:n.value,emojiValue:"",faValue:"",toolbars:[],headers:[],editorHeight:{},header_action:!1,table_action:!1,tableMenu:[[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]],[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],[[2,0],[2,1],[2,2],[2,3],[2,4],[2,5]],[[3,0],[3,1],[3,2],[3,3],[3,4],[3,5]],[[4,0],[4,1],[4,2],[4,3],[4,4],[4,5]]],tableActiveX:1,tableActiveY:1,autoHeight:n.config.autoHeight||!1,className:n.config.className};e.replaceButtons=[],e.additionalButtons=[],e.hideButtons=[],angular.extend(e,n.config),$(e.typeArray[e.type]).each(function(t,a){var n=e.allButtons[a];n||(n=e.extendButtons[a]),n&&(c.toolbars[c.toolbars.length]=n)}),$(e.typeArray.hs).each(function(t,a){var n=e.allButtons[a];n&&(c.headers[c.headers.length]=n)}),_.remove(c.toolbars,function(t){return t.id?-1!==_.indexOf(e.hideButtons,t.id):void 0}),e.replaceButtons.length>0&&$(e.replaceButtons).each(function(t){var a=e.replaceButtons[t];if(a.id){var n=_.findLastIndex(c.toolbars,function(e){return e.id===a.id});c.toolbars.splice(n,1,a)}}),e.additionalButtons.length>0&&$(e.additionalButtons).each(function(t){var a=e.additionalButtons[t];if(a.before){var n=_.findLastIndex(c.toolbars,function(e){return e.id===a.before});c.toolbars.splice(n,0,a)}else c.toolbars.push(a)}),c.editor=$(i).find(".wt-editor-textarea")[0];try{c.editor.setAttribute("placeholder",s[0].getLocaleText("placeholder"))}catch(h){}c.styleFn=function(e,t){var a=s[0].getSelection();switch(e){case"bold":if(s[0].hasSelection())if(-1!=a.text.indexOf("\n")){a=s[0].getSelection();var n=a.text.replace(/([^\n]+)([\n\s]*)/g,"**$1**$2"),r=s[0].getRowText(a.start);s[0].insertText(n,a.start-r.length,a.end),s[0].setFocus(a.start+n.length,a.start+n.length)}else s[0].insertText(" **"+a.text+"** ",a.start,a.end),s[0].setFocus(a.start,a.start+6+a.text.length);else{var r=s[0].getRowText(a.start);r.length>0?(s[0].insertText(" **** ",a.start,a.end),s[0].setFocus(a.start+3,a.start+3)):(s[0].insertText("****",a.start,a.end),s[0].setFocus(a.start+2,a.start+2))}break;case"italic":if(s[0].hasSelection())if(-1!=a.text.indexOf("\n")){a=s[0].getSelection();var n=a.text.replace(/([^\n]+)([\n\s]*)/g,"_$1_$2"),r=s[0].getRowText(a.start);s[0].insertText(n,a.start-r.length,a.end),s[0].setFocus(a.start+n.length,a.start+n.length)}else s[0].insertText(" _"+a.text+"_ ",a.start,a.end),s[0].setFocus(a.start,a.start+4+a.text.length);else{var r=s[0].getRowText(a.start);r.length>0?(s[0].insertText(" __ ",a.start,a.end,2,2),s[0].setFocus(a.start+2,a.start+2)):(s[0].insertText("__",a.start,a.end,1,1),s[0].setFocus(a.start+1,a.start+1))}break;case"underline":if(s[0].hasSelection())if(-1!=a.text.indexOf("\n")){a=s[0].getSelection();var n=a.text.replace(/([^\n]+)([\n\s]*)/g,"<u>$1</u>$2"),r=s[0].getRowText(a.start);s[0].insertText(n,a.start-r.length,a.end),s[0].setFocus(a.start+n.length,a.start+n.length)}else s[0].insertText("<u>"+a.text+"</u>",a.start,a.end),s[0].setFocus(a.start,a.start+7+a.text.length);else s[0].insertText("<u></u>",a.start,a.end,3,4),s[0].setFocus(a.start+3,a.start+3);break;case"strikethrough":if(s[0].hasSelection())if(-1!=a.text.indexOf("\n")){a=s[0].getSelection();var n=a.text.replace(/([^\n]+)([\n\s]*)/g," ~~$1~~ $2"),r=s[0].getRowText(a.start);s[0].insertText(n,a.start-r.length,a.end),s[0].setFocus(a.start+n.length,a.start+n.length)}else s[0].insertText(" ~~"+a.text+"~~ ",a.start,a.end),s[0].setFocus(a.start,a.start+6+a.text.length);else{var r=s[0].getRowText(a.start);r.length>0?(s[0].insertText(" ~~~~ ",a.start,a.end),s[0].setFocus(a.start+3,a.start+3)):(s[0].insertText("~~~~",a.start,a.end),s[0].setFocus(a.start+2,a.start+2))}break;case"h1":l("#","",a,!0,/(.+)([\n]?)/g,"\n# $1$2\n"),c.header_action=!1;break;case"h2":l("##","",a,!0,/(.+)([\n]?)/g,"\n## $1$2\n"),c.header_action=!1;break;case"h3":l("###","",a,!0,/(.+)([\n]?)/g,"\n### $1$2\n"),c.header_action=!1;break;case"h4":l("####","",a,!0,/(.+)([\n]?)/g,"\n#### $1$2\n"),c.header_action=!1;break;case"h5":l("#####","",a,!0,/(.+)([\n]?)/g,"\n##### $1$2\n"),c.header_action=!1;break;case"h6":l("######","",a,!0,/(.+)([\n]?)/g,"\n###### $1$2\n"),c.header_action=!1;break;case"hr":a.text.length>0&&(s[0].clearSelection(),a=s[0].getSelection()),s[0].insertText("\n---\n",a.start,a.end),s[0].setFocus(a.start+5,a.start+5);break;case"quote":l(">","",a,!0,/(.+)([\n]?)/g,"\n> $1$2");break;case"list":l("-","",a,!0,/(.+)([\n]?)/g,"\n- $1$2");break;case"list-2":l("1.","",a,!0,/(.+)([\n]?)/g,"\n1. $1$2");break;case"square":l("- [ ] ","",a,!0,/(.+)([\n]?)/g,"- [ ] $1$2");break;case"check-square":l("- [x] ","",a,!0,/(.+)([\n]?)/g,"- [x] $1$2");break;case"link":var i="http://xxx.com",o=s[0].getLocaleText("link-text");a.text.length>0&&(-1!=a.text.indexOf("http")?i=a.text:o=a.text);var h="["+o+"]("+i+")";s[0].insertText(h,a.start,a.end),s[0].setFocus(a.start+h.length,a.start+h.length);break;case"image":var o=s[0].getLocaleText("image-text"),i="http://lesschat.com/x.png";a.text.length>0&&(-1!=a.text.indexOf("http")?i=a.text:o=a.text);var h="!["+o+"]("+i+")";s[0].insertText(h,a.start,a.end),s[0].setFocus(a.start+h.length,a.start+h.length);break;case"code":0===a.text.length?(s[0].insertText("\n```\n  \n```\n",a.start,a.end),s[0].setFocus(a.start+6,a.start+6)):(s[0].insertText("`"+a.text+"`",a.start,a.end),s[0].setFocus(a.start+2+a.text.length,a.start+2+a.text.length));break;case"table":c.table_action=!0;break;case"math":var d=a.text;0==d.length&&(d="E = mc^2"),s[0].insertText("\n```math\n"+d+"\n```\n",a.start,a.end),s[0].setFocus(a.start+d.length+14,a.start+d.length+14);break;case"flow":var d=a.text;0==d.length&&(d="graph LR\nA-->B"),s[0].insertText("\n```\n"+d+"\n```\n",a.start,a.end),s[0].setFocus(a.start+d.length+10,a.start+d.length+10);break;case"diagram":var d=a.text;0==d.length&&(d=s[0].getLocaleText("diagram")),s[0].insertText("\n```\n"+d+"\n```\n",a.start,a.end),s[0].setFocus(a.start+d.length+10,a.start+d.length+10);break;case"gantt":var d=a.text;0==d.length&&(d="gantt\n",d+="dateFormat YYYY-MM-DD\n",d+="section S1\n",d+="T1: 2014-01-01, 9d\n",d+="section S2\n",d+="T2: 2014-01-11, 9d",d+="section S3\n",d+="T3: 2014-01-02, 9d"),s[0].insertText("\n```\n"+d+"\n```\n",a.start,a.end),s[0].setFocus(a.start+d.length+10,a.start+d.length+10)}},s[0].initGantt(),c.renderer=s[0].initMarked(),c.togglePreview=function(){c.isPreview=!c.isPreview,c.isPreview===!0&&t(function(){s[0].previewHTML()},50)},c.toggleFullScreen=function(){c.isFullscreen=!c.isFullscreen,c.isPreview===!0&&c.togglePreview(),s[0].setFullScreen(c.isFullscreen,c.editor)},c.insertEmoji=function(){c.emojiValue=c.emojiValue.trim(),/^:/.test(c.emojiValue)||(c.emojiValue=":"+c.emojiValue),/:$/.test(c.emojiValue)||(c.emojiValue=c.emojiValue+":");var e=s[0].getSelection();s[0].insertText(c.emojiValue,e.start,e.end),c.editor.focus(),c.emojiValue=""},c.insertFa=function(){if(c.faValue=c.faValue.trim(),c.faValue.length>0){var e=s[0].getSelection(),t="<i class='fa fa-"+c.faValue+"'></i>";s[0].insertText(t,e.start,e.end),c.editor.focus(),c.faValue=""}},c.keyUpFn=function(t){if(c.editor){var a=c.editor.value,n=a.substr(c.editor.selectionStart-e.quickSearch.length,e.quickSearch.length),r=_.find(e.quickSearch.options,{action:n});r&&r.controller(s[0],t)}},n.$watch("value",function(a,n){if(c.editor&&a){var r=c.editor.value;e.onChange&&e.onChange(r),c.isPreview===!0&&t(function(){s[0].previewHTML()},128)}}),n.$watch("config.autofocus",function(e,t){e&&c.editor.focus()}),e.onShow&&e.onShow(),c.setHeaderLi=function(e){c.header_action=!c.header_action},c.setTableMemu=function(e,t){c.tableActiveX=e,c.tableActiveY=0==t?1:t},c.insertTable=function(){for(var e=c.tableActiveY,t=c.tableActiveX+1,a=s[0].getLocaleText("col"),n="---",r=s[0].getLocaleText("row"),i=0;e>i;i++)a+="| "+s[0].getLocaleText("col")+" ",n+="| --- ",r+="| "+s[0].getLocaleText("row")+" ";for(var o="",i=0;t>i;i++)o+=r+"\n";var l=a+"\n"+n+"\n"+o,h=s[0].getSelection();h.text.length>0&&(s[0].clearSelection(),h=s[0].getSelection()),s[0].isRowFirst(h.start)?(s[0].insertText("\n"+l+"\n\n",h.start,h.end),s[0].setFocus(h.start+l.length+2,h.start+l.length+2)):(s[0].insertText("\n\n"+l+"\n\n",h.start,h.end),s[0].setFocus(h.start+l.length+4,h.start+l.length+4)),c.table_action=!1},$(document).click(function(e){var t=$(e.target);n.$apply(function(){t.hasClass("fa-header")||"h"==t.attr("flag")||(c.header_action=!1),t.hasClass("fa-table")||"table"==t.attr("flag")||(c.table_action=!1)})}),$(window).on("resize",_.throttle(function(){t(function(){c.editorHeight.height=$(i).find(".wt-editor-container-code").height()+"px"},50)},150)),t(function(){_.forEach(e.extendButtons,function(e,t){var n=$(i).find("[name="+e.name+"]");if(n.size()>0){var o=n.scope().$new();if(e.controller){var l={};l.$scope=o,l.editorInstance=s[0],r(e.controller,l),n.html(a(e.template)(o))}}}),c.editorHeight.height=$(i).find(".wt-editor-container-code").height()+"px",n.maxHeight=c.autoHeight?e.maxHeight:parseInt(c.editorHeight.height)>30?parseInt(c.editorHeight.height)-30:null},128)}}}]).service("wtEditorService",["wtEditorConfig",function(e){this.initGantt=function(){window.mermaid&&(mermaid.parseError=function(e,t){mermaid.error=e},mermaid.ganttConfig={numberSectionStyles:4,axisFormatter:[["%I:%M",function(e){return e.getHours()}],["w. %U",function(e){return 1==e.getDay()}],["%a %d",function(e){return e.getDay()&&1!=e.getDate()}],["%b %d",function(e){return 1!=e.getDate()}],["%m-%y",function(e){return e.getMonth()}]]})},this.initMarked=function(){var e=new marked.Renderer;e.listitem=function(e){if(!/^\[[ x]\]\s/.test(e))return marked.Renderer.prototype.listitem(e);var t=$('<input type="checkbox" disabled/>');return/^\[x\]\s/.test(e)&&t.attr("checked",!0),$(marked.Renderer.prototype.listitem(e.substring(3))).addClass("task-list-item").prepend(t)[0].outerHTML},e.codespan=function(e){if(/^\$.+\$$/.test(e)){var t=/^\$(.+)\$$/.exec(e)[1],a=t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");try{return katex.renderToString(a,{displayMode:!1})}catch(n){return"<code>"+n+"</code>"}}return marked.Renderer.prototype.codespan.apply(this,arguments)},e.code=function(e,t,a,n){e=e.trim();var r=e.split(/\n/)[0].trim();if("math"===t){var i="";return e.split(/\n\n/).forEach(function(e){if(e=e.trim(),e.length>0)try{i+=katex.renderToString(e,{displayMode:!0})}catch(t){i+="<pre>"+t+"</pre>"}}),'<div data-line="'+n+'">'+i+"</div>"}return"gantt"===r||"sequenceDiagram"===r||r.match(/^graph (?:TB|BT|RL|LR|TD);?$/)?("sequenceDiagram"===r&&(e+="\n"),window.mermaid&&mermaid.parse(e)?'<div class="mermaid" data-line="'+n+'">'+e+"</div>":window.mermaid&&mermaid.error?'<pre data-line="'+n+'">'+mermaid.error+"</pre>":void 0):marked.Renderer.prototype.code.apply(this,arguments)},e.html=function(e){var t=marked.Renderer.prototype.html.apply(this,arguments),a=$(t.bold());return a.html()},e.paragraph=function(e){var t=marked.Renderer.prototype.paragraph.apply(this,arguments),a=$(t.bold());

return a.html()},marked.setOptions({renderer:e,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!0})},this.parseMarked=function(e){return marked(e)},this.parseMermaid=function(){window.mermaid&&mermaid.init()},this.setEditorExtendButtons=function(t){t&&(e.extendButtons=t)},this.setEditorQuickSearch=function(t){t&&(e.quickSearch=t)},this.setEditorTypes=function(t){t&&angular.extend(e.typeArray,t)},this.getEditorType=function(){return e.type},this.setLocale=function(t){t&&(e.locale=t,"zh-cn"!=t&&_.forEach(e.allButtons,function(t,a){var n=e.language[e.locale];if(n){var r=n[a];if(r&&(t.title=r),t.text){var i=n[a+"-text"];i&&(t.text=i)}}}))},this.addLocale=function(t){t&&angular.extend(e.language,t)},this.setMaxHeight=function(t){t&&(e.maxHeight=t)}}]);
angular.module("wt.editor.tpl",[]).run(["$templateCache",function(e){e.put("wt-editor/editor.html",'<div class="wt-editor {{vm.className}}" ng-class="{true: \'wt-editor-full-screen\', false: \'\'}[vm.isFullscreen]">\r    <div class="wt-editor-toobar">\r        <div class="noselect">\r            <ul class="wtEditorToolBarUl">\r                <li class="wtEditorToolBarli" ng-repeat="item in vm.toolbars track by $index" name="{{item.name}}" ng-class="(item.id == 0 && vm.header_action)?\'active\':\'\'">\r                    <!--自定义toolbar-->\r                    <i ng-if="item.type === \'custom\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  ng-click="item.action($event,vm)"></i>\r\r                    <i ng-if="item.type === \'headingFns\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.setHeaderLi(item.id)"></i>\r\r                    <div ng-if="item.type === \'headingFns\'" ng-show="vm.header_action" class="toolbar-menu" flag="h">\r                        <ul flag="h">\r                            <li ng-repeat="n in vm.headers" ng-class="n.className" ng-click="vm.styleFn(n.name,$event)" flag="h">\r                                {{n.title}}\r                            </li>\r                        </ul>\r                    </div>\r\r                    <i ng-if="item.type === \'styleFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  ng-click="vm.styleFn(item.name,$event)"></i>\r                    <!--<i ng-if="item.type === \'headingFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  ng-click="vm.styleFn(item.name,$event)">h{{item.level}}</i>-->\r\r                    <i ng-if="item.type === \'tableFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"\r                       ng-click="vm.styleFn(item.name,$event)"></i>\r\r\r                    <div ng-if="item.type === \'tableFn\'" ng-show="vm.table_action" class="table-menu" flag="table" ng-mouseleave="vm.tableActiveX=1;vm.tableActiveY=1;vm.table_action=false">\r                        <ul flag="table">\r                            <li flag="table" ng-repeat="n in vm.tableMenu">\r                                <i ng-repeat="s in n" flag="table" ng-click="vm.insertTable()" ng-mouseenter="vm.setTableMemu(s[0],s[1])" ng-mouseleave="" ng-class="{true: \'active\', false: \'\'}[s[0]<=vm.tableActiveX && s[1] <= vm.tableActiveY]"></i>\r                            </li>\r                        </ul>\r                    </div>\r\r\r                    <i ng-if="item.type === \'emoji\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  data-toggle="modal" data-target="#{{item.target}}"></i>\r\r                    <i ng-if="item.type === \'mathFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'flowchart\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'diagram\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'gantt\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'help\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" data-toggle="modal" data-target="#{{item.target}}"></i>\r                    <i ng-if="item.type === \'preview\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.togglePreview()"></i>\r                    <i ng-if="item.type === \'expand\'" title="{{vm.isFullscreen?item.title2:item.title}}" class="{{item.className}} toolbar-icon" ng-class="{true: \'fa-compress\', false: \'fa-expand\'}[vm.isFullscreen]" ng-click="vm.toggleFullScreen()"></i>\r                    <i ng-if="item.type === \'divider\'" class="divider"></i>\r                </li>\r            </ul>\r        </div>\r    </div>\r    <div class="wt-editor-container" ng-class="{true:\'height-auto\',false:\'\'}[vm.autoHeight]">\r        <div class="wt-editor-container-code">\r            <textarea class="wt-editor-textarea" msd-elastic ng-model="value" ng-keyup="vm.keyUpFn($event)" max-height="maxHeight"></textarea>\r        </div>\r        <div class="wt-editor-container-preview" ng-style="vm.editorHeight" ng-show="vm.isPreview">\r            <article class="markdown-body" data-open-title="Hide Preview" data-closed-title="Show Preview"></article> <!-- 实时预览 -->\r        </div>\r    </div>\r</div>\r')}]);