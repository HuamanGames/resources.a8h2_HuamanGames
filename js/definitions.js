function _helpcommands(){
    document.querySelector(".instructions").innerHTML="<p>_help:commands</p><p>_help:controls</p><p>_GiveMeTheCode</p><p><b><u>Sandbox Games:</u></b></p><p>_BB8</p><p>_BB9E</p><p><b><u>Games:</u></b></p><p>_Snake</p><p>_SquareJump:Easy</p><p>_BallMove</p><p>_2048:Starwars</p><p>_2048:MEME</p><p>_FlappyBird</p><p>_Coil</p><p>_Hextris</p><p>_Connect4</p><p>_Tetris</p><p>_Digger</p><p>_OhNo</p><p>_OhHi</p><p>_PacMan</p>";
    document.querySelector("body").style.background="#000000";
    setTimeout(resetCommand,500);
    setTimeout(TextBoxEditTrue, 500);
}
function _helpcontrols(){
document.querySelector(".instructions").innerHTML="<p><u><b>Controls:</b></u></p><p>All Games (except Snake): IJKL: To Move</p> <p>Snake: Arrow Keys or WASD</p><p>SquareJump:A: Fireballs (When Fire Square Activated) and flatten</p><p>SquareJump: S: Jump</p><p>SquareJump: Q,Direction: Speed Run</p><p>SquareJump: T: Fly</p><p>SquareJump: T,G: Fall down</p><p>SquareJump: T,H,Direction: Teleport</p><p>SquareJump: M: Spray Fireballs (Fire Square Not Needed)</p>";
document.querySelector("body").style.background="#000000";
setTimeout(resetCommand,500);
setTimeout(TextBoxEditTrue, 500);
}