const p = document.getElementById("pronk-container");
const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const vals = [
    `just a prank bro`,
    `just a prank bro`,
    `just a prank bro`,
    `just a prank bro`,
    `just a prank bro`,
    `just a prank bro`,
    `just a prank bro`,
    `🤪`,
    `🤓`,
    `😒`,
    `😝`,
    `🥺`,
    `HAHAHAHAHAHA`,
    `LOLOLOLOL`,
    `UWUWUWUWUWUWUWUWU`
];

setInterval(spawn, 100);
setInterval(bg, 200);

function spawn() {
    const x = rand(0, width);
    const y = rand(0, height);
    const e = document.createElement('div');
    e.innerHTML = vals[rand(0, vals.length)];
    e.style.position = "absolute";
    e.style.top = `${y}px`;
    e.style.left = `${x}px`;
    e.style.fontSize = `${rand(16, 72)}px`;
    e.style.color = `hsl(${rand(0, 360)}, 100%, 50%)`;
    p.appendChild(e);
}

function bg() {
    document.body.style.background = `hsl(${rand(0, 360)}, 100%, 50%)`; 
}

function rand(u, d) {
    return Math.floor(Math.random() * d) + u;
}

