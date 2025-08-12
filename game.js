const dino = document.getElementById('dino');
const gameArea = document.getElementById('gameArea');

let isJumping = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        dino.style.animation = 'jump 0.6s ease-out forwards';
        setTimeout(() => {
            dino.style.animation = '';
            isJumping = false;
        }, 600);
    }
});

// Colisão com o obstáculo
function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const obstacle = document.querySelector('#obstacle');
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinoRect.bottom >= obstacleRect.top &&
        dinoRect.right >= obstacleRect.left &&
        dinoRect.left <= obstacleRect.right
    ) {
        alert('Game Over!');
        document.location.reload();
    }
}

// Atualizar a posição do obstáculo
function moveObstacle() {
    const obstacle = document.querySelector('#obstacle');
    let position = parseInt(obstacle.style.right.replace('px', ''));

    if (position >= gameArea.offsetWidth) {
        obstacle.style.right = '-40px';
    } else {
        obstacle.style.right = `${position + 5}px`;
    }

    checkCollision();
}

setInterval(moveObstacle, 20);
