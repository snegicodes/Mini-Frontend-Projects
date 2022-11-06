const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 15000;
const breathTime = totalTime/3;
const holdTime = totalTime/3;

breatheAnim();

function breatheAnim(){
    text.innerText = "INHALE!";
    container.className = 'container grow';

    setTimeout(function(){
        text.innerText = 'HOLD!';
        // container.className =  'container shrink';

        setTimeout(function(){
            container.className =  'container shrink';
            text.innerText ='EXHALE!';

        }, holdTime);
    }, breathTime);
} 

setInterval(breatheAnim ,totalTime);