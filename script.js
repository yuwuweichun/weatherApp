//两个卡片 放大，倾斜效果
let message = document.getElementById('message');
let tip = document.getElementById('tip');

message.addEventListener('mousemove', function (e) {
  let width = message.offsetWidth;
  let height = message.offsetHeight;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  //0.5的作用:修正鼠标与元素的相对位置，使得鼠标在元素中间时相对位置为(0,0)
  //后面乘的参数越大，倾斜角度越大

  let tiltX = (mouseY / height - 0.5) * 60;
  let tiltY = -(mouseX / width - 0.5) * 60;

  message.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.2)`;
});

message.addEventListener('mouseout', function () {
  message.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

//获取DOM
let weatherDOM = document.getElementById('weather');
let temperatureDOM = document.getElementById('temperature');
let feelsLikeDOM = document.getElementById('feelsLike');
let humidityDOM = document.getElementById('humidity');
let tipFromAlyssaDOM = document.getElementById('tipFromAlyssa');

tip.addEventListener('mousemove', function (e) {
  let width = tip.offsetWidth;
  let height = tip.offsetHeight;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  let tiltX = (mouseY / height - 0.5) * 60;
  let tiltY = -(mouseX / width - 0.5) * 60;

  tip.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.2)`;
});

tip.addEventListener('mouseout', function () {
  tip.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

//click searchButton 触发函数，获取城市名称，更新请求URL，发起HTTP请求
document.getElementById('searchButton').addEventListener('click', function () {

  let cityName = document.getElementById('searchBar').value;
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=53ad837388ff25d07e12f443d4d7005c';
  console.log(cityName)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let weather = data.weather[0].main; // 获取天气状况
      let temperature = (data.main.temp - 273.15).toFixed(2); // 获取气温 开尔文温度变为摄氏度 保留两位小数
      let feelsLike = (data.main.feels_like - 273.15).toFixed(2); // 获取体感温度 开尔文温度变为摄氏度 保留两位小数
      let humidity = data.main.humidity; // 获取湿度

      //以下部分
      let index;
      const tipFromAlyssaArray = [
        //index 0
        '哎呀，主人，虽然天气晴朗，但气温低于0°可得注意保暖了呢！(￣▽￣*)ゞ在这样的天气里，建议您穿上厚实的羽绒服或者冬季外套，下面可以穿保暖裤，以及羊毛袜和暖和的雪地靴保护双脚免受寒冷的侵袭。别忘了带上帽子、围巾和手套，特别是耳朵和手指，要格外呵护以避免受冻。户外活动方面，阳光明媚的日子适合进行一些冬季运动，比如滑雪或滑冰，这样既能锻炼身体也能享受冬日的乐趣。不过，记得活动前后要做好热身和放松，以防肌肉拉伤。如果不怎么喜欢户外活动，那就在家里找一个舒适的角落，泡一杯热茶或者热巧克力，包个毯子坐在窗边看看书或欣赏窗外的景色，也是很惬意的享受呢。保持屋内适宜的温度，晚上早点睡，确保充足的睡眠，这样可以更好地适应冬季的寒冷天气。注意身体，保持健康哦！(っ˘з(˘⌣˘ )💕',
        //index 1
        '主人，天气虽然晴朗，但气温只有0°到10°，还是挺凉的哦！这样的天气，建议您穿上秋冬款的外套，比如风衣或者轻便的羽绒服。里面可以穿上毛衣和打底衫，保暖又不会太过笨重。下身搭配牛仔裤或是加绒打底裤，以及一双保暖的靴子，就可以出门啦！(๑˃ᴗ˂)ﻭ在这种气温下，户外活动还是很舒适的，可以考虑去散步、跑步或骑车，享受新鲜空气和阳光。当然，出门前记得检查一下自己是否穿得够暖和，特别是早晚时分可能会更冷一些。同时，适当携带一顶帽子和一条围巾，根据体感调整穿戴，以应对温差变化。最后，不论您在室内还是室外，记得保持身体的水分，温暖的饮料会是不错的选择。祝您有个美好的一天！(｡･ω･｡)ﾉ♡',
        //index 2
        '哎呀，主人，你那边的天气听起来真不错呢！既然是晴朗的天气，气温也很宜人，那出门时可以穿得轻便一些，比如长袖T恤或薄款外套，再搭配一条舒适的牛仔裤或是休闲裤，这样既适应白天的温暖也防止傍晚时分的微凉。😊在这样美好的天气里，不妨多花些时间在户外，去公园散步，或者和朋友们一起去郊外踏青，享受大自然的美好。记得带上太阳镜和防晒霜，保护皮肤不受紫外线的伤害哦！如果有时间，还可以骑单车或者做一些户外运动，活跃身心，保持愉快的心情呢！( •̀ ω •́ )当然了，带上一瓶水和一些简单的零食，随时补充能量，让你的户外活动更加完美！如果选择在家，也可以打开窗户，让新鲜的空气流通，做做瑜伽放松一下，也是很好的选择呢。无论你做什么，希望你都能享受到美好的一天！(๑˃ᴗ˂)ﻭ',
        //index 3
        '主人，在这么晴朗的天气下，温度又在20°到30°之间，这简直是春夏交际的完美天气呀！(✧ω✧)建议您穿着轻薄透气的衣服，比如短袖T恤或亚麻衬衫，下身可以搭配短裤或长裤，根据您的喜好来选择哦。如果是女生的话，穿上一件飘逸的连衣裙也是非常合适的，清凉又时尚！出行的话，可以戴上一顶遮阳帽和太阳镜来防晒，别忘了涂抹防晒霜保护皮肤，因为即使天气很好，紫外线也可能很强哦。随身携带一瓶水，保持水分补充，这样可以在炎热的天气中保持清凉。在这样的天气里，做些户外活动是再合适不过了，无论是去海边、公园散步，或者与朋友们户外聚会，都会让人心情愉悦。晚上的时候，温度会下降一些，如果您打算在户外逗留到傍晚或晚上，记得带一件薄外套哦，以防凉风。总之，希望您能充分利用这样美好的天气，享受室外的时光，度过一个愉快的一天！(＾▽＾)',
        //index 4
        '主人，在气温大于30°的晴朗天气里，炎热可不容小觑呢！(＞﹏＜) 建议您选择一些轻薄、透气的衣物，比如棉质的短袖T恤、吊带衫、短裙或是短裤。穿浅色系的衣服可以帮助反射阳光，避免吸收太多热量。记得戴上遮阳帽和太阳镜保护眼睛，涂抹足够的防晒霜以防晒伤。出行时尽量选择早晨或傍晚凉爽一些的时候，避免中午阳光直射的高温时段。携带一把遮阳伞也是个不错的选择，可以为您随时提供阴凉。同时，随身携带充足的水分，补充身体流失的水分和电解质，保持身体的清凉和水分平衡。尽量减少户外活动的时间，选择室内空调环境或者有阴凉的地方进行休闲活动。如果您喜欢游泳，这个天气去游泳池消暑也是个不错的选择哦！无论如何，请务必注意防暑降温，保持健康呢！祝您在这热浪中也能保持凉爽愉悦！(๑>ᴗ<๑)',
        //index 5
        '哎呀，主人，多云天气加上气温低于0°，真是有点寒冷呢！记得穿上温暖的冬装，比如厚重的羽绒服或者毛呢大衣，里面可以多穿几层，比如毛衣加打底衫，保持身体的温暖。别忘了戴上帽子、手套和围巾，特别要保护好头部、手部和脖颈，避免热量流失。天气这么冷，尽量减少不必要的户外活动。如果需要外出的话，尽量快速完成任务，然后回到温暖的室内。同时，喝一些热饮如热茶或热巧克力也是很好的暖身方式。在家时，可以适当开启暖气或者空调，保持室内舒适的温度。如果您喜欢户外运动，不妨尝试一些适合冬天的活动，比如滑雪或滑冰，但一定要做好保暖措施，避免着凉。在这样的天气里，享受一场雪景也是不错的选择，只要您穿的暖和哦！总之，保暖很重要，注意身体，别冻着了。希望主人不管在哪里都能感到温暖舒适！(｡･ω･｡)ﾉ♡',
        //index 6
        '主人，在多云且气温在0°到10°的天气里，建议您穿得暖和些。可以选择穿上厚一点的外套，比如棉衣或轻薄的羽绒服，内搭可以是毛衣或长袖加绒上衣，以及一条温暖的裤子。鞋子方面，建议穿上保暖的靴子，保持脚部的温暖。别忘了戴上帽子和手套，尤其是在清晨和傍晚，这时候气温会更低。如果您要长时间待在户外，建议带上围巾和耳罩，更好地防止寒风侵袭。这样的天气也很适合在室内享受温馨的时光，比如泡一杯热茶或咖啡，读本书或看部电影。如果您需要外出，记得检查天气预报，注意随时调整您的穿着和行程安排，以应对可能的温度变化哦！保持温暖，享受这个季节的美好吧！(๑˃ᴗ˂)ﻭ',
        //index 7
        '主人，多云天气下气温在10°到20°，这样的天气穿着层次感的服装是最合适不过了。建议您可以穿一件长袖T恤或衬衫，外面再搭配一件针织开衫或轻薄夹克，这样既可以保持温暖，又方便根据天气变化增减衣物。下身可以配牛仔裤或休闲裤，搭配运动鞋或舒适的靴子。这样的天气适合进行一些户外活动，比如散步、轻松的徒步或者去咖啡店享受悠闲的午后时光。如果您觉得有些凉，记得带上一条围巾或一顶帽子，这样可以在保暖的同时也增加整体造型的时尚感。不过别忘了，多云的天气里太阳偶尔会出来，擦上防晒霜来保护皮肤也很重要哦！希望主人无论在室内还是室外都能享受到这个季节的美好！(～￣▽￣)～',
        //index 8
        '在多云且气温在20°到30°的天气里，可以穿得稍微轻便些，比如短袖或长袖T恤搭配薄款外套、长裤或半身裙。既然天气很舒适，不妨多到户外活动活动，比如去公园散步或者骑自行车。记得带上太阳镜和涂抹防晒霜，以免紫外线伤害皮肤。同时，也要随身携带水壶，保持充足的水分摄入，享受美好的一天！(๑>ᴗ<๑)',
        //index 9
        '主人，多云且气温高于30°的天气下，一定要注意防暑降温啦！建议您穿轻薄透气的衣物，如棉质短袖衫、亚麻衬衫或背心，下身可以搭配短裤或薄款长裤。出门记得带上遮阳帽和太阳镜来保护头部和眼睛，防止强烈的阳光直射。涂抹足够的防晒霜，保护皮肤不受紫外线伤害。由于温度较高，尽量避开中午时分强烈的太阳外出，可以选择早晚凉爽的时候进行户外活动。同时，随身携带一瓶水，随时补充水分，避免中暑。如果您在户外活动时感到不适，应立即寻找阴凉处休息并降温。希望您在这样炎热的天气中也能保持凉爽和舒适！(๑˃ᴗ˂)ﻭ',
        //index 10
        '哎呀，主人，听起来你那边的天气好像有点小冷呢，还在下雨。╮(╯_╰)╭ 记得要带把大伞，防止淋湿了感冒。穿着方面，建议穿上温暖的毛衣和防水的外套，还有保暖的靴子，这样即使踩到雨水也不怕。(*^▽^*)这样的天气，如果不是很急的话，建议主人还是待在家里吧，搭个小窝，泡一杯热茶，看看书或者看看喜欢的剧，享受一下慢生活。如果真的需要外出，记得路上小心，雨天路滑，安全第一哦！(๑>ᴗ<๑)如果主人喜欢宅在家也可以做做烘焙，雨天的时候焗个小蛋糕或者做做饼干，味道会特别好哦！当然，最重要的是保持好心情，雨天也有雨天的美呀！希望主人不管做什么都开心快乐！~\(≧▽≦)/~',
        //index 11
        '主人，雨天加上气温在10°到20°，记得要穿得暖和些哦！建议您穿上防水的外套或雨衣，内搭可以是长袖上衣和毛衣，以及一条保暖的牛仔裤。鞋子方面，选择一双防水的鞋子，比如雨靴，以防脚部湿冷。别忘了带伞，最好是那种大一点、结实的雨伞，以免被风吹翻。如果出门时需要携带包包，可以选择防水材质的，或者用防水袋来保护您的物品不受雨水侵泡。在这样的天气里，尽量减少不必要的外出。如果必须要出门，注意选择安全的路线，避免积水和滑倒。回家后，记得及时更换干爽的衣物，喝点热饮，让身体暖和起来。希望主人雨天也能保持好心情，度过每一天！(๑˃ᴗ˂)ﻭ',
        //index 12
        '主人，雨天气温在20°到30°，这样的天气很适合穿轻便的防雨装备。建议您穿上一件轻薄的防水夹克或雨衣，下身可以穿快干材质的裤子，以便在淋湿后能迅速干燥。穿上一双防水的凉鞋或雨鞋，以保持脚部的干燥与舒适。出门时不要忘记带一把结实的雨伞，以防突然的阵雨。此外，也可以携带一件轻薄的长袖衫，如果天气转凉或进入空调环境时可以随时穿上。由于气温较高，雨后可能会有些闷热，记得选择透气性好的衣物，保持身体凉爽。这种天气里，室外活动可能会受到限制，建议您尽量安排在室内进行。可以趁这个机会去健身房锻炼，或者在家做一些瑜伽伸展运动。如果需要外出，尽量避开积水较深的地区，行走时要小心谨慎。希望主人雨天也能愉快哦！(๑˃ᴗ˂)ﻭ',
        //index 13
        '哎呀，主人，在雨天气温超过30°的天气里，我们要格外注意防暑又要防雨呢！您可以穿上轻薄的速干衣料的衣服，这样哪怕淋湿了也能快速干燥，同时也有助于散热。另外，建议穿上凉鞋或者防水的透气鞋，避免鞋子进水感到不适。出门记得携带一把大伞，既能遮挡雨水，也可以为您提供一些阴凉。尽量避免在户外长时间活动，因为高温加上潮湿可能会导致身体不适。随身携带足够的饮用水，及时补充水分和电解质，防止中暑。如果需要出门，尽量安排在雨势较小的时候，避免在暴雨中行走。回到家中或安全的室内后，及时更换干爽的衣物，并适当降温放松。希望主人雨天也能保持凉爽舒适！(๑˃ᴗ˂)ﻭ',
        //index 14
        '在雷雨天气且气温在0°到10°的情况下，建议您穿上防水性能好的外套，最好是带帽子的，以防雷雨。内层可以穿上保暖性较好的衣物，如羊毛衫或者加绒衣服。鞋子方面，穿防水的靴子会更适合，保护脚不被雨水浸湿。同时，一定要记得带上一把结实的伞，防止雷雨中被雨淋湿。由于气温偏低，建议尽量减少在雷雨天气中的外出，如果确实需要外出，请注意安全，避免靠近高大的树木或者电线杆等可能导电的地方，以防雷击。雷雨过后，路面可能比较湿滑，请您小心行走，尽量避免积水较深的地区。保持身体干燥和温暖是非常关键的，如果衣物不慎被雨水浸湿，回到室内后应立即更换，以免着凉感冒。希望主人在这样的天气里也能保持温暖和安全！(๑˃ᴗ˂)ﻭ',
        //index 15
        '在雷雨天气气温在10°到20°的情况下，建议您穿上防水的外套或雨衣，以及防滑的鞋子来应对湿滑的路面。里面可以穿上舒适的棉质衣物，比如长袖T恤或薄款针织衫，既可以保暖又方便活动。外出时记得携带一把坚固的雨伞，避免被雷雨淋湿。尽量避免在室外活动，特别是在树下、水塘边或其他空旷地带，以防雷电危险。保持身体温暖，注意安全哦！(๑˃ᴗ˂)ﻭ',
        //index 16
        '在雷雨天气，气温在20°到30°的情况下，虽然温度不低，但雨水和雷电还是需要重视的。您可以穿着短袖或薄长袖衣物，再搭配一件轻便的防水外套以应对可能的降雨。鞋子选择防水性好的款式，以保持脚部的干燥。外出时别忘了带上一把结实的雨伞，防止突如其来的雷阵雨让您措手不及。另外，雷雨天气更应注意安全，尽量避免在户外活动期间使用手机和其他电子设备，以免引发不必要的危险。如果需要在外面等待，尽量寻找安全的室内场所避难。当然，如果您可以的话，尽量选择留在室内直到雷雨过去，这样是最安全的。希望您在雷雨天气中也能安全舒适！(๑˃ᴗ˂)ﻭ',
        //index 17
        '主人，在气温高于30°的雷雨天气里，很重要的是要注意身体的舒适和安全。建议您穿着轻薄、透气的衣物，比如棉质短袖或短裤，以应对闷热的天气。同时，由于有雷雨，外出时一定要带上雨伞或穿上防水的雨衣，以防突然降雨。雷雨天气不宜在户外活动，尤其是要避免在树下、水边等地方避雨，因为这些地方容易引雷。如果在室外被雨困，尽量找到安全的室内场所避难。此外，由于温度较高，要记得多喝水，及时补充流失的水分和电解质，防止热射病。如果您感觉身体不适，应立即停止所有活动，寻求阴凉处休息。希望主人在这样的天气下也能保持愉快和健康！(๑˃ᴗ˂)ﻭ',
        //index 18
        '主人，下雪天气真是浪漫又美丽呢！不过要记得保暖哦！建议您穿上厚重的羽绒服或者棉衣，里面可以多穿几层，比如穿上毛衣和保暖内衣。下身可以选择保暖裤和羊毛袜，再穿上一双防水保暖的靴子。别忘了戴上帽子、手套和围巾，尤其要保护好耳朵和手指不受冻。出行时要特别小心路面可能会变滑，走路尽量选用防滑的鞋子，步伐放轻放稳。如果您想要在雪地里玩耍，记得穿上合适的雪地装备，并保持手机电量充足，以防紧急情况。享受雪景时也别忘了随时保持身体温暖。在家里，可以泡一杯热饮，窝在沙发上看看书或者看场电影，享受这个季节的惬意时光吧！(❄️˘▽˘❄️)',
        //index 19
        '抱歉呀，主人╮(╯_╰)╭  。Alyssa目前还不能针对这种天气情况给出建议哦',
        
      ]



      //写一个冗杂的判断
      /* OpenWeatherMap API 的 weather 值主要具有以下类型：
      
      Clear（晴朗）
      Clouds（云）
      Drizzle（毛毛雨）|| Rain（雨）
      Thunderstorm（雷雨）
      Snow（雪）
      为大气时，不做建议
      Atmosphere（大气，通常用于如雾、烟雾、沙尘暴之类的天气状况）*/
      if (weather === 'Clear') {
        if (temperature < 0) {
          index = 0;
        }
        else if (temperature >= 0 && temperature <= 10) {
          index = 1;
        }
        else if (temperature > 10 && temperature <= 20) {
          index = 2;
        }
        else if (temperature > 20 && temperature <= 30) {
          index = 3;
        }
        else if (temperature > 30) {
          index = 4;
        }
      }
      else if (weather === 'Clouds') {
        if (temperature < 0) {
          index = 5;
        }
        else if (temperature >= 0 && temperature <= 10) {
          index = 6;
        }
        else if (temperature > 10 && temperature <= 20) {
          index = 7;
        }
        else if (temperature > 20 && temperature <= 30) {
          index = 8;
        }
        else if (temperature > 30) {
          index = 9;
        }
      }
      else if (weather === 'Rain' || weather === 'Drizzle') {

        if (temperature >= 0 && temperature <= 10) {
          index = 10;
        }
        else if (temperature > 10 && temperature <= 20) {
          index = 11;
        }
        else if (temperature > 20 && temperature <= 30) {
          index = 12;
        }
        else if (temperature > 30) {
          index = 13;
        }
      }
      else if (weather === 'Thunderstorm') {

        if (temperature >= 0 && temperature <= 10) {
          index = 14;
        }
        else if (temperature > 10 && temperature <= 20) {
          index = 15;
        }
        else if (temperature > 20 && temperature <= 30) {
          index = 16;
        }
        else if (temperature > 30) {
          index = 17;
        }
      }
      else if (weather === 'Snow') {
        index = 18;
      }
      else {
        index = 19;
      }


    
      //以上部分



      //将上一次的查询结果清除
      weatherDOM.textContent = '今日天气';

      temperatureDOM.textContent = '当前气温';

      feelsLikeDOM.textContent = '体感温度';

      humidityDOM.textContent = '相对湿度';

      tipFromAlyssaDOM.textContent = '';




      // 更新message部分 做适当处理

      weatherDOM.textContent += weather;

      temperatureDOM.textContent += temperature += '°C';

      feelsLikeDOM.textContent += feelsLike += '°C';

      humidityDOM.textContent += humidity += '%rh';


      //更新tip部分 逐字显示
      let text = tipFromAlyssaArray[index];
      let element = document.getElementById('tipFromAlyssa');

      typeWriter(text, element);



    })
    .catch(error => {
      console.error(error)
    });
});



//逐字打印函数
function typeWriter(text, element) {
  let index = 0;

  let timer = setInterval(function () {
    if (index < text.length) {
      let letter = text.charAt(index);
      element.textContent += letter;
      index++;
    } else {
      clearInterval(timer); // 清除定时器
    }
  }, 50); // 每100毫秒打印一个字符
}








