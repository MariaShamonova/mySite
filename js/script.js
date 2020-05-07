$(document).ready(function(){

    $('.arrow-3').hide();

    $(window).scroll(function() {
        
       

        if($(this).scrollTop() != 0) {
         
        $('.arrow-3').fadeIn();
         
        } else {
         
        $('.arrow-3').fadeOut();
         
        }
         
        });
         

    var designIndividualPrice,
    designStrictPrice,
    adaptMobPrice,
    fixProgPrice,
    rubbyProgPrice,
    adaptProgBootstPrice,
    adaptProgFlexPrice,
    cmsWpPrice,
    fillingPrice,
    simpleSliderPrice,
    diffSliderPrice,
    photoGalleryPrice,
    swimMenuPrice,
    popUpFormPrice,
    integSocPrice,
    formBackPrice,
    hostingPrice,
    resultPrice = 0,
    counterPageOfDoc = 0, 
    countDesInd = 0,
    countDesStr = 0,
    countAdaptMob = 0,
    countFixProg = 0,
    countRubbyProg = 0,
    countAdaptProgBootst = 0,
    countAdaptProgFlex = 0,
    countCmsWp = 0,
    countSimplePrice = 0,
    countDiffSlider = 0,
    countPhotoGallery = 0,
    countSwimMenu = 0,
    countIntegSoc = 0,
    countFilling = 0,
    countFormBack = 0,
    countPopUpForm = 0,
    countHosting = 0,
    arrayMessage = ['','','','','','','','','','','','','','','','','',''];
    
    document.getElementById('resultPrice').textContent=resultPrice; 
    document.getElementById('counter').textContent=counterPageOfDoc;
    
    
       
        
        $(function(){
        //event.preventDefault();

        $('a[href^="#"]').on('click', function(event) {
            var href = $(this).attr('href');

            if ((href == '#form-contact' ) || ( href == '#project-one') || ( href == '#project-two')) {
               
            } else {
               
                var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            
                $('html, body').animate({scrollTop: dn}, 1000);
            } 

        });
        });
        
        

        $('input[name="ind-des"]').on('click', (function(){
            designIndividualPrice = $("input[name='ind-des']").val();
            if(countDesInd == 0){   
                countDesInd = 1;
                resultPrice += parseInt(designIndividualPrice);
                arrayMessage[0] = 'Индивидуальный дизайн десктопной версии\r\n';
            } else {
                countDesInd = 0;
                resultPrice -= designIndividualPrice;
                arrayMessage[0] = '';
            }          
            document.getElementById('resultPrice').textContent=resultPrice;    
        }));

        $('input[name="ind-str"]').on('click', (function(){
            designStrictPrice = $("input[name='ind-str']").val();
            if(countDesStr == 0){  
                countDesStr= 1;
                resultPrice += parseInt(designStrictPrice);
                arrayMessage[1] = 'Простой изайн десктопной версии в строгом стиле \r\n';
            } else {
 
                countDesStr = 0;
                resultPrice -= designStrictPrice;
                arrayMessage[1] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;     
        }));

        $('input[name="adapt-mob"]').on('click', (function(){
            adaptMobPrice = $("input[name='adapt-mob']").val();
            if(countAdaptMob == 0){  
                countAdaptMob= 1;
                resultPrice += parseInt(adaptMobPrice);
                arrayMessage[2] = 'Адаптация под мобильные устройства\r\n';
            } else {
 
                countAdaptMob = 0;
                resultPrice -= adaptMobPrice;
                arrayMessage[2] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice; 
        }));

        $('input[name="fix-prog"]').on('click', (function(){
            fixProgPrice = $("input[name='fix-prog']").val();
            if(countFixProg == 0){  
                countFixProg = 1;
                resultPrice += parseInt(fixProgPrice);
                arrayMessage[3] = 'Фиксированная верстка (ширина блоков не изменяется и появляется полосы прокрутки)\r\n';
            } else {
 
                countFixProg = 0;
                resultPrice -= fixProgPrice;
                arrayMessage[3] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;     
        }));

        $('input[name="rubby-prog"]').on('click', (function(){
            rubbyProgPrice = $("input[name='rubby-prog']").val();
            if(countRubbyProg == 0){  
                countRubbyProg = 1;
                resultPrice += parseInt(rubbyProgPrice);
                arrayMessage[4] = 'Резиновая верстка (ширина блоков масштабируется относительно окна браузера)\r\n';
            } else {
 
                countRubbyProg = 0;
                resultPrice -= rubbyProgPrice;
                arrayMessage[4] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;     
        }));

        $('input[name="adapt-prog-dif"]').on('click', (function(){
            adaptProgBootstPrice = $("input[name='adapt-prog-dif']").val();
            if(countAdaptProgBootst == 0){  
                countAdaptProgBootst = 1;
                resultPrice += parseInt(adaptProgBootstPrice);
                arrayMessage[5] = 'Адаптивная верстка Простого макета (с использованием Bootstrap)\r\n';
            } else {
 
                countAdaptProgBootst = 0;
                resultPrice -= adaptProgBootstPrice;
                arrayMessage[5] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;    
        }));

        $('input[name="adapt-prog-flex"]').on('click', (function(){
            adaptProgFlexPrice = $("input[name='adapt-prog-flex']").val();
            if(countAdaptProgFlex == 0){  
                countAdaptProgFlex = 1;
                resultPrice += parseInt(adaptProgFlexPrice);
                arrayMessage[6] = 'Адаптивная верстка сложного макета (с использованием FlexBox)\r\n';
            } else {
 
                countAdaptProgFlex = 0;
                resultPrice -= adaptProgFlexPrice;
                arrayMessage[6] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;      
        }));

        $('input[name="cms-wp"]').on('click', (function(){
            cmsWpPrice = $("input[name='cms-wp']").val();
            if(countCmsWp == 0){  
                countCmsWp = 1;
                resultPrice += parseInt(cmsWpPrice);
                arrayMessage[7] = 'Посадка верстки на WordPress (возможноть редактирования содержимого сайта)\r\n';
            } else {

                countCmsWp = 0;
                resultPrice -= cmsWpPrice;
                arrayMessage[7] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;      
        }));

        $('input[name="simple-slider"]').on('click', (function(){
            simpleSliderPrice = $("input[name='simple-slider']").val();
            if(countSimplePrice == 0){  
                countSimplePrice = 1;
                resultPrice += parseInt(simpleSliderPrice);
                arrayMessage[8] = 'Простой слайдер\r\n';
            } else {

                countSimplePrice = 0;
                resultPrice -= simpleSliderPrice;
                arrayMessage[8] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;         
        }));

        $('input[name="diff-slider"]').on('click', (function(){
            diffSliderPrice = $("input[name='diff-slider']").val();
            if(countDiffSlider == 0){  
                countDiffSlider = 1;
                resultPrice += parseInt(diffSliderPrice);
                arrayMessage[9] = 'Слайдер со сложным содержимым\r\n';
            } else {

                countDiffSlider = 0;
                resultPrice -= diffSliderPrice;
                arrayMessage[9] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;     
        }));

        $('input[name="photo-gallery"]').on('click', (function(){
            photoGalleryPrice = $("input[name='photo-gallery']").val();
            if(countPhotoGallery == 0){  
                countPhotoGallery = 1;
                resultPrice += parseInt(photoGalleryPrice);
                arrayMessage[10] = 'Фотогалерея\r\n';
            } else {

                countPhotoGallery = 0;
                resultPrice -= photoGalleryPrice;
                arrayMessage[10] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;        
        }));

        $('input[name="swim-menu"]').on('click', (function(){
            swimMenuPrice = $("input[name='swim-menu']").val();
            if(countSwimMenu == 0){  
                countSwimMenu = 1;
                resultPrice += parseInt(swimMenuPrice);
                arrayMessage[11] = 'Плавающее меню\r\n';
            } else {

                countSwimMenu = 0;
                resultPrice -= swimMenuPrice;
                arrayMessage[11] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;        
        }));

        $('input[name="integ-soc"]').on('click', (function(){
            integSocPrice = $("input[name='integ-soc']").val();
            if(countIntegSoc == 0){  
                countIntegSoc = 1;
                resultPrice += parseInt(integSocPrice);
                arrayMessage[12] = 'Интеграция с соцсетями\r\n';
            } else {

                countIntegSoc = 0;
                resultPrice -= integSocPrice;
                arrayMessage[12] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;        
        }));

        $('input[name="filling"]').on('click', (function(){
            fillingPrice = $("input[name='filling']").val();
            if(countFilling == 0){  
                countFilling = 1;
                resultPrice += parseInt(fillingPrice);
                arrayMessage[13] = 'Наполнение сайта\r\n';
            } else {

                countFilling = 0;
                resultPrice -= fillingPrice;
                arrayMessage[13] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;        
        }));

        $('input[name="form-back"]').on('click', (function(){
            formBackPrice = $("input[name='form-back']").val();
            if(countFormBack == 0){  
                countFormBack = 1;
                resultPrice += parseInt(formBackPrice);
                arrayMessage[14] = 'Простая форма обратной связи\r\n';
            } else {

                countFormBack = 0;
                resultPrice -= formBackPrice;
                arrayMessage[14] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;   
        }));

        $('input[name="pop-up-form"]').on('click', (function(){
            popUpFormPrice = $("input[name='pop-up-form']").val();
            if(countPopUpForm == 0){  
                countPopUpForm = 1;
                resultPrice += parseInt(popUpFormPrice);
                arrayMessage[15] = 'Pop-up форма обратной связи\r\n';
            } else {

                countPopUpForm = 0;
                resultPrice -= popUpFormPrice;
                arrayMessage[15] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;        
        }));

        $('input[name="hosting"]').on('click', (function(){
            hostingPrice = $("input[name='hosting']").val();
            if(countHosting == 0){  
                countHosting = 1;
                resultPrice += parseInt(hostingPrice);
                arrayMessage[16] = 'Хостинг\r\n';
            } else {

                countHosting = 0;
                resultPrice -= hostingPrice;
                arrayMessage[16] = '';
            } 
            document.getElementById('resultPrice').textContent=resultPrice;         
        }));

        $('.arrow-up').on('click', (function(){
            counterPageOfDoc +=1;
            resultPrice += 1500;
            document.getElementById('counter').textContent=counterPageOfDoc; 
            document.getElementById('resultPrice').textContent=resultPrice;
            arrayMessage[17] = '\r\nКоличество внутренних страниц:  ' + counterPageOfDoc;    
        }));

        $('.arrow-down').on('click', (function(){
            if (counterPageOfDoc > 0) {
                counterPageOfDoc -=1;
                resultPrice -= 1500;
                document.getElementById('resultPrice').textContent=resultPrice;} 
                document.getElementById('counter').textContent=counterPageOfDoc; 
                arrayMessage[17] = '\r\nКоличество внутренних страниц' + counterPageOfDoc;      
        }));

        $.modal.defaults = {
            escapeClose: true,
            clickClose: true,
            showClose: false
        };

        $(".menu-burger, .about-me-menu, .portfolio, .calc ").on('click',function(){
            $(".hambergerIcon").toggleClass("open");
            $(".overlay").toggleClass("open");
            $("html").toggleClass("locked"); 
            $('.main-title-block').toggleClass('main-title-block-block');
            $('.side-panel').toggleClass('side-panel-block');
        });
        


        
        $('#sendMail').on('click', function(){
            var name = $('#name').val().trim();
            var email = $('#email').val().trim();
            var phone = $('#phone').val().trim();
            
            var arrayMessageObject = arrayMessage.reduce(function(acc, cur, i) {
              acc[i] = cur;
              return acc;
            }, {});
            
            if((name == '') || (email == '') || (phone == '')) {
                alert('Заполните пустые поля');
                return false;
            }
        
            $.ajax({
                url: 'ajax/mail.php',
                type: 'POST',
                cache: false,
                data: { 'name': name, 'email': email, 'phone': phone ,
                        'resultPrice': resultPrice, 'arrayMessageObject': arrayMessageObject },
                dataType: 'html',
                beforeSend: function(){
                    $('#sendMail').prop('disable', 'true');
                },
                success: function(data){
                
                    $('#mail-form').trigger('reset');
                    $('#sendMail').prop('disable', 'false');
                    
                }
            });
        });
   
});