window.addEventListener('DOMContentLoaded', () => {
    const startPointFirst = document.querySelector('.start__point-first');
    const startPointSecond = document.querySelector('.start__point-second');
    const startPointThird = document.querySelector('.start__point-third');
    const buttonFirst = document.querySelector('.plan__button-first');
    const buttonSecond = document.querySelector('.plan__button-second');
    const startContentFirst = document.querySelector('.start__slider_content-first');
    const startContentSecond = document.querySelector('.start__slider_content-second');
    const startContentThird = document.querySelector('.start__slider_content-third');
    const startbuttonFirst = document.querySelector('.start__button-left');
    const startbuttonSecond = document.querySelector('.start__button-right');

    const helpButtonOpen = document.querySelectorAll('.help__info_button-open');
    const helpButtonClose = document.querySelectorAll('.help__info_button-close');
    
    function planSwitcher(){
        

        buttonFirst.addEventListener("click", () => {
            buttonSecond.classList.remove('plan__button-active');
            buttonFirst.classList.add('plan__button-active');
        }  );
        buttonSecond.addEventListener("click", () => {
            buttonFirst.classList.remove('plan__button-active');
            buttonSecond.classList.add('plan__button-active');
        }  );
    }
    

    function startPointSwitcher(){
        


        

        

        startPointFirst.classList.add('start__point-active');
        startPointSecond.classList.remove('start__point-active');
        startPointThird.classList.remove('start__point-active');


        startPointFirst.addEventListener('click', () => {
            startPointFirst.classList.add('start__point-active');
            startPointSecond.classList.remove('start__point-active');
            startPointThird.classList.remove('start__point-active');
        } );
        startPointSecond.addEventListener('click', () => {
            startPointFirst.classList.remove('start__point-active');
            startPointSecond.classList.add('start__point-active');
            startPointThird.classList.remove('start__point-active');
        } );
        startPointThird.addEventListener('click', () => {
            startPointFirst.classList.remove('start__point-active');
            startPointSecond.classList.remove('start__point-active');
            startPointThird.classList.add('start__point-active');
        } );

        let count = 0;

    }

    function startContentSwitcher(){
        let arrWithContent = [startContentFirst,startContentSecond,startContentThird];
        let i = 0;

        startPointFirst.addEventListener("click", () =>{
            arrWithContent[i].classList.add('show');
            arrWithContent[i+1].classList.add('hide');
            arrWithContent[i+2].classList.add('hide');

            arrWithContent[i].classList.remove('hide');
            arrWithContent[i+1].classList.remove('show');
            arrWithContent[i+2].classList.remove('show');
        });

        startPointSecond.addEventListener("click", () =>{
            arrWithContent[i+1].classList.add('show');
            arrWithContent[i].classList.add('hide');
            arrWithContent[i+2].classList.add('hide');
            
            arrWithContent[i+1].classList.remove('hide');
            arrWithContent[i].classList.add('hide');
            arrWithContent[i+2].classList.add('hide');
        });

        startPointThird.addEventListener("click", () =>{
            arrWithContent[i+2].classList.add('show');
            arrWithContent[i].classList.add('hide');
            arrWithContent[i+1].classList.add('hide');

            arrWithContent[i+2].classList.remove('hide');
            arrWithContent[i].classList.remove('show');
            arrWithContent[i+1].classList.remove('show');
        });

    }
    function startContentWithArrow(){
        
        let count = 0;
        let arrWithContent = [startContentFirst,startContentSecond,startContentThird];

        arrWithContent[count].classList.add('show');
        arrWithContent[count+1].classList.add('hide');
        arrWithContent[count+2].classList.add('hide');

        startbuttonSecond.addEventListener('click', () => {
            let i = count;
            
            if(i< 2){
                arrWithContent[i].classList.add('hide');
                arrWithContent[i].classList.remove('show');

                arrWithContent[i+1].classList.add('show');
                arrWithContent[i+1].classList.remove('hide');

                count++;
            }
            else{

            }

        


           
        } );
        startbuttonFirst.addEventListener('click', () => {
            let i = count;
            if(i === 0 ){
                arrWithContent[i].classList.add('show');
                arrWithContent[i].classList.remove('hide');

            }
            else{
                arrWithContent[i - 1].classList.add('show');
                arrWithContent[i - 1].classList.remove('hide');

                arrWithContent[i].classList.add('hide');
                arrWithContent[i ].classList.remove('show');
                count--;
            }
        } );
    }
    function switchPointWhenSlideArrow(){
        let count = 0;
        let arrWithPoint = [startPointFirst,startPointSecond,startPointThird];

        arrWithPoint[count].classList.add('start__point-active');
        arrWithPoint[count+1].classList.add('start__point-unactive');
        arrWithPoint[count+2].classList.add('start__point-unactive');




        startbuttonSecond.addEventListener('click', () => {
            let i = count;
            
            if(i< 2){
                arrWithPoint[i].classList.add('start__point-unactive');
                arrWithPoint[i].classList.remove('start__point-active');

                arrWithPoint[i+1].classList.add('start__point-active');
                arrWithPoint[i+1].classList.remove('start__point-unactive');    
                count++;
            }
            else{
                
            }

        


           
        } );
        startbuttonFirst.addEventListener('click', () => {
            let i = count;
            if(i === 0 ){
               
                arrWithPoint[i].classList.add('show');
                arrWithPoint[i].classList.remove('hide');


            }
            else{
                arrWithPoint[i - 1].classList.add('start__point-active');
                arrWithPoint[i - 1].classList.remove('start__point-unactive');

                arrWithPoint[i].classList.add('start__point-unactive');
                arrWithPoint[i ].classList.remove('start__point-active');
                count--;
            }
        } );
       

    }

    function quotesSwiper(){
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',  
            },
            keyboard:true,
            
            slidesPerView:1.4,
          });
    }

    function helpOpenCard(){   
        
        let cardParent = document.querySelectorAll('.help__card');



        cardParent.forEach((item) => {
            item.addEventListener('click', () =>{
                

                if(event.target.getAttribute('data-') === 'button' ){
                    let contentVisible = item.querySelector('.help__card_content');
                    contentVisible.classList.add('show');
                    contentVisible.classList.remove('hide');


                    item.querySelector('.help__info_button-open').classList.add("show");
                    item.querySelector('.help__info_button-open').classList.remove("hide");
                    item.querySelector('.help__info_button-close').classList.add("hide");
                    item.querySelector('.help__info_button-close').classList.remove("show");

                    
                    

                }
                else if(event.target.getAttribute('data-') === 'button-open' ){
                    let contentVisible = item.querySelector('.help__card_content');
                    contentVisible.classList.add('hide');
                    contentVisible.classList.remove('show');


                    item.querySelector('.help__info_button-open').classList.remove("show");
                    item.querySelector('.help__info_button-open').classList.add("hide");
                    item.querySelector('.help__info_button-close').classList.remove("hide");
                    item.querySelector('.help__info_button-close').classList.add("show");

                }
                else{

                }               
            });
        });    

    };

  
   

    planSwitcher();
    startPointSwitcher();
    startContentSwitcher();
    startContentWithArrow();
    switchPointWhenSlideArrow();
    quotesSwiper();
    helpOpenCard();
});