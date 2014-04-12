
var interval = 1000;

var startInterval = setInterval(atualizar, interval);


function atualizar() 
{
	var relogio = new Date();
	var hora = relogio.getHours();
	var minu = relogio.getMinutes();
	var seg = relogio.getSeconds();

	var player = document.getElementById("video");
	//Mostrando os segundos apenas para teste
	//player.innerHTML = seg;
    
//001	
    if((hora == 00) && (minu == 00)  && (seg > 00) && (seg < 02)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//002
    }else if((hora == 00) && (minu == 14)  && (seg > 45) && (seg < 47)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//003	
    }else if((hora == 00) && (minu == 25)  && (seg > 00) && (seg < 02)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//004	
    }else if((hora == 00) && (minu == 35)  && (seg > 07) && (seg < 10)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//005	
    }else if((hora == 00) && (minu == 49)  && (seg > 39) && (seg < 41)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//006	
    }else if((hora == 01) && (minu == 04)  && (seg > 46) && (seg < 48)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//007
    }else if((hora == 01) && (minu == 22)  && (seg > 41) && (seg < 43)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//008
    }else if((hora == 01) && (minu == 39)  && (seg > 28) && (seg < 30)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//009
	}else if((hora == 01) && (minu == 54)  && (seg > 45) && (seg < 47)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//010
	}else if((hora == 02) && (minu == 03)  && (seg > 22) && (seg < 25)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//011
	}else if((hora == 02) && (minu == 11)  && (seg > 11) && (seg < 13)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//012
	}else if((hora == 02) && (minu == 21)  && (seg > 55) && (seg < 57)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//013
	}else if((hora == 02) && (minu == 26)  && (seg > 39) && (seg < 41)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//014
	}else if((hora == 02) && (minu == 31)  && (seg > 07) && (seg < 09)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//015
	}else if((hora == 02) && (minu == 40)  && (seg > 44) && (seg < 46)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/taMDQThzV8o?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//016
    }else if((hora == 02) && (minu == 45)  && (seg > 11) && (seg < 13)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//017
    }else if((hora == 02) && (minu == 59)  && (seg > 56) && (seg < 58)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//018	
    }else if((hora == 03) && (minu == 00)  && (seg > 01) && (seg < 03)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//019	
    }else if((hora == 03) && (minu == 10)  && (seg > 08) && (seg < 11)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//020	
    }else if((hora == 03) && (minu == 24)  && (seg > 40) && (seg < 42)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//021	
    }else if((hora == 03) && (minu == 39)  && (seg > 47) && (seg < 49)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//022	
    }else if((hora == 03) && (minu == 57)  && (seg > 42) && (seg < 45)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//023	
    }else if((hora == 04) && (minu == 12)  && (seg > 29) && (seg < 31)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/-r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//024	
    }else if((hora == 04) && (minu == 29)  && (seg > 46) && (seg < 48)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//025
    }else if((hora == 04) && (minu == 38)  && (seg > 23) && (seg < 25)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//026	
    }else if((hora == 04) && (minu == 46)  && (seg > 12) && (seg < 15)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//027
    }else if((hora == 04) && (minu == 56)  && (seg > 56) && (seg < 58)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//028	
    }else if((hora == 05) && (minu == 01)  && (seg > 40) && (seg < 42)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//029	
    }else if((hora == 05) && (minu == 06)  && (seg > 08) && (seg < 10)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//030	
    }else if((hora == 05) && (minu == 15)  && (seg > 45) && (seg < 47)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/taMDQThzV8o?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//031	
    }else if((hora == 05) && (minu == 20)  && (seg > 12) && (seg < 14)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//032	
    }else if((hora == 05) && (minu == 34)  && (seg > 57) && (seg < 59)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//033	
    }else if((hora == 05) && (minu == 45)  && (seg > 12) && (seg < 14)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//034	
    }else if((hora == 05) && (minu == 55)  && (seg > 19) && (seg < 21)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//035	
    }else if((hora == 06) && (minu == 09)  && (seg > 51) && (seg < 53)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//036	
    }else if((hora == 06) && (minu == 24)  && (seg > 48) && (seg < 50)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//037	
    }else if((hora == 06) && (minu == 42)  && (seg > 53) && (seg < 55)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//038	
    }else if((hora == 06) && (minu == 59)  && (seg > 40) && (seg < 42)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/-r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//039	
    }else if((hora == 07) && (minu == 14)  && (seg > 57) && (seg < 59)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//040	
    }else if((hora == 07) && (minu == 23)  && (seg > 34) && (seg < 36)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//041	
    }else if((hora == 07) && (minu == 31)  && (seg > 23) && (seg < 25)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//042	
    }else if((hora == 07) && (minu == 41)  && (seg > 07) && (seg < 09)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//043	
    }else if((hora == 07) && (minu == 45)  && (seg > 51) && (seg < 53)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//044	
    }else if((hora == 07) && (minu == 50)  && (seg > 19) && (seg < 21)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//045	
    }else if((hora == 07) && (minu == 59)  && (seg > 56) && (seg < 58)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/taMDQThzV8o?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//046	
    }else if((hora == 08) && (minu == 04)  && (seg > 23) && (seg < 25)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//047	
    }else if((hora == 08) && (minu == 19)  && (seg > 08) && (seg < 10)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//048	
    }else if((hora == 08) && (minu == 29)  && (seg > 23) && (seg < 25)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//049	
    }else if((hora == 08) && (minu == 39)  && (seg > 30) && (seg < 31)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//050	
    }else if((hora == 08) && (minu == 54)  && (seg > 02) && (seg < 04)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//051	
    }else if((hora == 09) && (minu == 09)  && (seg > 09) && (seg < 11)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//052	
    }else if((hora == 09) && (minu == 27)  && (seg > 04) && (seg < 06)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//053	
    }else if((hora == 09) && (minu == 43)  && (seg > 51) && (seg < 53)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/-r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//054	
    }else if((hora == 09) && (minu == 59)  && (seg > 08) && (seg < 10)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//055	
    }else if((hora == 10) && (minu == 07)  && (seg > 45) && (seg < 47)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//056	
    }else if((hora == 10) && (minu == 15)  && (seg > 34) && (seg < 36)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//057	
    }else if((hora == 10) && (minu == 26)  && (seg > 18) && (seg < 20)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//058	
    }else if((hora == 10) && (minu == 31)  && (seg > 02) && (seg < 04)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//059	
    }else if((hora == 10) && (minu == 35)  && (seg > 30) && (seg < 32)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//060	
    }else if((hora == 10) && (minu == 45)  && (seg > 07) && (seg < 09)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/taMDQThzV8o?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//061	
    }else if((hora == 10) && (minu == 49)  && (seg > 34) && (seg < 36)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//062	
    }else if((hora == 11) && (minu == 04)  && (seg > 19) && (seg < 21)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//063	
    }else if((hora == 11) && (minu == 14)  && (seg > 34) && (seg < 36)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//064	
    }else if((hora == 11) && (minu == 24)  && (seg > 41) && (seg < 43)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//065	
    }else if((hora == 11) && (minu == 39)  && (seg > 03) && (seg < 05)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//066	
    }else if((hora == 11) && (minu == 54)  && (seg > 10) && (seg < 12)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//067	
    }else if((hora == 12) && (minu == 12)  && (seg > 05) && (seg < 07)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//068	
    }else if((hora == 12) && (minu == 28)  && (seg > 52) && (seg < 55)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/-r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//069	
    }else if((hora == 12) && (minu == 44)  && (seg > 09) && (seg < 11)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//070	
    }else if((hora == 12) && (minu == 52)  && (seg > 46) && (seg < 49)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//071	
    }else if((hora == 13) && (minu == 00)  && (seg > 35) && (seg < 37)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//072	
    }else if((hora == 13) && (minu == 11)  && (seg > 19) && (seg < 21)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//073	
    }else if((hora == 13) && (minu == 16)  && (seg > 03) && (seg < 05)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//074	
    }else if((hora == 13) && (minu == 20)  && (seg > 31) && (seg < 33)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//075	
    }else if((hora == 13) && (minu == 30)  && (seg > 08) && (seg < 11)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/taMDQThzV8o?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//076	
    }else if((hora == 13) && (minu == 34)  && (seg > 35) && (seg < 37)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//077	
    }else if((hora == 13) && (minu == 49)  && (seg > 20) && (seg < 22)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//078	
    }else if((hora == 13) && (minu == 59)  && (seg > 35) && (seg < 37)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//079	
    }else if((hora == 14) && (minu == 09)  && (seg > 42) && (seg < 45)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//080	
    }else if((hora == 14) && (minu == 24)  && (seg > 14) && (seg < 16)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//081	
    }else if((hora == 14) && (minu == 39)  && (seg > 21) && (seg < 23)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//082	
    }else if((hora == 14) && (minu == 57)  && (seg > 16) && (seg < 18)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//083	
    }else if((hora == 15) && (minu == 14)  && (seg > 03) && (seg < 05)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/-r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//084	
    }else if((hora == 15) && (minu == 29)  && (seg > 20) && (seg < 22)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//085	
    }else if((hora == 15) && (minu == 37)  && (seg > 57) && (seg < 59)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//086	
    }else if((hora == 15) && (minu == 45)  && (seg > 46) && (seg < 48)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//087	
    }else if((hora == 15) && (minu == 36)  && (seg > 40) && (seg < 42)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//088	
    }else if((hora == 15) && (minu == 41)  && (seg > 24) && (seg < 26)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//089	
    }else if((hora == 15) && (minu == 45)  && (seg > 52) && (seg < 54)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//090	
    }else if((hora == 15) && (minu == 55)  && (seg > 29) && (seg < 31)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/taMDQThzV8o?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//091	
    }else if((hora == 15) && (minu == 59)  && (seg > 56) && (seg < 58)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/gcNPPeps350?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//092	
    }else if((hora == 16) && (minu == 14)  && (seg > 41) && (seg < 43)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/aETAbzQqFW8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//093	
    }else if((hora == 16) && (minu == 24)  && (seg > 56) && (seg < 58)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/GX9lNMVhDec?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//094	
    }else if((hora == 16) && (minu == 35)  && (seg > 03) && (seg < 05)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/WhxYo_yPTsE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//095	
    }else if((hora == 16) && (minu == 49)  && (seg > 35) && (seg < 37)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Pa2aeDIPf10?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//096	
    }else if((hora == 17) && (minu == 04)  && (seg > 42) && (seg < 45)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/lkBEahnTSLE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//097	
    }else if((hora == 17) && (minu == 22)  && (seg > 37) && (seg < 39)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Hn5o8lQX3nE?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//098	
    }else if((hora == 17) && (minu == 39)  && (seg > 24) && (seg < 26)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/-r7hy3GM_c8?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//099	
    }else if((hora == 17) && (minu == 54)  && (seg > 41) && (seg < 43)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/tMyCr5tlSPw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//100	
    }else if((hora == 18) && (minu == 03)  && (seg > 18) && (seg < 20)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/INoPgt8QkHw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//101	
    }else if((hora == 18) && (minu == 11)  && (seg > 07) && (seg < 09)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Nk4EssGCdYY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//102	
    }else if((hora == 18) && (minu == 21)  && (seg > 51) && (seg < 53)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/NkRcAtaGwsY?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//103	
    }else if((hora == 18) && (minu == 26)  && (seg > 35) && (seg < 37)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/Piik1Ma2010?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//104	
    }else if((hora == 18) && (minu == 31)  && (seg > 03) && (seg < 05)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//105	
    }else if((hora == 18) && (minu == 31)  && (seg > 03) && (seg < 05)){
		player.innerHTML = '<iframe class="fundo" width="100%" height="100%" src="//www.youtube.com/embed/r0a0Bs-NoSw?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen></iframe>';
	}
    
    
    
    
    
};




/**
* clearInterval(startInterval);
*/


