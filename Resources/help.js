var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;


var currentWin = Ti.UI.currentWindow;
var image=Ti.UI.createImageView({
    url:'images/aide.jpg'
});
currentWin.add(image);
/*var title_label=Ti.UI.createLabel({
    text:'uttRSS',
    top:10,
    font:{
            fontStyle:'bold',
            fontSize:60
        },
    color:'#336699'
});

currentWin.add(title_label);
Titanium.API.info(title_label.font.fontFamily);
var subtitle_label=Ti.UI.createLabel({
    text:'Mobile suite',
    top:100,
    font:{
            fontStyle:'bold',
            fontSize:20
        },
    color:'#336699'
});
currentWin.add(subtitle_label);*/