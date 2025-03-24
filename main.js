// タイマー時刻保持
var time = 0;

// タイマー&読み込み
let reading = setInterval(setText,1000);
// 要素削除
let deleteItem = setInterval(clearElem,100);

function setText(){

    time++;

    var hour=Math.trunc(time/3600);
    var minute=Math.trunc((time-hour*3600)/60);
    var second=Math.trunc(time-minute*60-hour*3600);

    if(hour<10){
        hour = "0" + hour;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }

    let elemnts = document.getElementsByTagName('h1');
    let element = elemnts.item(2);

    if(element==null){
        // 読み込み完了まで待機
    }else{

        var color;
        if(time<300){
            color = 'blue';
        }else{
            color = 'red';
        }
        element.innerHTML = `<div style='background-color:${color}; color:yellow; font-size: large; padding: 5px;'>動画視聴時間：${hour}時間${minute}分${second}秒</div>`;
        //clearInterval(reading);
    }
    //elemnts.item(2).innerHTML = "<div style='background-color:red; color:yellow; font-size: large;'>OKです</div>";
}

// 指定されたクラス名の要素をすべて削除
function deleteElementClass(className){
    var deleteElement = document.getElementsByClassName(className);
    if(deleteElement!=null){
        for(var elm of deleteElement){
            console.log(elm);
            elm.remove();
        }
    }
}

// YouTubeで動画のみを表示する
function allClaer(){
    deleteElementClass('style-scope');
}


function clearElem(){

    // 関連動画非表示
    deleteElementClass('style-scope ytd-compact-video-renderer');
    // 関連再生リスト非表示
    //deleteElementClass('ytd-watch-next-secondary-results-renderer lockup');
    deleteElementClass('style-scope ytd-watch-next-secondary-results-renderer');

    // 最後の動画非表示
    deleteElementClass('ytp-endscreen-content');

    // ホーム画面非表示
    //deleteElementClass('style-scope ytd-rich-item-renderer');
    //deleteElementClass('style-scope ytd-rich-grid-media');
    deleteElementClass('style-scope ytd-browse grid grid-disabled');

    // 動画のみを表示
    //allClaer();

}
