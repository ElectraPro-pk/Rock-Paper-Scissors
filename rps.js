const game = ()=> {
    let player_score = 0;
    let computer_score = 0;

    const startgame = ()=>{
        const playbtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playbtn.addEventListener('click',()=>{
            introscreen.classList.add('fadeOut');
            match.classList.add('fadeIn'); 
        });
        };

        const playmatch = ()=>{
            const options = document.querySelectorAll('.option button');
            const player_hand = document.querySelector('.player-hand');
            const computer_hand = document.querySelector('.computer-hand');
            const hand = document.querySelectorAll('.hands img')

            hand.forEach(hand =>{
                hand.addEventListener("animationend", function(){
                    this.style.animation = "";
                });       
            });

            const computer_options = ['Rock','Paper','Scissors'];

            options.forEach(options =>{
                options.addEventListener('click',function(){

            const computer_number = Math.floor(Math.random() * 3);
            const computer_choice = computer_options[computer_number];
            
            setTimeout (()=>{

            
            compare_hands(this.textContent,computer_choice);

            player_hand.src = `./assts/${this.textContent}.png`;
            computer_hand.src = `./assts/${computer_choice}.png`;
            },2000);
            
            player_hand.style.animation = "shakeplayerhand 2s  linear";
            computer_hand.style.animation = "shakeComputer 2s  linear";
            });
                
            });
        };
        const compare_hands = (player_choice , computer_choice) => {
            console.log(player_choice,computer_choice)
            var winner = document.querySelector('.winner')
            
            if(player_choice === computer_choice) {
                winner.textContent = 'its a tie';
                console.info(winner)
                return;
            }
            if(player_choice === 'Rock' ){
                if(computer_choice === 'Scissors'){
                    winner.textContent = 'player wins';
                    console.info(winner)
                    player_score++;
                    updatescore();
                    return;
                }else{
                    winner.textContent = 'computer wins';
                    console.info(winner)
                    computer_score++;
                    updatescore();
                    return;
                }
                
            }
            if(player_choice === 'Paper'){
                if(computer_choice === 'Scissors'){
                    winner.textContent = 'computer wins';
                    console.info(winner)
                    computer_score++;
                    updatescore();
                    return;
                }
                else{
                    winner.textContent = 'Player wins'
                    console.info(winner)
                    player_score++;
                    updatescore();
                    return;
                }
            }
            if(player_choice === 'Scissors'){
                if(computer_choice === 'Paper'){
                    winner.textContent = 'player wins';
                    console.info(winner)
                    player_score++;
                    updatescore();
                    return;
                }
                else{
                    winner.textContent = 'computer wins'
                    console.info(winner)
                    computer_score++;
                    updatescore();
                    return;
                }
            }
        }
        const updatescore = ()=>{
            const playerscore = document.querySelector('.player-score p');
            const computerscore = document.querySelector('.computer-score p');
            playerscore.textContent = player_score;
            computerscore.textContent = computer_score; 
        }
        startgame();
        playmatch();
    };
    game();
    

