/* Examples */

/*
 * Example 1:
 *   - no animation
 *   - custom gradient
 *
 * By the way - you may specify more than 2 colors for the gradient
 */
$('.first.circle').circleProgress({
    value: 0.35,
    animation: false,
    fill: { gradient: ['#ff1e41', '#ff5f43'] }
});

/*
 * Example 2:
 *   - default gradient
 *   - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
 */
$('.second.circle').circleProgress({
    value: 0.6
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});

/*
 * Example 3:
 *   - very custom gradient
 *   - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
 */
$('.third.circle').circleProgress({
    value: 0.75,
    fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

/*
 * Example 4:
 *   - solid color fill
 *   - custom start angle
 *   - custom line cap
 */
$('.forth.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .5,
    lineCap: 'round',
    fill: { color: '#ffa500' }
});

/*
 * Example 5:
 *   - image fill; image should be squared; it will be stretched to SxS size, where S - size of the widget
 *   - fallback color fill (when image is not loaded)
 *   - custom widget size (default is 100px)
 *   - custom circle thickness (default is 1/14 of the size)
 *   - reverse drawing mode
 *   - custom animation start value
 */
$('.fifth.circle').circleProgress({
    value: 0.7,
    size: 60,
    thickness: 20,
    animationStartValue: 1.0,
    fill: {
        color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
        image: 'http://i.imgur.com/pT0i89v.png'
    },
    reverse: true
});

/*********按钮事件********/
$('#demo-reset').click(function(){
    $('.first.circle').circleProgress({
        value: 0
    });
    $('.second.circle').circleProgress({
    value: 0
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(0 * progress) + '<i>%</i>');
    });
    $('.third.circle').circleProgress({
    value: 0,
    fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });
    $('.forth.circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: 0,
        lineCap: 'round',
        fill: { color: '#ffa500' }
    });
    $('.fifth.circle').circleProgress({
        value: 0,
        size: 60,
        thickness: 20,
        animationStartValue: 1.0,
        fill: {
            color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
            image: 'http://i.imgur.com/pT0i89v.png'
        },
        reverse: true
    });
});

$('#demo-play').click(function(){
    $('.first.circle').circleProgress({
    value: 0.35,
    animation: false,
    fill: { gradient: ['#ff1e41', '#ff5f43'] }
});

$('.second.circle').circleProgress({
    value: 0.6
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});

$('.third.circle').circleProgress({
    value: 0.75,
    fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('.forth.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .5,
    lineCap: 'round',
    fill: { color: '#ffa500' }
});

$('.fifth.circle').circleProgress({
    value: 0.7,
    size: 60,
    thickness: 20,
    animationStartValue: 1.0,
    fill: {
        color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
        image: 'http://i.imgur.com/pT0i89v.png'
    },
    reverse: true
});
});